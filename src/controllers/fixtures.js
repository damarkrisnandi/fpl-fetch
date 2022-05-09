const { getFixtures } = require('../data/index');

const { 
    createResponseBody, 
    createResponseError 
} = require('../utils/index'); 

const getAll = async (req, res) => {
    
    try {
        const fixtures = await getFixtures();
        createResponseBody(res, fixtures)
    } catch (error) {
        createResponseError(res, error)
    }
}

module.exports = {
    getAll
}