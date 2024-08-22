const { getLiveData } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError, 
    reqSplit
} = require('../utils/index'); 

const getLiveEvent = async (req, res) => {
    
    try {
        // /live-event/{id}
        const gw = reqSplit(req, 3);;
        const liveData = await getLiveData(gw);
        createResponseBody(res, liveData)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getLiveEvent
}