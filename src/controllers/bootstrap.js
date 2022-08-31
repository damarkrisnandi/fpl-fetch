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
                id: data.id,
                name: `${data.first_name} ${data.second_name}`,
                cost: data.now_cost,
                points: data.total_points,
                goals: data.goals_scored,
                assists: data.assists,
                surplus: data.total_points - (data.now_cost / 10),
                point_per_value: data.total_points / (data.now_cost / 10),
                news: data.news,
                chance_of_playing_next_round: data.chance_of_playing_next_round
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