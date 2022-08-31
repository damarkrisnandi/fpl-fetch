const { getElementSummary } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index');

const getById = async (req, res) => {
    
    try {
        // /element-summary/{id}
        const id = req.url.split('/')[3];
        const elSummary = await getElementSummary(id);
        createResponseBody(res, elSummary)
    } catch (error) {
        createResponseError(res, error)
    }
}

const getPlayerSurplusById = async (req, res) => {
    
    try {
        // /element-summary/{id}
        const id = req.url.split('/')[3];
        const elSummary = await getElementSummary(id);

        const surplusSummary = elSummary.history.map(data => {
            return {
                gameweek: data.round,
                surplus_per_game: parseFloat((data.total_points - (data.value / 10)).toFixed(2)),
                point_per_value: parseFloat((data.total_points / (data.value / 10)).toFixed(2)),
            }
        })
        createResponseBody(res, surplusSummary)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getById,
    getPlayerSurplusById
}