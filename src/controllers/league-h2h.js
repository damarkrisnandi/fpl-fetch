const { getH2hLeagueMatch } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getH2hLeagueMatch = async (req, res) => {
    
    try {
        // /league-h2h/{id}/{page}/{gw}
        const id = req.url.split('/')[3];
        const page = req.url.split('/')[4];
        const gw = req.url.split('/')[5];
        const league = await getH2hLeagueMatch(id, page, gw);
        createResponseBody(res, league)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getH2hLeagueMatch
}