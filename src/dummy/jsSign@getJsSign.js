var config= require("../../build/config.js");
module.exports = {
  "url": config.API + "fxc/services/ms/fxc/jsSign@getJsSign.japi",
  "template":{
    "result":{},
    "id":"@integer(1000,2000)",
  },
};
