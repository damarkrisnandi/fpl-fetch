const { getBootstrap } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getAll = async (req, res) => {
    
    try {
        const bootstrap = await getBootstrap();
        createResponseBody(res, bootstrap)
    } catch (error) {
        createResponseError(res, error)
    }
}

const getRecomendation = async (req, res) => {
    try {
        const bootstrap = await getBootstrap();
        const recomendations = bootstrap.elements.map(data => {
            return {
                name: `${data.first_name} ${data.second_name}`,
                cost: data.now_cost,
                points: data.total_points,
                goals: data.goals_scored,
                assists: data.assists,
                surplus: data.total_points - (data.now_cost / 10)
            }
        })

        recomendations.sort((a, b) => b.surplus - a.surplus)
        createResponseBody(res, recomendations)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getAll, getRecomendation
}