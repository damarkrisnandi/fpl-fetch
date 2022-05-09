const FplData = require('../data/index');
const getById = async (id) => {
    const data = await FplData.getManagerInfo(id);
    return data;
} 

const getHistory = async (id) => {
    const data = await FplData.getManagerHistory(id);
    return data;
}
module.exports = {
    getById,
    getHistory
}