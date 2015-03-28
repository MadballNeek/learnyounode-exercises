var fs = require('fs');
// Read in a file and get the number of lines in it. 
// length - 1 necessary since last line will not have a newline
console.log(fs.readFileSync(process.argv[2], 'utf8').split('\n').length - 1);