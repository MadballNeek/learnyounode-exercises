var http = require("http");
var url = require("url");

var server = http.createServer(function callback(req, res) {
    if (req.method === "GET") {
        var reqProp = url.parse(req.url, true);
        var date = new Date(reqProp.query.iso);
        
        var result;
        if (reqProp.pathname === "/api/parsetime") {
            result = JSON.stringify({ hour: date.getHours(), minute: date.getMinutes(), second: date.getSeconds() });
        } else if (reqProp.pathname === "/api/unixtime") {
            result = JSON.stringify({ unixtime: date.getTime() });
        }
        
        if (result) {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(result);
        } else {
            res.writeHead(404);
            res.end()
        }
    }
});

server.listen(process.argv[2]);