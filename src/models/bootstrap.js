const FplData = require('../data/index')
const getAll = async () => {
    const data = await FplData.getBootstrap();
    return data;
} 

module.exports = {
    getAll
}