const fs = require("fs");

async function readFile() {
  fs.readFile("../cli-tool/joke.txt", "utf8", (err, data) => {
    if (err) {
      console.log(`Please search a joke first.. `);
      return;
    }
    let stringArray = data.split("\n");
    let result = returnMaxRepeated(stringArray);
    console.log(result[0]);
  });
}

function returnMaxRepeated(stringArray) {
  var store = stringArray,
    distribution = {},
    max = 0,
    result = [];

  store.forEach(function (a) {
    distribution[a] = (distribution[a] || 0) + 1;
    if (distribution[a] > max) {
      max = distribution[a];
      result = [a];
      return;
    }
    if (distribution[a] === max) {
      result.push(a);
    }
  });
  return result;
}

module.exports = readFile;
