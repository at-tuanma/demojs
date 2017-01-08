var fs = require("fs");

function readfileSync(fileName) {

  fs.readFile(fileName, function(err, data) {
    if (err) {
      return console.log(err);
    } else {
      console.log(data.toString());
    }
  });
  console.log("xong");

}

function readfileNonSync(fileName) {
  var data = readfileSync(fileName);
  console.log(data.toString());
  console.log("xong");
}

exports.readfile = readfile;
