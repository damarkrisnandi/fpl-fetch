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

module.exports = {
    getAll
}