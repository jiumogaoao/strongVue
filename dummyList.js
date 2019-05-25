const path = require('path');
const fs = require("fs");
const readdir = require("./filelist.js");
const filePath = path.resolve(__dirname, './src/dummy');
let pathList = [];
module.exports = async ()=>{
  var list = await readdir(filePath)
  list.map(function (file) {
    if(file.indexOf('js') !== -1){
      pathList.push(file)
    }
    })
    pathList = JSON.stringify(pathList);
    await fs.writeFile('./src/assets/dummyList.json', pathList, function(err) {
    if (err) {
        return console.log(err);
    }
    console.log('./src/assets/dummyList.json');
    });
  }
