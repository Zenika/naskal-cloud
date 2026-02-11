/**
 * @file weights.js
 * @description Weight slider overlay: renormalization logic and slider UI
 * @requires data.js (benchmarkModel)
 * @requires renderer-graph.js (renderWeightsGraph)
 * @requires renderer-table.js (renderBenchmarkTable)
 * @requires renderer-quadrant.js (renderQuadrant)
 */

/**
 * Renormalizes sub-dimension weights within a dimension after one has been overridden.
 * The overridden weight is locked; remaining weight is distributed proportionally among non-overridden siblings.
 * @param {Dimension} dimension - Dimension whose sub-dimension weights to renormalize
 */
function renormalizeSubDimensionWeights(dimension) {
    let overriddenTotal = 0;
    const nonOverridden = [];
    dimension.subDimensions.forEach(sd => {
        if (sd.overridden) {
            overriddenTotal += sd.weight;
        } else {
            nonOverridden.push(sd);
        }
    });
    const remaining = Math.max(0, 1 - overriddenTotal);
    const currentNonOverriddenTotal = nonOverridden.reduce((sum, sd) => sum + sd.weight, 0);
    nonOverridden.forEach(sd => {
        if (currentNonOverriddenTotal > 0) {
            sd.weight = (sd.weight / currentNonOverriddenTotal) * remaining;
        } else if (nonOverridden.length > 0) {
            sd.weight = remaining / nonOverridden.length;
        }
    });
}

/**
 * Renormalizes axis dimension weights after one has been overridden.
 * The overridden weight is locked; remaining weight is distributed proportionally among non-overridden siblings.
 * @param {AnalysisAxis} axis - Axis whose dimension weights to renormalize
 */
function renormalizeAxisWeights(axis) {
    if (!axis.overriddenWeights) axis.overriddenWeights = {};
    let overriddenTotal = 0;
    const nonOverridden = [];
    for (const dimId in axis.dimensionWeights) {
        if (axis.overriddenWeights[dimId]) {
            overriddenTotal += axis.dimensionWeights[dimId];
        } else {
            nonOverridden.push(dimId);
        }
    }
    const remaining = Math.max(0, 1 - overriddenTotal);
    const currentNonOverriddenTotal = nonOverridden.reduce((sum, id) => sum + axis.dimensionWeights[id], 0);
    nonOverridden.forEach(id => {
        if (currentNonOverriddenTotal > 0) {
            axis.dimensionWeights[id] = (axis.dimensionWeights[id] / currentNonOverriddenTotal) * remaining;
        } else if (nonOverridden.length > 0) {
            axis.dimensionWeights[id] = remaining / nonOverridden.length;
        }
    });
}

/**
 * Opens an HTML slider overlay on a weight label to allow editing the weight value.
 */
function openWeightSlider(evt, parentId, childId, currentWeight, type) {
    evt.stopPropagation();

    const existing = document.getElementById('weight-slider-overlay');
    if (existing) existing.remove();

    const textEl = evt.target;
    const svg = textEl.closest('svg');
    const ctm = textEl.getScreenCTM();
    const bbox = textEl.getBBox();
    const pt = svg.createSVGPoint();
    pt.x = bbox.x + bbox.width / 2;
    pt.y = bbox.y + bbox.height / 2;
    const screenPt = pt.matrixTransform(ctm);

    const overlay = document.createElement('div');
    overlay.id = 'weight-slider-overlay';
    const overlayWidth = 200;
    const overlayHeight = 50;
    let overlayLeft = screenPt.x - 80;
    let overlayTop = screenPt.y - 40;

    if (overlayLeft + overlayWidth > window.innerWidth - 10) {
        overlayLeft = window.innerWidth - overlayWidth - 10;
    }
    if (overlayLeft < 10) overlayLeft = 10;
    if (overlayTop + overlayHeight > window.innerHeight - 10) {
        overlayTop = screenPt.y - overlayHeight - 10;
    }
    if (overlayTop < 10) overlayTop = 10;

    overlay.style.left = overlayLeft + 'px';
    overlay.style.top = overlayTop + 'px';

    // Calculate max allowed value: 100% minus sum of other overridden weights
    let otherOverriddenTotal = 0;
    if (type === 'subdimension') {
        const dim = benchmarkModel.getDimension(parentId);
        if (dim) {
            dim.subDimensions.forEach(sd => {
                if (sd.overridden && sd.id !== childId) {
                    otherOverriddenTotal += sd.weight;
                }
            });
        }
    } else if (type === 'axis') {
        const ax = benchmarkModel.getAxis(parentId);
        if (ax && ax.overriddenWeights) {
            for (const dId in ax.dimensionWeights) {
                if (ax.overriddenWeights[dId] && dId !== childId) {
                    otherOverriddenTotal += ax.dimensionWeights[dId];
                }
            }
        }
    }
    const maxAllowed = Math.max(0, Math.round((1 - otherOverriddenTotal) * 100));

    const slider = document.createElement('input');
    slider.type = 'range';
    slider.min = '0';
    slider.max = String(maxAllowed);
    slider.value = Math.min(Math.round(currentWeight * 100), maxAllowed);
    const valueLabel = document.createElement('span');
    valueLabel.textContent = Math.round(currentWeight * 100) + '%';

    const applyWeight = () => {
        const newWeight = parseInt(slider.value) / 100;
        if (type === 'subdimension') {
            const dimension = benchmarkModel.getDimension(parentId);
            if (dimension) {
                const sd = dimension.getSubDimension(childId);
                if (sd) {
                    sd.weight = newWeight;
                    sd.overridden = true;
                    renormalizeSubDimensionWeights(dimension);
                }
            }
        } else if (type === 'axis') {
            const axis = benchmarkModel.getAxis(parentId);
            if (axis && axis.dimensionWeights[childId] !== undefined) {
                axis.dimensionWeights[childId] = newWeight;
                if (!axis.overriddenWeights) axis.overriddenWeights = {};
                axis.overriddenWeights[childId] = true;
                renormalizeAxisWeights(axis);
            }
        }
        renderWeightsGraph();
        renderBenchmarkTable();
        renderQuadrant();
    };

    slider.addEventListener('input', () => {
        valueLabel.textContent = slider.value + '%';
        applyWeight();
    });

    const commitWeight = () => overlay.remove();

    slider.addEventListener('mouseup', commitWeight);
    slider.addEventListener('touchend', commitWeight);

    const closeOnOutside = (e) => {
        if (!overlay.contains(e.target)) {
            overlay.remove();
            document.removeEventListener('mousedown', closeOnOutside);
        }
    };
    setTimeout(() => document.addEventListener('mousedown', closeOnOutside), 0);

    overlay.appendChild(slider);
    overlay.appendChild(valueLabel);
    document.body.appendChild(overlay);
}
