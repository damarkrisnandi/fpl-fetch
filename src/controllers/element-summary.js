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

        const recomendationSummary = elSummary.history.map(data => {
            return {
                gameweek: data.round,
                surplus_per_game: data.total_points - data.value
            }
        })
        createResponseBody(res, recomendationSummary)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getById,
    getPlayerSurplusById
}