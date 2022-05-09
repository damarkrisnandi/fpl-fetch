const Manager = require('../models/manager');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getById = async (req, res) => {
    
    try {
        // /manager/{id}
        const id = req.url.split('/')[3];
        const manager = await Manager.getById(id);
        createResponseBody(res, manager)
    } catch (error) {
        createResponseError(res, error)
    }
}

const getHistory = async (req, res) => {
    
    try {
        // /history/{id}
        const id = req.url.split('/')[3];
        const manager = await Manager.getHistory(id);
        createResponseBody(res, manager)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getById,
    getHistory
}