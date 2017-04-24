var http = require("http");
var url = require("url");
var router = require("./router");

function start() {
  function onRequest(request, response) {
    var pathname = url.parse(request.url).pathname;

    var ok = function(data) {
      console.log(data);
      console.log("tuan4912");
      response.writeHead(200, {"Content-Type": "json/html"});
      response.write(data);
      response.end();
    }

  console.log(pathname);
  var string = pathname.substring(1)
  router.route(string,ok);

  }

  http.createServer(onRequest).listen(8888);
  console.log("Server has started.");
}

exports.start = start;
