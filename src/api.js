// this file is root of the project

const http = require('http');
const serverless = require('serverless-http');
const { app } = require('./app');

const PORT = process.env.PORT || 9001;
http.createServer(app)
.listen(
    PORT, 
    () => {
        console.log(`server listen on port: ${PORT}`);
    });

module.exports.handler = serverless(app);