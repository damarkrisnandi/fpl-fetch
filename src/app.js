const prefix = '/api'; // root filename
const app = async (req, res) => {
    const requests = require('./requests');
    const findReqRoot = requests.find(data => data.method === req.method &&
         req.url.startsWith(data.url));
    if (findReqRoot) {
        if (findReqRoot.url === req.url) {
            res.writeHead(200, headers);
            res.end(JSON.stringify(findReqRoot.res()));
        } else {
            const findReq = findReqRoot.children.find(data => 
                req.url === findReqRoot.url + data.url(req, res) || req.url === findReqRoot.url + data.url(req, res) + '/'
            );
            if (findReq) {
                findReq.res(req, res);
            } else {
                res.writeHead(404);
                const availEndPoint = [
                    '/bootstrap-static/',
                    '/fixtures/',
                    '/element-summary/{id}',
                    '/manager/{id}',
                    '/history/{id}'
                ];
                res.end(`{"message": "API ENDPOINT NOT FOUND! (endpoint that can be use: ${availEndPoint.join(', ')})"}`);
            }
        }
        
    } else {

        res.writeHead(404);
        res.end('{"message": "NOT FOUND!"}');
    }
}

module.exports = {
    app
}