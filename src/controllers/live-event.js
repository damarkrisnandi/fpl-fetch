const { getLiveData } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getLiveEvent = async (req, res) => {
    
    try {
        // /history/{id}
        const gw = req.url.split('/')[3];
        const liveData = await getLiveData(gw);
        createResponseBody(res, fixtures)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getLiveEvent
}