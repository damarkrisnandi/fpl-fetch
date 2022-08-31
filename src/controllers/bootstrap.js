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
                cost: parseFloat((data.now_cost / 10).toFixed(2)),
                points: data.total_points,
                goals: data.goals_scored,
                assists: data.assists,
                surplus: data.total_points - (data.now_cost / 10),
                point_per_value: data.total_points / (data.now_cost / 10),
                news: data.news,
                chance_of_playing_next_round: data.chance_of_playing_next_round,
                minutes: data.minutes,
                in_dreamteam: data.in_dreamteam
            }
        })

        recomendations.sort((a, b) => b.point_per_value - a.point_per_value)
        createResponseBody(res, recomendations)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getAll, getRecomendation
}