var config= require("../../build/config.js");
module.exports = {
  "url": config.API + "fxapi/services/system/ctmall/homepage@getAllCitys.japi",
  "template":{
    "result":{
      "isctmall":"@boolean",
      "portals|1-3":[
        {"gmt_create":"@Date(yyyy-MM-dd) @time",
          "code":"@word(4)",
          "appclass":"@word(4)",
          "pay_acount_id":"@integer(10000,20000)",
          "gmt_modified":"@Date(yyyy-MM-dd) @time",
          "brand_id":"@integer(0,9999)",
          "portal_show":"@integer(0,1)",
          "domain":"fx3t-ysqg.lhs11.com;120.77.208.204:9199",
          "pay_ways":"3.2.2;3.0",
          "name":"@cword(4)",
          "homepage_id":"@integer(0,1)",
          "code_img":"",
          "shelf_id":"@integer(0,100)",
          "id":"@integer(0,1000)",
          "def_distributor_id":"@integer(10000,15000)"},
      ],
      "citys|20-34":[
        {"name":"@city","id":"@integer(0,100000)","portal_id":"@integer(10000,20000)"},
      ],
    },"id":"@integer(100000,200000)"},
};
