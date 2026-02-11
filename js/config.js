/**
 * @file config.js
 * @description Benchmark configuration constants (colors, score tiers, graph layout, animation timings)
 */

const BENCHMARK_CONFIG = {
    VENDOR_COLORS: {
        aws: '#FF9900',
        azure: '#0078D4',
        gcp: '#4285F4',
        alibaba: '#FF6A00',
        oracle: '#F80000',
        ibm: '#054ADA',
        ovh: '#123F6D',
        scaleway: '#4F0599',
        outscale: '#E42381',
        orange: '#FF7900',
        tsystems: '#E20074',
        hetzner: '#D50C2D',
        ionos: '#003D8F',
        aruba: '#FF7800',
        sap: '#0FAAFF'
    },
    VENDOR_SHORT_NAMES: {
        aws: 'AWS',
        azure: 'Azure',
        gcp: 'GCP',
        alibaba: 'Alibaba',
        oracle: 'Oracle',
        ibm: 'IBM',
        ovh: 'OVHcloud',
        scaleway: 'Scaleway',
        outscale: 'Outscale',
        orange: 'Orange',
        tsystems: 'T-Systems',
        hetzner: 'Hetzner',
        ionos: 'IONOS',
        aruba: 'Aruba',
        sap: 'SAP'
    },
    SCORE_TIERS: [
        { min: 80, color: '#4ade80' },  // green
        { min: 60, color: '#a3e635' },  // lime
        { min: 40, color: '#facc15' },  // yellow
        { min: 20, color: '#fb923c' },  // orange
        { min: 0,  color: '#f87171' }   // red
    ],
    GRAPH: {
        WIDTH: 1200,
        NODE_WIDTH: 280,
        NODE_HEIGHT: 44,
        VERTICAL_GAP: 10,
        PADDING: 40,
        AXIS_SPACING: 60
    },
    ANIMATION: {
        SCORE_COUNTER_DURATION: 800,
        SCORE_COUNTER_STAGGER: 30,
        POINT_STAGGER: 50
    }
};
