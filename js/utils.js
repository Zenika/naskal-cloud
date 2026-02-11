/**
 * @file utils.js
 * @description Utility functions for score color mapping and model updates
 * @requires config.js
 * @requires data.js (benchmarkModel)
 */

/**
 * Calculates a text color based on the score (red to green gradient)
 * @param {number} score - Score between 0 and 100
 * @returns {string} CSS color
 */
function getScoreColor(score) {
    return BENCHMARK_CONFIG.SCORE_TIERS.find(t => score >= t.min).color;
}

/**
 * Updates the score of a specific sub-dimension
 * @param {string} dimensionId - ID of the dimension
 * @param {string} subDimensionId - ID of the sub-dimension
 * @param {number} score - New score (0-100)
 */
function updateSubDimensionScore(dimensionId, subDimensionId, score) {
    const dimension = benchmarkModel.getDimension(dimensionId);
    if (!dimension) {
        throw new Error(`Dimension ${dimensionId} not found`);
    }
    const subDimension = dimension.getSubDimension(subDimensionId);
    if (!subDimension) {
        throw new Error(`SubDimension ${subDimensionId} not found in dimension ${dimensionId}`);
    }
    subDimension.setScore(score);
}

/**
 * Updates the weight of a specific sub-dimension
 * @param {string} dimensionId - ID of the dimension
 * @param {string} subDimensionId - ID of the sub-dimension
 * @param {number} weight - New weight
 */
function updateSubDimensionWeight(dimensionId, subDimensionId, weight) {
    const dimension = benchmarkModel.getDimension(dimensionId);
    if (!dimension) {
        throw new Error(`Dimension ${dimensionId} not found`);
    }
    const subDimension = dimension.getSubDimension(subDimensionId);
    if (!subDimension) {
        throw new Error(`SubDimension ${subDimensionId} not found in dimension ${dimensionId}`);
    }
    subDimension.weight = weight;
}

/**
 * Updates a vendor's score for a specific sub-dimension
 * @param {string} vendorId - Vendor ID
 * @param {string} subDimensionId - Sub-dimension ID
 * @param {number} score - New score (0-100)
 */
function updateVendorScore(vendorId, subDimensionId, score) {
    const vendor = benchmarkModel.getVendor(vendorId);
    if (!vendor) {
        throw new Error(`Vendor ${vendorId} not found`);
    }
    vendor.setScore(subDimensionId, score);
}

/**
 * Returns the short display name for a vendor, using configured short names
 * with fallback to parenthesized abbreviation or first segment of the name
 * @param {Vendor} vendor - Vendor object
 * @returns {string} Short display name
 */
function getVendorShortName(vendor) {
    return BENCHMARK_CONFIG.VENDOR_SHORT_NAMES[vendor.id]
        || vendor.name.match(/\((.*?)\)/)?.[1]
        || vendor.name.split(' / ')[0];
}
