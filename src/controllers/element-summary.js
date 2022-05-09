const ElementSummary = require('../models/element-summary');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getById = async (req, res) => {
    
    try {
        // /element-summary/{id}
        const id = req.url.split('/')[3];
        const elSummary = await ElementSummary.getById(id);
        createResponseBody(res, elSummary)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getById
}