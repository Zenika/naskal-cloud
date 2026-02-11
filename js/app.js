/**
 * @file app.js
 * @description Application bootstrap: BenchmarkApp namespace, keyboard navigation, DOMContentLoaded, module exports
 * @requires config.js
 * @requires models.js
 * @requires data.js
 * @requires utils.js
 * @requires renderer-table.js
 * @requires renderer-graph.js
 * @requires renderer-quadrant.js
 * @requires weights.js
 */

/**
 * Application state namespace
 */
const BenchmarkApp = {
    model: benchmarkModel,
    isFirstRender: true
};

/**
 * Sets up keyboard navigation for dimension rows
 */
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        const target = e.target;
        if (!target.classList.contains('dimension-row')) return;

        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            const dimId = target.id.replace('dim-row-', '');
            toggleDimension(dimId);
        }
    });
}

// Automatic launch on load (if in browser)
if (typeof window !== 'undefined') {
    window.addEventListener('DOMContentLoaded', () => {
        try {
            // Remove skeleton loader
            const skeleton = document.getElementById('table-skeleton');
            if (skeleton) skeleton.remove();

            renderBenchmarkTable();
            initKeyboardNavigation();
            initQuadrantControls();

            // Animate score counters on first render
            if (BenchmarkApp.isFirstRender) {
                animateScoreCounters();
                BenchmarkApp.isFirstRender = false;
            }
        } catch (error) {
            console.error('Benchmark initialization error:', error);
            const container = document.getElementById('benchmark-table-container');
            if (container) {
                container.innerHTML = '<p class="benchmark-error">An error occurred while loading the benchmark. Please refresh the page.</p>';
            }
        }
    });
}

// CommonJS export guard for potential Node.js testing (globals from other scripts)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = {
        SubDimension,
        Dimension,
        Vendor,
        AnalysisAxis,
        BenchmarkModel,
        benchmarkModel,
        initializeBenchmarkModel,
        updateSubDimensionScore,
        updateSubDimensionWeight,
        updateVendorScore,
        getVendorShortName,
        BENCHMARK_CONFIG,
        BenchmarkApp
    };
}
