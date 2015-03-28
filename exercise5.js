var fs = require("fs");
var path = require("path");

var directory = process.argv[2];
var extension = process.argv[3];

fs.readdir(directory, function(err, list) {
    list.forEach(function(entry) {
        if (path.extname(entry) === "." + extension) {
            console.log(entry);
        }
    });
});