/**
 * @file renderer-table.js
 * @description Benchmark table rendering: axes table, dimensions table, score animation, expand/collapse
 * @requires config.js
 * @requires data.js (benchmarkModel)
 * @requires utils.js (getScoreColor, getVendorShortName)
 */

/**
 * Generates and displays the benchmark table in the DOM
 */
function renderBenchmarkTable() {
    const container = document.getElementById('benchmark-table-container');
    if (!container) return;

    const vendors = benchmarkModel.vendors;
    const dimensions = benchmarkModel.dimensions;
    const axes = benchmarkModel.axes;

    const getTableHeader = (title) => `
        <thead>
            <tr>
                <th class="sticky-col" scope="col">${title}</th>
                ${vendors.map(v => {
                    const vendorColor = BENCHMARK_CONFIG.VENDOR_COLORS[v.id] || '#79b2e8';
                    return `<th class="score-cell" scope="col" title="${v.name}" style="border-bottom: 3px solid ${vendorColor}">${getVendorShortName(v)}</th>`;
                }).join('')}
            </tr>
        </thead>
    `;

    // --- Table 1: Strategic Analysis Axes ---
    let axesHtml = `
        <table class="benchmark-table">
            ${getTableHeader("Strategic Analysis Axes")}
            <tbody>
    `;

    axes.forEach(a => {
        axesHtml += `
            <tr class="axis-row">
                <td class="sticky-col">${a.name}</td>
                ${vendors.map(v => {
                    const score = a.calculateScore(v, benchmarkModel);
                    return `<td class="score-cell axis-score" style="color: ${getScoreColor(score)}">${score.toFixed(1)}</td>`;
                }).join('')}
            </tr>
        `;
    });

    axesHtml += `
            </tbody>
        </table>
    `;

    // --- Table 2: Detailed Dimensions ---
    let dimensionsHtml = `
        <table class="benchmark-table">
            ${getTableHeader("Detailed Dimensions")}
            <tbody>
    `;

    dimensions.forEach(d => {
        dimensionsHtml += `
            <tr class="dimension-row" id="dim-row-${d.id}" onclick="toggleDimension('${d.id}')" tabindex="0" role="button" aria-expanded="false">
                <td class="sticky-col"><span class="toggle-icon" aria-hidden="true">\u25b6</span> ${d.name}</td>
                ${vendors.map(v => {
                    const score = v.calculateDimensionScore(d);
                    return `<td class="score-cell dim-score" style="color: ${getScoreColor(score)}">${score.toFixed(1)}</td>`;
                }).join('')}
            </tr>
        `;

        d.subDimensions.forEach(sd => {
            dimensionsHtml += `
                <tr class="sub-dimension-row collapsed sub-row-of-${d.id}">
                    <td class="sticky-col">
                        ${sd.name}
                        <span class="info-icon" role="img" aria-label="${sd.description.replace(/"/g, '&quot;')}" data-tooltip="${sd.description.replace(/"/g, '&quot;')}">\u24d8</span>
                    </td>
                    ${vendors.map(v => {
                        const score = v.getScore(sd.id);
                        return `<td class="score-cell sub-score" style="color: ${getScoreColor(score)}">${score}</td>`;
                    }).join('')}
                </tr>
            `;
        });
    });

    dimensionsHtml += `
            </tbody>
        </table>
    `;

    container.innerHTML = axesHtml + dimensionsHtml;
}

/**
 * Animates score counters from 0 to their actual value
 * Only runs on first render for a smooth loading effect
 */
function animateScoreCounters() {
    const scoreCells = document.querySelectorAll('.score-cell');
    const duration = BENCHMARK_CONFIG.ANIMATION.SCORE_COUNTER_DURATION;
    const stagger = BENCHMARK_CONFIG.ANIMATION.SCORE_COUNTER_STAGGER;

    scoreCells.forEach((cell, index) => {
        const text = cell.textContent.trim();
        const targetValue = parseFloat(text);
        if (isNaN(targetValue)) return;

        const isInteger = !text.includes('.');
        const decimals = isInteger ? 0 : 1;

        cell.textContent = (0).toFixed(decimals);

        setTimeout(() => {
            const startTime = performance.now();

            const animate = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // easeOutCubic
                const eased = 1 - Math.pow(1 - progress, 3);
                const currentValue = targetValue * eased;

                cell.textContent = currentValue.toFixed(decimals);

                if (progress < 1) {
                    requestAnimationFrame(animate);
                } else {
                    cell.textContent = targetValue.toFixed(decimals);
                }
            };

            requestAnimationFrame(animate);
        }, index * stagger);
    });
}

/**
 * Handles showing/hiding sub-dimensions with a small animation
 * @param {string} dimId - ID of the dimension to toggle
 */
function toggleDimension(dimId) {
    const dimRow = document.getElementById(`dim-row-${dimId}`);
    const subRows = document.querySelectorAll(`.sub-row-of-${dimId}`);
    const isExpanding = !dimRow.classList.contains('expanded');

    dimRow.classList.toggle('expanded');
    dimRow.setAttribute('aria-expanded', isExpanding);
    const toggleIcon = dimRow.querySelector('.toggle-icon');
    if (toggleIcon) toggleIcon.textContent = isExpanding ? '\u25bc' : '\u25b6';

    subRows.forEach(row => {
        if (isExpanding) {
            row.classList.remove('collapsed');
            row.style.opacity = '0';
            row.style.transform = 'translateY(-10px)';

            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    row.style.opacity = '1';
                    row.style.transform = 'translateY(0)';
                });
            });
        } else {
            row.style.opacity = '0';
            row.style.transform = 'translateY(-10px)';
            const collapseDelay = 300; // matches CSS transition duration
            setTimeout(() => {
                if (!dimRow.classList.contains('expanded')) {
                    row.classList.add('collapsed');
                }
            }, collapseDelay);
        }
    });
}
