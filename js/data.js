/**
 * @file data.js
 * @description Initial benchmark data (dimensions, axes, vendors, scores) and singleton benchmarkModel
 * @requires models.js
 */

// =============================================================================
// DIMENSIONS DATA
// =============================================================================

const DIMENSIONS_DATA = [
    {
        id: '1',
        name: 'Performance',
        subDimensions: [
            { id: '1.1', name: 'Compute (CPU/GPU)', desc: 'SPEC CPU, FLOPS, execution time (POV-RAY, CoreMark), etc.' },
            { id: '1.2', name: 'Storage', desc: 'IOPS, throughput (MB/s), read/write latency (IOzone, Bonnie++)' },
            { id: '1.3', name: 'Networking', desc: 'Latency (ms), bandwidth (Gbps), packet loss rate' },
            { id: '1.4', name: 'Global Application', desc: 'Response time, transactions per second (TPS)' }
        ]
    },
    {
        id: '2',
        name: 'Cost & Economic Efficiency',
        subDimensions: [
            { id: '2.1', name: 'Pricing Models', desc: 'Cost \u20ac/vCPU-hour, effective savings rate (reserved instances, spot, savings plans)' },
            { id: '2.2', name: 'Total Cost of Ownership (TCO)', desc: 'Global TCO (\u20ac/month), cost per workload, egress / data transfer fees' },
            { id: '2.3', name: 'Optimization', desc: 'Cost/performance ratio, savings via auto-scaling / rightsizing' }
        ]
    },
    {
        id: '3',
        name: 'Scalability & Elasticity',
        subDimensions: [
            { id: '3.1', name: 'Horizontal / Vertical Scaling', desc: 'Provisioning time, maximum instances / scale limit' },
            { id: '3.2', name: 'Auto-scaling', desc: 'Reaction time to load, scaling precision' },
            { id: '3.3', name: 'Elasticity', desc: 'Resource demand vs. load intensity ratio, scale-down time' }
        ]
    },
    {
        id: '4',
        name: 'Availability & Reliability',
        subDimensions: [
            { id: '4.1', name: 'Uptime / SLA', desc: '% availability (99.9 / 99.99 / 99.999), annual downtime (min)' },
            { id: '4.2', name: 'Fault Tolerance', desc: 'MTBF, MTTR, multi-AZ / multi-region' },
            { id: '4.3', name: 'Geo-distribution', desc: 'Number of regions / availability zones, inter-region latency' }
        ]
    },
    {
        id: '5',
        name: 'Security & Compliance',
        subDimensions: [
            { id: '5.1', name: 'Security Controls', desc: 'Encryption at rest/in transit, advanced IAM, WAF, CIS benchmark scores' },
            { id: '5.2', name: 'Certifications', desc: 'GDPR, ISO 27001, SOC 2, SecNumCloud, EUCS, etc. (number & relevance)' },
            { id: '5.3', name: 'Risk Management', desc: 'Vulnerability detection / remediation time, proactive alerts' }
        ]
    },
    {
        id: '6',
        name: 'Support & User Experience',
        subDimensions: [
            { id: '6.1', name: 'Interface & Tools', desc: 'Console / CLI / API quality, usability score, learning curve' },
            { id: '6.2', name: 'Customer Support', desc: 'Response time (support SLA), NPS / satisfaction, levels (basic \u2192 enterprise)' },
            { id: '6.3', name: 'Documentation', desc: 'Completeness, freshness, multi-language availability' }
        ]
    },
    {
        id: '7',
        name: 'Integration & Compatibility',
        subDimensions: [
            { id: '7.1', name: 'APIs & Ecosystem', desc: 'Number of APIs, Kubernetes / Terraform compatibility / open standards' },
            { id: '7.2', name: 'Migration & Portability', desc: 'Native migration tools, data egress costs, ease of exit (lock-in)' },
            { id: '7.3', name: 'Partnerships', desc: 'Number of certified integrations (SaaS, DevOps tools, etc.)' }
        ]
    },
    {
        id: '8',
        name: 'Innovation & Features',
        subDimensions: [
            { id: '8.1', name: 'Advanced Services', desc: 'AI/ML offerings, serverless, edge, quantum, number of unique services' },
            { id: '8.2', name: 'Innovation Pace', desc: 'Launch frequency, public roadmap, R&D investment' }
        ]
    },
    {
        id: '9',
        name: 'Sustainability & Environment',
        subDimensions: [
            { id: '9.1', name: 'Energy Efficiency', desc: 'PUE (Power Usage Effectiveness), % renewable energy' },
            { id: '9.2', name: 'Carbon Footprint', desc: 'gCO\u2082eq / kWh or per vCPU-hour, native carbon measurement tools' }
        ]
    },
    {
        id: '10',
        name: 'Governance & Lock-in',
        subDimensions: [
            { id: '10.1', name: 'Portability / Open Standards', desc: 'Container support / open formats, multi-cloud ease' },
            { id: '10.2', name: 'Data Sovereignty', desc: 'Data residency (sovereign regions), GDPR / SecNumCloud / etc. compliance' }
        ]
    },
    {
        id: '11',
        name: 'Digital Sovereignty',
        subDimensions: [
            { id: '11.1', name: 'Strategic Sovereignty', desc: '% EU capital/shareholders (>50-61% for SecNumCloud), governance stability, GAIA-X / EU initiatives participation' },
            { id: '11.2', name: 'Legal & Jurisdictional Sovereignty', desc: 'Exposure to extra-EU laws (CLOUD Act), EU-only legal entity, immunity clauses against foreign injunctions' },
            { id: '11.3', name: 'Data & AI Sovereignty', desc: '% data/AI stored/processed in EU (100% required), customer-managed encryption, access auditability, EU AI model control' },
            { id: '11.4', name: 'Operational Sovereignty', desc: 'Operations autonomy (EU personnel), support without extra-EU dependencies, MTTR incidents without external recourse' },
            { id: '11.5', name: 'Supply Chain Sovereignty', desc: '% EU suppliers/components, supply chain traceability, audits, resilience to disruptions' },
            { id: '11.6', name: 'Technological Sovereignty', desc: '% open source, non-proprietary APIs, open standard interoperability, portability (migration time/cost)' },
            { id: '11.7', name: 'Security & Compliance Sovereignty', desc: 'EU/FR certifications (SecNumCloud 3.2, EUCS High, NIS2/DORA), ANSSI audits, vulnerabilities linked to non-EU dependencies' },
            { id: '11.8', name: 'Environmental Sovereignty', desc: '% renewable energy sourced in EU, controlled carbon footprint, EU Green Deal alignment' }
        ]
    }
];

