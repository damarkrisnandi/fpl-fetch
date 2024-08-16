const Bootstrap = require('./controllers/bootstrap');
const Fixtures = require('./controllers/fixtures');
const ElementSummary = require('./controllers/element-summary');
const Manager = require('./controllers/manager');
const LiveEvent = require('./controllers/league');
const League = require('./controllers/league');
const LeagueH2h = require('./controllers/league-h2h');

const { reqSplit } = require('./utils/index'); 

const requests = [
    {
      method: 'GET',
      url: '/api',
      headers: {
        contentType: 'application/json',
      },
      res: (req, res) => { return {message: 'Welcome to My REST API'} },
      children: [
          {
            url: (req, res) => '/bootstrap-static',
            res: async (req, res) => { Bootstrap.getAll(req, res) },
          },

          {
            url: (req, res) => '/recomendation',
            res: async (req, res) => { Bootstrap.getRecomendation(req, res) },
          },

          {
            url: (req, res) => '/fixtures',
            res: async (req, res) => { Fixtures.getAll(req, res) },
          },

          {
            url: (req, res) => `/element-summary/${reqSplit(req, 3)}`,
            res: async (req, res) => { ElementSummary.getById(req, res) },
          },

          {
            url: (req, res) => `/player-surpluses/${reqSplit(req, 3)}`,
            res: async (req, res) => { ElementSummary.getPlayerSurplusById(req, res) },
          },

          {
            url: (req, res) => `/manager/${reqSplit(req, 3)}`,
            res: async (req, res) => { Manager.getById(req, res) },
          },

          {
            url: (req, res) => `/history/${reqSplit(req, 3)}`,
            res: async (req, res) => { Manager.getHistory(req, res) },
          },
          {
            url: (req, res) => `/picks/${reqSplit(req, 3)}/${reqSplit(req, 4)}`,
            res: async (req, res) => { Manager.getPicks(req, res) },
          },
          {
            url: (req, res) => `/live-event/${reqSplit(req, 3)}`,
            res: async (req, res) => { LiveEvent.getLiveEvent(req, res) },
          },
          {
            url: (req, res) => `/league/${reqSplit(req, 3)}/${reqSplit(req, 4)}`,
            res: async (req, res) => { League.getLeagueById(req, res) },
          },
          {
            url: (req, res) => `/league-h2h/${reqSplit(req, 3)}/${reqSplit(req, 4)}/${reqSplit(req, 5)}`,
            res: async (req, res) => { LeagueH2h.getH2hLeagueByIdAndGw(req, res) },
          },

      ]
    }
];

module.exports = requests;