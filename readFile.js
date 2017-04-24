var fs = require("fs");

function readfileSync(fileName, callBack) {

  fs.readFile(fileName, function(err, data) {
    if (err) {
      return console.log(err);
    } else {
      callBack(data);
      console.log(data.toString());
    }
  });
  console.log("xong");

}

function readfileNonSync(fileName) {
  var data = fs.readfileSync(fileName);
  console.log(data.toString());
  console.log("xong");
}

exports.readfileSync = readfileSync;
exports.readfileNonSync = readfileNonSync;