// =============================================================================
// AXES DATA
// =============================================================================

const AXES_DATA = [
    {
        id: 'perf_quality',
        name: 'Performance / Quality',
        weights: { '1': 0.4, '3': 0.3, '4': 0.3 }
    },
    {
        id: 'price_value',
        name: 'Price / Value for money',
        weights: { '2': 0.7, '1': 0.3 }
    },
    {
        id: 'ability_execute',
        name: 'Ability to Execute',
        weights: { '1': 0.1, '3': 0.1, '4': 0.2, '5': 0.2, '6': 0.2, '7': 0.2 }
    },
    {
        id: 'completeness_vision',
        name: 'Completeness of Vision',
        weights: { '8': 0.3, '9': 0.1, '10': 0.2, '11': 0.4 }
    },
    {
        id: 'innovation_modernity',
        name: 'Innovation / Modernity',
        weights: { '8': 0.7, '7': 0.3 }
    },
    {
        id: 'tech_maturity',
        name: 'Technical Maturity / Reliability',
        weights: { '4': 0.4, '5': 0.4, '6': 0.2 }
    }
];

// =============================================================================
// VENDORS DATA
// =============================================================================

const VENDORS_DATA = [
    { id: 'aws', name: 'Amazon Web Services (AWS)' },
    { id: 'azure', name: 'Microsoft Azure' },
    { id: 'gcp', name: 'Google Cloud Platform (GCP)' },
    { id: 'alibaba', name: 'Alibaba Cloud' },
    { id: 'oracle', name: 'Oracle Cloud' },
    { id: 'ibm', name: 'IBM Cloud' },
    { id: 'ovh', name: 'OVHcloud' },
    { id: 'scaleway', name: 'Scaleway' },
    { id: 'outscale', name: '3DS Outscale' },
    { id: 'orange', name: 'Orange Business' },
    { id: 'tsystems', name: 'Deutsche Telekom / T-Systems' },
    { id: 'hetzner', name: 'Hetzner' },
    { id: 'ionos', name: 'IONOS' },
    { id: 'aruba', name: 'Aruba Cloud' },
    { id: 'sap', name: 'SAP (BTP)' }
];

