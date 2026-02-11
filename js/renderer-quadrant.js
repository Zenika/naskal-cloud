/**
 * @file renderer-quadrant.js
 * @description Quadrant visualization: controls, vendor points, info card, legend
 * @requires config.js
 * @requires data.js (benchmarkModel)
 * @requires utils.js (getScoreColor, getVendorShortName)
 * @requires renderer-graph.js (updateGraphExpansionState)
 */

/**
 * Initializes the quadrant controls (dropdowns)
 */
function initQuadrantControls() {
    const xSelect = document.getElementById('x-axis-select');
    const ySelect = document.getElementById('y-axis-select');
    if (!xSelect || !ySelect) return;

    const axes = benchmarkModel.axes;

    // Fill dropdowns
    const optionsHtml = axes.map(a => `<option value="${a.id}">${a.name}</option>`).join('');
    xSelect.innerHTML = optionsHtml;
    ySelect.innerHTML = optionsHtml;

    // Default values if available
    if (axes.find(a => a.id === 'completeness_vision')) xSelect.value = 'completeness_vision';
    if (axes.find(a => a.id === 'ability_execute')) ySelect.value = 'ability_execute';

    // Change listeners
    xSelect.addEventListener('change', renderQuadrant);
    ySelect.addEventListener('change', renderQuadrant);

    // Initial render
    renderQuadrant();
}

/**
 * Shows a vendor info card on hover
 * @param {MouseEvent} event
 * @param {Vendor} vendor
 * @param {AnalysisAxis} xAxis
 * @param {AnalysisAxis} yAxis
 * @param {string} color - Vendor brand color
 */
function showVendorInfoCard(event, vendor, xAxis, yAxis, color) {
    hideVendorInfoCard();

    const xScore = xAxis.calculateScore(vendor, benchmarkModel);
    const yScore = yAxis.calculateScore(vendor, benchmarkModel);

    const card = document.createElement('div');
    card.className = 'vendor-info-card';
    card.id = 'vendor-info-card';
    card.style.borderColor = color;
    card.innerHTML = `
        <strong style="color:${color}">${vendor.name}</strong>
        <div class="vendor-info-scores">
            <div>${xAxis.name}: <span style="color:${getScoreColor(xScore)}">${xScore.toFixed(1)}</span></div>
            <div>${yAxis.name}: <span style="color:${getScoreColor(yScore)}">${yScore.toFixed(1)}</span></div>
        </div>
    `;

    document.body.appendChild(card);

    // Position with bounds checking
    const rect = card.getBoundingClientRect();
    let left = event.clientX + 15;
    let top = event.clientY - 10;

    if (left + rect.width > window.innerWidth - 10) {
        left = event.clientX - rect.width - 15;
    }
    if (top + rect.height > window.innerHeight - 10) {
        top = window.innerHeight - rect.height - 10;
    }
    if (top < 10) top = 10;

    card.style.left = left + 'px';
    card.style.top = top + 'px';
}

/**
 * Hides the vendor info card
 */
function hideVendorInfoCard() {
    const card = document.getElementById('vendor-info-card');
    if (card) card.remove();
}

/**
 * Displays vendors in the quadrant based on selected axes
 */
function renderQuadrant() {
    const xSelect = document.getElementById('x-axis-select');
    const ySelect = document.getElementById('y-axis-select');

    // Update graph expansion state when quadrant axes change
    updateGraphExpansionState();

    const container = document.getElementById('vendor-points-container');
    const xLabel = document.getElementById('x-axis-label');
    const yLabel = document.getElementById('y-axis-label');

    if (!xSelect || !ySelect || !container) return;

    const xAxis = benchmarkModel.getAxis(xSelect.value);
    const yAxis = benchmarkModel.getAxis(ySelect.value);
    const vendors = benchmarkModel.vendors;

    if (!xAxis || !yAxis) return;

    // Update axis labels
    if (xLabel) xLabel.textContent = xAxis.name;
    if (yLabel) yLabel.textContent = yAxis.name;

    // Clean container
    container.innerHTML = '';

    // Place points
    vendors.forEach((v, index) => {
        const xScore = xAxis.calculateScore(v, benchmarkModel);
        const yScore = yAxis.calculateScore(v, benchmarkModel);

        const left = xScore;
        const bottom = yScore;

        const point = document.createElement('div');
        point.className = 'vendor-point';
        point.style.left = `${left}%`;
        point.style.bottom = `${bottom}%`;
        point.style.animationDelay = `${index * BENCHMARK_CONFIG.ANIMATION.POINT_STAGGER}ms`;

        const vendorColor = BENCHMARK_CONFIG.VENDOR_COLORS[v.id] || '#79b2e8';
        point.style.backgroundColor = vendorColor;
        point.style.boxShadow = `0 0 10px ${vendorColor}80`;

        point.innerHTML = `<span class="vendor-label">${getVendorShortName(v)}</span>`;
        point.addEventListener('mouseenter', (e) => showVendorInfoCard(e, v, xAxis, yAxis, vendorColor));
        point.addEventListener('mouseleave', hideVendorInfoCard);

        container.appendChild(point);
    });

    // Generate legend
    const quadrantSection = document.querySelector('.quadrant-section');
    if (quadrantSection) {
        let legend = quadrantSection.querySelector('.quadrant-legend');
        if (!legend) {
            legend = document.createElement('div');
            legend.className = 'quadrant-legend';
            quadrantSection.appendChild(legend);
        }
        legend.innerHTML = vendors.map(v => {
            const color = BENCHMARK_CONFIG.VENDOR_COLORS[v.id] || '#79b2e8';
            return `<div class="legend-item"><span class="legend-dot" style="background-color:${color}"></span>${getVendorShortName(v)}</div>`;
        }).join('');
    }
}
