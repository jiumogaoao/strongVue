let dummyList = require("./dummyList.json");
let Mock = require("mockjs");
dummyList.map(function (file) {
  let f = require("../dummy/"+file);
  Mock.mock(f.url, f.template);
});
