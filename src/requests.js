const Bootstrap = require('./controllers/bootstrap');
const Fixtures = require('./controllers/fixtures');
const ElementSummary = require('./controllers/element-summary');
const Manager = require('./controllers/manager');
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
            url: (req, res) => '/fixtures',
            res: async (req, res) => { Fixtures.getAll(req, res) },
          },

          {
            url: (req, res) => `/element-summary/${req.url.split('/')[3]}`,
            res: async (req, res) => { ElementSummary.getById(req, res) },
          },

          {
            url: (req, res) => `/manager/${req.url.split('/')[3]}`,
            res: async (req, res) => { Manager.getById(req, res) },
          },

          {
            url: (req, res) => `/history/${req.url.split('/')[3]}`,
            res: async (req, res) => { Manager.getHistory(req, res) },
          },
      ]
    }
];

module.exports = requests;