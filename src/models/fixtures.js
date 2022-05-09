const FplData = require('../data/index')
const getAll = async () => {
    const data = await FplData.getFixtures();
    return data;
} 

module.exports = {
    getAll
}