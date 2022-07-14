const fs = require('fs');

console.log('Program Start');

// - Blocking I/O
// const fileContent = fs.readFile('hello.js');
fs.readFile('./hello.js', function(err, contents) {
    // binary 출력
    console.log(contents);
});

console.log('Program Ended');