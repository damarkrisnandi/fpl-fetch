const { getLeague } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError, 
    reqSplit
} = require('../utils/index'); 

const getLeagueById = async (req, res) => {
    
    try {
        // /league/{id}/{page}
        const id = reqSplit(req, 3);
        const page = reqSplit(req, 4);
        const league = await getLeague(id, page);
        createResponseBody(res, league)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getLeagueById
}