const { parse, stringify } = require('flatted');

const cors = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'OPTIONS, GET',
    'Access-Control-Max-Age': 2592000
};

const headers = { 
    'Content-Type': 'application/json',
    ...cors
};

const reqSplit = (req, pos) => req.url.split('/')[pos];

const createResponseBody = (res, body) => {
    res.writeHead(200, headers);
    res.end(JSON.stringify(parse(stringify(body))))
}

const createResponseError = (res, message) => {
    res.writeHead(500, headers)
    res.end(JSON.stringify({message}));
}

module.exports = {
    reqSplit,
    createResponseBody,
    createResponseError
}