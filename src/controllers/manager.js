const { getManagerInfo, getManagerHistory, getPicksData } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getById = async (req, res) => {
    
    try {
        // /manager/{id}
        const id = req.url.split('/')[3];
        const manager = await getManagerInfo(id);
        createResponseBody(res, manager)
    } catch (error) {
        createResponseError(res, error)
    }
}

const getHistory = async (req, res) => {
    
    try {
        // /history/{id}
        const id = req.url.split('/')[3];
        const manager = await getManagerHistory(id);
        createResponseBody(res, manager)
    } catch (error) {
        createResponseError(res, error)
    }
}

const getPicks = async (req, res) => {
    
    try {
        // /picks/{id}/{gw}
        const eid = req.url.split('/')[3];
        const gw = req.url.split('/')[4];
        const picks = await getPicksData(eid, gw);
        createResponseBody(res, picks)
    } catch (error) {
        createResponseError(res, error)
    }
} 

module.exports = {
    getById,
    getHistory,
    getPicks
}