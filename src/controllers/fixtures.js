const Fixtures = require('../models/fixtures');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getAll = async (req, res) => {
    
    try {
        const fixtures = await Fixtures.getAll();
        createResponseBody(res, fixtures)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getAll
}