function route(pathname, callBack) {
  console.log("About to route a request for " + pathname);
  var readfile = require("./readFile")
  readfile.readfileSync(pathname, function(data) {
    callBack(data);
  })
}

exports.route = route;
