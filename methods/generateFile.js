const fs = require("fs");

function generateFile(joke) {
  fs.appendFile("joke.txt", joke + "\n", function (err) {
    if (err) throw err;
  });
}

module.exports = generateFile;
