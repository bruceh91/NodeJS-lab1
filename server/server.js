const pathX = require('path');
const fsX = require('fs');

let dataPath = pathX.join(__dirname, '../chirps.json');

fsX.readFile(dataPath, {
    encoding: 'UTF-8'
}, (err,data) =>{
    var chirp = JSON.parse(data);

    console.log(chirp.chirps);
})