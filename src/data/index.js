const axios = require('axios');

const api_url = 'https://fantasy.premierleague.com/api';
const managerInfoApi = `${api_url}/entry`;
const leagueInfoApi = `${api_url}/leagues-classic`
const leagueH2hInfoApi = `${api_url}/leagues-h2h-matches`
const headers = {'Content-Type': 'application/json'};

const getResult = (url) => {
    const result = new Promise((resolve, reject) => {
        axios.get(url, { headers })
        .then(data => {
            resolve(data.data)
        })
        // .catch(() => {
        //     reject('error call axios')
        // })
    })
    
    return result
}

const getBootstrap = async () => await getResult(`${api_url}/bootstrap-static/`);
const getFixtures = async () => await getResult(`${api_url}/fixtures/`);
const getElementSummary = async (id) => await getResult(`${api_url}/element-summary/${id}/`);
const getManagerInfo = async (id) => await getResult(`${managerInfoApi}/${id}/`);
const getManagerHistory = async (id) => await getResult(`${managerInfoApi}/${id}/history/`);
// https://fantasy.premierleague.com/api/entry/512709/event/34/picks/
const getPicksData = async (eid, gw) => await getResult(`${managerInfoApi}/${eid}/event/${gw}/picks/`);

const getLeague = async (id, page) => await getResult(`${leagueInfoApi}/${id}/standings/?page_standings=${page}`)
const getH2hLeagueMatch = async (id, page, gw) => await getResult(`${leagueH2hInfoApi}/league/${id}/?page_standings=${page}${gw ? '&event=' + gw : ''}`)
const getLiveData = async (gw) => await getResult(`${api_url}/event/${gw}/live/`)

module.exports = {
    getBootstrap,
    getFixtures,
    getElementSummary,
    getManagerInfo,
    getManagerHistory,
    getPicksData,
    getLeague,
    getH2hLeagueMatch,
    getLiveData
}