// =============================================================================
// SCORE PROFILES & INITIALIZATION
// =============================================================================

/**
 * Applies initial scores to a vendor based on its profile
 * @param {Vendor} vendor
 */
function applyInitialScores(vendor) {
    const profiles = {
        hyperscaler_us: {
            perf: 88, cost: 55, scale: 92, avail: 92, sec: 85, supp: 88, integ: 90, innov: 92, sust: 80, gov: 45, sov: 20
        },
        hyperscaler_cn: {
            perf: 85, cost: 70, scale: 88, avail: 85, sec: 65, supp: 70, integ: 75, innov: 82, sust: 65, gov: 35, sov: 10
        },
        enterprise: {
            perf: 78, cost: 50, scale: 78, avail: 86, sec: 85, supp: 88, integ: 85, innov: 78, sust: 75, gov: 55, sov: 35
        },
        eu_sovereign: {
            perf: 75, cost: 80, scale: 72, avail: 84, sec: 88, supp: 82, integ: 80, innov: 65, sust: 86, gov: 90, sov: 94
        },
        eu_value: {
            perf: 70, cost: 88, scale: 68, avail: 78, sec: 72, supp: 68, integ: 65, innov: 55, sust: 82, gov: 78, sov: 82
        }
    };

    let p = profiles.eu_value;

    switch (vendor.id) {
        case 'aws': case 'azure': case 'gcp': p = profiles.hyperscaler_us; break;
        case 'alibaba': p = profiles.hyperscaler_cn; break;
        case 'oracle': case 'ibm': case 'sap': p = profiles.enterprise; break;
        case 'ovh': case 'scaleway': case 'outscale': case 'orange': case 'tsystems': p = profiles.eu_sovereign; break;
        case 'hetzner': case 'ionos': case 'aruba': p = profiles.eu_value; break;
    }

    const jitter = (id, offset) => {
        let val = 0;
        for (let i = 0; i < id.length; i++) val += id.charCodeAt(i);
        return ((val + offset) % 7) - 3; // -3 to +3
    };

    const map = {
        '1.1': p.perf + jitter(vendor.id, 1),
        '1.2': p.perf + jitter(vendor.id, 2),
        '1.3': p.perf + 2 + jitter(vendor.id, 3),
        '1.4': p.perf - 2 + jitter(vendor.id, 4),
        '2.1': p.cost + 5 + jitter(vendor.id, 5),
        '2.2': p.cost + jitter(vendor.id, 6),
        '2.3': p.cost - 5 + jitter(vendor.id, 7),
        '3.1': p.scale + jitter(vendor.id, 8),
        '3.2': p.scale + 2 + jitter(vendor.id, 9),
        '3.3': p.scale - 2 + jitter(vendor.id, 10),
        '4.1': p.avail + 2 + jitter(vendor.id, 11),
        '4.2': p.avail + jitter(vendor.id, 12),
        '4.3': p.avail - 5 + jitter(vendor.id, 13),
        '5.1': p.sec + jitter(vendor.id, 14),
        '5.2': p.sec + 3 + jitter(vendor.id, 15),
        '5.3': p.sec - 3 + jitter(vendor.id, 16),
        '6.1': p.supp + 2 + jitter(vendor.id, 17),
        '6.2': p.supp + jitter(vendor.id, 18),
        '6.3': p.supp - 2 + jitter(vendor.id, 19),
        '7.1': p.integ + 3 + jitter(vendor.id, 20),
        '7.2': p.integ + jitter(vendor.id, 21),
        '7.3': p.integ - 3 + jitter(vendor.id, 22),
        '8.1': p.innov + 2 + jitter(vendor.id, 23),
        '8.2': p.innov - 2 + jitter(vendor.id, 24),
        '9.1': p.sust + 2 + jitter(vendor.id, 25),
        '9.2': p.sust - 2 + jitter(vendor.id, 26),
        '10.1': p.gov + jitter(vendor.id, 27),
        '10.2': p.gov + 5 + jitter(vendor.id, 28),
        '11.1': p.sov + jitter(vendor.id, 29),
        '11.2': p.sov + jitter(vendor.id, 30),
        '11.3': p.sov + jitter(vendor.id, 31),
        '11.4': p.sov + jitter(vendor.id, 32),
        '11.5': p.sov + jitter(vendor.id, 33),
        '11.6': p.sov + jitter(vendor.id, 34),
        '11.7': p.sov + jitter(vendor.id, 35),
        '11.8': p.sov + jitter(vendor.id, 36)
    };

    // Specific vendor adjustments to emphasize differences
    if (vendor.id === 'aws') {
        map['8.1'] = 95; map['8.2'] = 94; map['7.1'] = 95; map['1.4'] = 92;
        map['2.1'] -= 5; map['2.2'] -= 5;
    }
    if (vendor.id === 'azure') {
        map['7.3'] = 94; map['8.1'] = 92; map['6.2'] = 92;
        map['5.1'] += 3; map['7.2'] += 5;
    }
    if (vendor.id === 'gcp') {
        map['1.3'] = 95; map['7.1'] = 94; map['8.1'] = 96;
        map['4.3'] += 5;
    }
    if (vendor.id === 'alibaba') {
        map['2.1'] += 10; map['2.2'] += 10;
        map['11.1'] = 5; map['11.2'] = 5;
    }
    if (vendor.id === 'oracle') {
        map['1.1'] += 10; map['1.2'] += 12;
        map['7.2'] -= 10;
    }
    if (vendor.id === 'ibm') {
        map['11.6'] += 10; map['8.1'] += 5;
        map['6.1'] -= 5;
    }
    if (vendor.id === 'ovh') {
        map['2.1'] = 88; map['11.1'] = 95; map['9.1'] = 92;
        map['8.1'] -= 5;
    }
    if (vendor.id === 'scaleway') {
        map['8.1'] += 5; map['6.1'] = 88;
        map['4.3'] -= 10;
    }
    if (vendor.id === 'outscale') {
        map['11.7'] = 98; map['5.2'] = 98; map['11.2'] = 98;
        map['2.1'] -= 15;
    }
    if (vendor.id === 'orange' || vendor.id === 'tsystems') {
        map['6.2'] = 92; map['11.4'] = 96; map['5.3'] = 92;
        map['1.1'] -= 5;
    }
    if (vendor.id === 'hetzner') {
        map['2.1'] = 96; map['2.2'] = 96; map['2.3'] = 94;
        map['8.1'] = 30;
        map['3.2'] = 50;
    }
    if (vendor.id === 'ionos') {
        map['6.2'] = 85; map['7.2'] += 5;
        map['8.1'] = 45;
    }
    if (vendor.id === 'aruba') {
        map['2.1'] += 5; map['11.3'] += 5;
        map['8.1'] = 40;
    }
    if (vendor.id === 'sap') {
        map['1.4'] = 92; map['7.3'] = 95; map['10.1'] -= 10;
        map['2.1'] -= 10;
    }

    // Apply scores (clamped to 0-100)
    for (const sdId of Object.keys(map)) {
        vendor.setScore(sdId, Math.min(100, Math.max(0, Math.round(map[sdId]))));
    }
}

/**
 * Creates and initializes the benchmark model with dimensions, axes and vendors
 * @returns {BenchmarkModel} Initialized benchmark model
 */
function initializeBenchmarkModel() {
    const benchmark = new BenchmarkModel();

    // Initialize dimensions and sub-dimensions
    DIMENSIONS_DATA.forEach(dimInfo => {
        const dimension = new Dimension(dimInfo.id, dimInfo.name);
        dimInfo.subDimensions.forEach(sdInfo => {
            dimension.addSubDimension(new SubDimension(
                sdInfo.id,
                sdInfo.name,
                sdInfo.desc,
                1.0,
                0
            ));
        });
        dimension.normalizeWeights();
        benchmark.addDimension(dimension);
    });

    // Initialize analysis axes
    AXES_DATA.forEach(axisInfo => {
        benchmark.addAxis(new AnalysisAxis(axisInfo.id, axisInfo.name, axisInfo.weights));
    });

    // Initialize vendors with scores
    VENDORS_DATA.forEach(vInfo => {
        const vendor = new Vendor(vInfo.id, vInfo.name);
        benchmark.addVendor(vendor);
        applyInitialScores(vendor);
    });

    return benchmark;
}

// Global model singleton
const benchmarkModel = initializeBenchmarkModel();
