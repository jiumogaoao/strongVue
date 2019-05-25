const fs = require("fs");
module.exports = (path) => { // 读文件函数
    return new Promise((res, rej) => {
        fs.readdir(path, (err, files) => {
            if (err) res(err)
            res(files)
        })
    })
}
