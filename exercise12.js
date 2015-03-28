var http = require("http");
var map = require("through2-map");

var server = http.createServer(function callback(req, res) {
    if (req.method === "POST") {
        res.writeHead(200, "OK", { "Content-Type": "text/plain"});
        req.pipe(map(function(data) {
            return data.toString().toUpperCase();
        })).pipe(res);
    } else {
        return res.end("I only accept POST calls");
    }
});

server.listen(process.argv[2]);