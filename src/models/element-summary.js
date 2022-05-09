const FplData = require('../data/index');
const getById = async (id) => {
    const data = await FplData.getElementSummary(id);
    return data;
} 

module.exports = {
    getById
}