const fs = require("fs")
const path = require("path")
const HTMLWebpackPlugin = require("html-webpack-plugin")
const alias = require("./alias")
const resolve = (p) => path.resolve(__dirname,"..",p)
const config = require("./config.js")
const entryDir = resolve("src/page")
const outputDir = resolve("dist")
const templatePath = resolve("template/index.html")
const entryFiles = fs.readdirSync(entryDir)
const
  entry = {
    dummy:"./src/assets/dummy.js"
  },
  output = {},
  htmlPlugins = [];

var argv = require('yargs').argv;
const project = argv.project||"index"

// Map alias
function resolveAlias(){
  Object.keys(alias).forEach(attr => {
    const val = alias[attr]
    alias[attr] = resolve(val)
  })
}

// Handle Entry and Output of Webpack
function resolveEntryAndOutput(env){
  //console.log(entryDir)
  //entryFiles.forEach(dir => {
    entry[project] = resolve(`${entryDir}/${project}`)
    if(env === "dev" || env === "dummy"){
      output.filename = "js/[name].bundle.js";
    }else{
      output.filename = "js/[name].bundle.[hash].js";
    }
    output.path = outputDir;
    output.publicPath = (env == "prod"?config.OSS:"");
  //})
}

// Handle HTML Templates
function combineHTMLWithTemplate(env){
  entryFiles.forEach(dir => {
    const htmlPlugin = new HTMLWebpackPlugin({
      filename:`${dir}.html`,
      template:templatePath,
      chunks:[dir,"vendor",(env == "dummy"?"dummy":null)]
    })
    htmlPlugins.push(htmlPlugin)
  })
}

function initConfig(env){
  resolveAlias();
  resolveEntryAndOutput(env);
  combineHTMLWithTemplate(env);
  return{
    entry,
    output,
    alias,
    htmlPlugins
  }
}

exports.initConfig = initConfig;
exports.resolve = resolve;
