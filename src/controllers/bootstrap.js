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
    const positions = [
        '',
        'goalkeeper',
        'defender',
        'midfielder',
        'forward'
    ]
    try {
        const bootstrap = await getBootstrap();
        const gw = bootstrap.events.filter(o => (new Date()).getTime >= (new Date(o.deadline_time)).getTime).length
        const recomendations = bootstrap.elements.map(data => {
            return {
                id: data.id,
                name: `${data.first_name} ${data.second_name}`,
                cost: parseFloat((data.now_cost / 10).toFixed(2)),
                points: data.total_points,
                goals: data.goals_scored,
                assists: data.assists,
                surplus: data.total_points - (data.now_cost / 10),
                point_per_value: data.total_points / ((data.now_cost * gw) / 100),
                news: data.news,
                chance_of_playing_next_round: data.chance_of_playing_next_round,
                minutes: data.minutes,
                in_dreamteam: data.in_dreamteam,
                gw,
                position: positions[data.element_type]
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