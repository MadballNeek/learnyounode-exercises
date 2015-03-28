var fs = require("fs");
var path = require("path");

module.exports = function(directory, extension, callback) {
    fs.readdir(directory, function(err, list) {
        if (err) {
            return callback(err);
        }
        
        list = list.filter(function(entry) {
            return path.extname(entry) === "." + extension;
        });
        callback(null, list);
    });
}