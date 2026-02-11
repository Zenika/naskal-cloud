/**
 * @file renderer-graph.js
 * @description SVG weights graph: rendering, node toggle, highlight/clear, expansion state
 * @requires config.js
 * @requires data.js (benchmarkModel)
 */

// --- Weights Graph State ---
let graphCollapsedNodes = new Set();
let graphInitialAxesSet = false;

/**
 * Initializes the graph expansion state based on selected quadrant axes
 */
function updateGraphExpansionState() {
    const xSelect = document.getElementById('x-axis-select');
    const ySelect = document.getElementById('y-axis-select');
    if (!xSelect || !ySelect) return;

    const selectedAxes = [xSelect.value, ySelect.value];

    // Reset axis collapse states
    benchmarkModel.axes.forEach(axis => {
        if (selectedAxes.includes(axis.id)) {
            graphCollapsedNodes.delete(axis.id);
        } else {
            graphCollapsedNodes.add(axis.id);
        }
    });

    // If it's the first time, we also collapse all dimensions by default
    if (!graphInitialAxesSet) {
        benchmarkModel.dimensions.forEach(dim => {
            graphCollapsedNodes.add(dim.id);
        });
        graphInitialAxesSet = true;
    }

    renderWeightsGraph();
}

/**
 * Toggles the visibility of children for a graph node
 * @param {string} nodeId - ID of the node to toggle
 */
function toggleGraphNode(nodeId) {
    if (graphCollapsedNodes.has(nodeId)) {
        graphCollapsedNodes.delete(nodeId);
    } else {
        graphCollapsedNodes.add(nodeId);
    }
    renderWeightsGraph();
}

/**
 * Highlights a node and its related paths in the graph
 * @param {string} nodeId - ID of the node to highlight
 * @param {'axis'|'dimension'|'subdimension'} type - Type of the node
 */
function highlightNode(nodeId, type) {
    const svg = document.querySelector('.weights-svg');
    if (!svg) return;

    const highlightNodeRect = (id) => {
        const rect = document.getElementById(`node-${id}`);
        if (rect) {
            rect.classList.add('highlighted-node');
            rect.parentElement.classList.add('node-group-highlighted');
        }
    };

    const highlightLink = (fromId, toId) => {
        const escapeId = (id) => id.replace(/\./g, '\\.');
        const escapedFromId = escapeId(fromId);
        const escapedToId = escapeId(toId);

        const links = svg.querySelectorAll(`.link-from-${escapedFromId}.link-to-${escapedToId}`);
        links.forEach(l => l.classList.add('highlighted-link'));
        const labels = svg.querySelectorAll(`.link-label-from-${escapedFromId}.link-label-to-${escapedToId}`);
        labels.forEach(l => l.classList.add('highlighted-label'));
    };

    if (type === 'axis' && graphCollapsedNodes.has(nodeId)) return;

    highlightNodeRect(nodeId);

    if (type === 'axis') {
        const axis = benchmarkModel.getAxis(nodeId);
        if (axis) {
            Object.keys(axis.dimensionWeights).forEach(dimId => {
                highlightNodeRect(dimId);
                highlightLink(nodeId, dimId);

                const dim = benchmarkModel.getDimension(dimId);
                if (dim && !graphCollapsedNodes.has(dimId)) {
                    dim.subDimensions.forEach(sd => {
                        highlightNodeRect(sd.id);
                        highlightLink(dimId, sd.id);
                    });
                }
            });
        }
    } else if (type === 'dimension') {
        benchmarkModel.axes.forEach(axis => {
            if (axis.dimensionWeights[nodeId] && !graphCollapsedNodes.has(axis.id)) {
                highlightNodeRect(axis.id);
                highlightLink(axis.id, nodeId);
            }
        });

        if (!graphCollapsedNodes.has(nodeId)) {
            const dim = benchmarkModel.getDimension(nodeId);
            if (dim) {
                dim.subDimensions.forEach(sd => {
                    highlightNodeRect(sd.id);
                    highlightLink(nodeId, sd.id);
                });
            }
        }
    } else if (type === 'subdimension') {
        const parentDim = benchmarkModel.dimensions.find(dim =>
            dim.subDimensions.some(sd => sd.id === nodeId)
        );

        if (parentDim) {
            highlightNodeRect(parentDim.id);
            highlightLink(parentDim.id, nodeId);

            benchmarkModel.axes.forEach(axis => {
                if (axis.dimensionWeights[parentDim.id] && !graphCollapsedNodes.has(axis.id)) {
                    highlightNodeRect(axis.id);
                    highlightLink(axis.id, parentDim.id);
                }
            });
        }
    }
}

