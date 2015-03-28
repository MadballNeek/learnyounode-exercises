var fs = require("fs");

fs.readFile(process.argv[2], function(err, data) {
    // Read in a file and get the number of lines in it. 
    // length - 1 necessary since last line will not have a newline
    console.log(data.toString().split('\n').length - 1);
});