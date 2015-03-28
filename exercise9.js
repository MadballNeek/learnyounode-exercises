var http = require("http");
var bl = require("bl");

var results = {};
var urls = process.argv.slice(2, 5);
var count = 0;
var expected = 0;

for (var i = 0; i < urls.length; i++) {
    httpGet(urls[i]);
    expected++;
}

function httpGet(url) {
    http.get(url, function(response) {
        response.pipe(bl(function(err, data) {
            if (err) {
                return console.error(err);
            }

            results[url] = data.toString();
            count++;
            if (count === expected) {
                isCompleted();
            }
        }));
    });
}

function isCompleted() {
    for (var i = 0; i < urls.length; ++i) {
        console.log(results[urls[i]]);
    }
}