/**
 * Clears all highlights in the graph
 */
function clearHighlight() {
    const svg = document.querySelector('.weights-svg');
    if (!svg) return;

    svg.querySelectorAll('.highlighted-node').forEach(el => el.classList.remove('highlighted-node'));
    svg.querySelectorAll('.node-group-highlighted').forEach(el => el.classList.remove('node-group-highlighted'));
    svg.querySelectorAll('.highlighted-link').forEach(el => el.classList.remove('highlighted-link'));
    svg.querySelectorAll('.highlighted-label').forEach(el => el.classList.remove('highlighted-label'));
}

/**
 * Renders a visual graph of analysis axes, dimensions, sub-dimensions, and their weights
 */
function renderWeightsGraph() {
    const container = document.getElementById('weights-graph-container');
    if (!container) return;

    const dimensions = benchmarkModel.dimensions;
    const axes = benchmarkModel.axes;

    const width = BENCHMARK_CONFIG.GRAPH.WIDTH;
    const nodeWidth = BENCHMARK_CONFIG.GRAPH.NODE_WIDTH;
    const nodeHeight = BENCHMARK_CONFIG.GRAPH.NODE_HEIGHT;
    const verticalGap = BENCHMARK_CONFIG.GRAPH.VERTICAL_GAP;
    const padding = BENCHMARK_CONFIG.GRAPH.PADDING;

    // 1. Calculate height of Dimensions/Sub-dimensions column
    let dimColumnTotalHeight = 0;
    const dimGroupHeights = {};

    dimensions.forEach(d => {
        const isCollapsed = graphCollapsedNodes.has(d.id);
        const visibleSubDimsCount = isCollapsed ? 0 : d.subDimensions.length;
        const groupHeight = Math.max(1, visibleSubDimsCount) * (nodeHeight + verticalGap);
        dimGroupHeights[d.id] = groupHeight;
        dimColumnTotalHeight += groupHeight + 20;
    });
    dimColumnTotalHeight -= 20;

    // 2. Calculate height of Axes column
    const axisSpacing = BENCHMARK_CONFIG.GRAPH.AXIS_SPACING;
    const axesColumnTotalHeight = axes.length * nodeHeight + (axes.length - 1) * axisSpacing;

    // 3. Determine graph total height
    const contentHeight = Math.max(600, dimColumnTotalHeight, axesColumnTotalHeight);
    const height = contentHeight + (padding * 2);

    let svgHtml = `
        <svg viewBox="0 0 ${width} ${height}" class="weights-svg" width="100%">
            <defs>
                <marker id="arrowhead" markerWidth="10" markerHeight="7" refX="0" refY="3.5" orient="auto">
                    <polygon points="0 0, 10 3.5, 0 7" fill="#333" />
                </marker>
            </defs>
    `;

    const axisX = padding;
    const subDimX = width - padding - nodeWidth;
    const dimX = (axisX + subDimX) / 2;

    const axesYOffset = padding + (contentHeight - axesColumnTotalHeight) / 2;
    const dimsYOffset = padding + (contentHeight - dimColumnTotalHeight) / 2;

    const dimensionPositions = {};
    let currentDimY = dimsYOffset;

    dimensions.forEach(d => {
        const isCollapsed = graphCollapsedNodes.has(d.id);
        const subDimensions = isCollapsed ? [] : d.subDimensions;
        const groupHeight = dimGroupHeights[d.id];
        const dimY = currentDimY + (groupHeight / 2) - (nodeHeight / 2);

        dimensionPositions[d.id] = dimY;

        svgHtml += `
            <g class="graph-node dimension-node-group clickable-node"
               onclick="toggleGraphNode('${d.id}')"
               onmouseenter="highlightNode('${d.id}', 'dimension')"
               onmouseleave="clearHighlight()">
                <rect x="${dimX}" y="${dimY}" width="${nodeWidth}" height="${nodeHeight}" rx="4" class="node-rect dimension-node" id="node-${d.id}" />
                <text x="${dimX + 15}" y="${dimY + 28}" class="node-text">${d.name}</text>
            </g>
        `;

        if (!isCollapsed) {
            subDimensions.forEach((sd, index) => {
                const sdY = currentDimY + index * (nodeHeight + verticalGap);

                const startX = dimX + nodeWidth;
                const startY = dimY + nodeHeight / 2;
                const endX = subDimX;
                const endY = sdY + nodeHeight / 2;

                const gapBetweenNodes = endX - startX;
                const cpX = startX + gapBetweenNodes / 2;
                const pathData = `M ${startX} ${startY} C ${cpX} ${startY}, ${cpX} ${endY}, ${endX} ${endY}`;

                svgHtml += `<path d="${pathData}" class="link-line link-to-${sd.id} link-from-${d.id}" data-from="${d.id}" data-to="${sd.id}" />`;

                const labelY = (startY + endY) / 2;
                const weightPercent = (sd.weight * 100).toFixed(0) + '%';
                const sdOverriddenClass = sd.overridden ? ' overridden-weight' : '';

                svgHtml += `
                    <text x="${cpX}" y="${labelY}" text-anchor="middle" class="link-label link-label-to-${sd.id} link-label-from-${d.id} clickable-weight${sdOverriddenClass}" onclick="openWeightSlider(event, '${d.id}', '${sd.id}', ${sd.weight}, 'subdimension')">${weightPercent}</text>
                `;

                svgHtml += `
                    <g class="graph-node sub-dimension-node-group"
                       onmouseenter="highlightNode('${sd.id}', 'subdimension')"
                       onmouseleave="clearHighlight()">
                        <rect x="${subDimX}" y="${sdY}" width="${nodeWidth}" height="${nodeHeight}" rx="4" class="node-rect" id="node-${sd.id}" />
                        <text x="${subDimX + 15}" y="${sdY + 28}" class="node-text">${sd.name}</text>
                    </g>
                `;
            });
        }

        currentDimY += groupHeight + 20;
    });

    // Draw Axis nodes and links
    let axisY = axesYOffset;

    axes.forEach(a => {
        const isCollapsed = graphCollapsedNodes.has(a.id);

        svgHtml += `
            <g class="graph-node axis-node-group clickable-node"
               onclick="toggleGraphNode('${a.id}')"
               onmouseenter="highlightNode('${a.id}', 'axis')"
               onmouseleave="clearHighlight()">
                <rect x="${axisX}" y="${axisY}" width="${nodeWidth}" height="${nodeHeight}" rx="4" class="node-rect axis-node" id="node-${a.id}" />
                <text x="${axisX + 15}" y="${axisY + 28}" class="node-text">${a.name}</text>
            </g>
        `;

        if (!isCollapsed) {
            for (const [dimId, weight] of Object.entries(a.dimensionWeights)) {
                if (dimensionPositions[dimId] !== undefined) {
                    const startX = axisX + nodeWidth;
                    const startY = axisY + nodeHeight / 2;
                    const endX = dimX;
                    const endY = dimensionPositions[dimId] + nodeHeight / 2;

                    const gapBetweenNodes = endX - startX;
                    const cpX = startX + gapBetweenNodes / 2;
                    const pathData = `M ${startX} ${startY} C ${cpX} ${startY}, ${cpX} ${endY}, ${endX} ${endY}`;

                    svgHtml += `<path d="${pathData}" class="link-line link-to-${dimId} link-from-${a.id}" data-from="${a.id}" data-to="${dimId}" />`;

                    const labelY = (startY + endY) / 2;
                    const weightPercent = (weight * 100).toFixed(0) + '%';
                    const axOverriddenClass = (a.overriddenWeights && a.overriddenWeights[dimId]) ? ' overridden-weight' : '';

                    svgHtml += `
                        <text x="${cpX}" y="${labelY}" text-anchor="middle" class="link-label link-label-to-${dimId} link-label-from-${a.id} clickable-weight${axOverriddenClass}" onclick="openWeightSlider(event, '${a.id}', '${dimId}', ${weight}, 'axis')">${weightPercent}</text>
                    `;
                }
            }
        }
        axisY += nodeHeight + axisSpacing;
    });

    svgHtml += `</svg>`;
    container.innerHTML = svgHtml;
}
