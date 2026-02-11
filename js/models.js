/**
 * @file models.js
 * @description Pure data model classes: SubDimension, Dimension, Vendor, AnalysisAxis, BenchmarkModel
 * @requires config.js
 */

/**
 * Class representing a sub-dimension of the benchmark
 */
class SubDimension {
    /**
     * @param {string} id - Unique identifier (e.g., "1.1", "2.3")
     * @param {string} name - Name of the sub-dimension
     * @param {string} description - Description of main measures/metrics
     * @param {number} weight - Relative weight (0-1) in the parent dimension
     * @param {number} score - Sub-dimension score (0-100)
     */
    constructor(id, name, description, weight = 1, score = 0) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.weight = weight;
        this.score = score;
    }

    /**
     * Updates the sub-dimension score
     * @param {number} newScore - New score (0-100)
     */
    setScore(newScore) {
        if (newScore < 0 || newScore > 100) {
            throw new Error(`Score must be between 0 and 100. Received: ${newScore}`);
        }
        this.score = newScore;
    }

    /**
     * Returns the weighted score of this sub-dimension
     * @returns {number} Weighted score
     */
    getWeightedScore() {
        return this.score * this.weight;
    }
}

/**
 * Class representing a benchmark dimension
 */
class Dimension {
    /**
     * @param {string} id - Unique identifier (e.g., "1", "2")
     * @param {string} name - Name of the dimension
     * @param {SubDimension[]} subDimensions - List of sub-dimensions
     */
    constructor(id, name, subDimensions = []) {
        this.id = id;
        this.name = name;
        this.subDimensions = subDimensions;
    }

    /**
     * Adds a sub-dimension to this dimension
     * @param {SubDimension} subDimension - Sub-dimension to add
     */
    addSubDimension(subDimension) {
        this.subDimensions.push(subDimension);
    }

    /**
     * Normalizes sub-dimension weights so their sum = 1
     */
    normalizeWeights() {
        const totalWeight = this.subDimensions.reduce((sum, sd) => sum + sd.weight, 0);
        if (totalWeight > 0) {
            this.subDimensions.forEach(sd => {
                sd.weight = sd.weight / totalWeight;
            });
        }
    }

    /**
     * Calculates the aggregated score of the dimension based on weighted sub-dimension scores
     * @returns {number} Aggregated score (0-100)
     */
    calculateAggregatedScore() {
        const totalWeight = this.subDimensions.reduce((sum, sd) => sum + sd.weight, 0);
        if (totalWeight === 0) return 0;

        const weightedSum = this.subDimensions.reduce((sum, sd) => sum + sd.getWeightedScore(), 0);
        return weightedSum / totalWeight;
    }

    /**
     * Returns a sub-dimension by its ID
     * @param {string} subDimensionId - Sub-dimension ID
     * @returns {SubDimension|undefined}
     */
    getSubDimension(subDimensionId) {
        return this.subDimensions.find(sd => sd.id === subDimensionId);
    }
}

/**
 * Class representing a vendor (cloud provider)
 */
class Vendor {
    /**
     * @param {string} id - Unique identifier of the vendor
     * @param {string} name - Name of the vendor
     */
    constructor(id, name) {
        this.id = id;
        this.name = name;
        // Scores per sub-dimension: { subDimensionId: score }
        this.scores = {};
    }

    /**
     * Sets the score for a sub-dimension
     * @param {string} subDimensionId - Sub-dimension ID (e.g., "1.1", "2.3")
     * @param {number} score - Score (0-100)
     */
    setScore(subDimensionId, score) {
        if (score < 0 || score > 100) {
            throw new Error(`Score must be between 0 and 100. Received: ${score}`);
        }
        this.scores[subDimensionId] = score;
    }

    /**
     * Returns the score for a sub-dimension
     * @param {string} subDimensionId - Sub-dimension ID
     * @returns {number} Score (0-100), or 0 if not defined
     */
    getScore(subDimensionId) {
        return this.scores[subDimensionId] ?? 0;
    }

    /**
     * Calculates the aggregated score for a given dimension
     * @param {Dimension} dimension - Dimension for which to calculate the score
     * @returns {number} Aggregated score (0-100)
     */
    calculateDimensionScore(dimension) {
        const totalWeight = dimension.subDimensions.reduce((sum, sd) => sum + sd.weight, 0);
        if (totalWeight === 0) return 0;

        const weightedSum = dimension.subDimensions.reduce((sum, sd) => {
            return sum + (this.getScore(sd.id) * sd.weight);
        }, 0);

        return weightedSum / totalWeight;
    }

