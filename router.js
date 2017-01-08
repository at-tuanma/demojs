function route(pathname) {
  console.log("About to route a request for " + pathname);
  var readfile = require("./readfile")
  readfile.readfile("demo.txt")
}

exports.route = route;
