// this file is root of the project

const http = require('http');
const serverless = require('serverless-http');
const { app } = require('./app');

module.exports.handler = serverless(app);