    /**
     * Exports vendor data to JSON
     * @returns {Object}
     */
    toJSON() {
        return {
            id: this.id,
            name: this.name,
            scores: { ...this.scores }
        };
    }
}

/**
 * Class representing an analysis axis of the benchmark (aggregation of dimensions)
 */
class AnalysisAxis {
    /**
     * @param {string} id - Axis ID
     * @param {string} name - Axis name
     * @param {Object} dimensionWeights - Map of weights per dimension { dimensionId: weight }
     */
    constructor(id, name, dimensionWeights = {}) {
        this.id = id;
        this.name = name;
        this.dimensionWeights = dimensionWeights;
    }

    /**
     * Normalizes weights so their sum equals 1
     */
    normalizeWeights() {
        const total = Object.values(this.dimensionWeights).reduce((sum, w) => sum + w, 0);
        if (total > 0) {
            for (const id in this.dimensionWeights) {
                this.dimensionWeights[id] /= total;
            }
        }
    }

    /**
     * Calculates the axis score for a given vendor
     * @param {Vendor} vendor
     * @param {BenchmarkModel} model
     * @returns {number} Score (0-100)
     */
    calculateScore(vendor, model) {
        let score = 0;
        let totalWeight = 0;

        for (const [dimId, weight] of Object.entries(this.dimensionWeights)) {
            const dimension = model.getDimension(dimId);
            if (dimension) {
                score += vendor.calculateDimensionScore(dimension) * weight;
                totalWeight += weight;
            }
        }

        return totalWeight > 0 ? score / totalWeight : 0;
    }
}

/**
 * Main class managing the complete benchmark
 */
class BenchmarkModel {
    constructor() {
        this.dimensions = [];
        this.vendors = [];
        this.axes = [];
    }

    /**
     * Adds a dimension to the benchmark
     * @param {Dimension} dimension - Dimension to add
     */
    addDimension(dimension) {
        this.dimensions.push(dimension);
    }

    /**
     * Adds an analysis axis to the benchmark
     * @param {AnalysisAxis} axis
     */
    addAxis(axis) {
        axis.normalizeWeights();
        this.axes.push(axis);
    }

    /**
     * Returns an axis by its ID
     * @param {string} axisId
     * @returns {AnalysisAxis|undefined}
     */
    getAxis(axisId) {
        return this.axes.find(a => a.id === axisId);
    }

    /**
     * Returns a dimension by its ID
     * @param {string} dimensionId - Dimension ID
     * @returns {Dimension|undefined}
     */
    getDimension(dimensionId) {
        return this.dimensions.find(d => d.id === dimensionId);
    }

    /**
     * Adds a vendor to the benchmark
     * @param {Vendor} vendor - Vendor to add
     */
    addVendor(vendor) {
        this.vendors.push(vendor);
    }

    /**
     * Returns a vendor by its ID
     * @param {string} vendorId - Vendor ID
     * @returns {Vendor|undefined}
     */
    getVendor(vendorId) {
        return this.vendors.find(v => v.id === vendorId);
    }

    /**
     * Returns all vendors
     * @returns {Vendor[]}
     */
    getAllVendors() {
        return this.vendors;
    }

    /**
     * Returns aggregated scores per dimension for a vendor
     * @param {string} vendorId - Vendor ID
     * @returns {Object[]} List of dimensions with their scores for this vendor
     */
    getVendorDimensionScores(vendorId) {
        const vendor = this.getVendor(vendorId);
        if (!vendor) {
            throw new Error(`Vendor ${vendorId} not found`);
        }
        return this.dimensions.map(d => ({
            dimensionId: d.id,
            dimensionName: d.name,
            score: vendor.calculateDimensionScore(d)
        }));
    }

    /**
     * Returns all aggregated scores per dimension
     * @returns {Object[]} List of dimensions with their scores
     */
    getAllDimensionScores() {
        return this.dimensions.map(d => ({
            id: d.id,
            name: d.name,
            score: d.calculateAggregatedScore()
        }));
    }

    /**
     * Exports the complete benchmark structure
     * @returns {Object} JSON structure of the benchmark
     */
    toJSON() {
        return {
            dimensions: this.dimensions.map(d => ({
                id: d.id,
                name: d.name,
                subDimensions: d.subDimensions.map(sd => ({
                    id: sd.id,
                    name: sd.name,
                    description: sd.description,
                    weight: sd.weight
                }))
            })),
            vendors: this.vendors.map(v => {
                const vendorData = v.toJSON();
                vendorData.dimensionScores = this.dimensions.map(d => ({
                    dimensionId: d.id,
                    dimensionName: d.name,
                    score: v.calculateDimensionScore(d)
                }));
                return vendorData;
            })
        };
    }
}
