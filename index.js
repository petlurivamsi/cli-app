const fetchData = require("./methods/FetchData");
const generateFile = require("./methods/generateFile");
const readFile = require("./methods/readFile");

let value = process.argv.toString().split(",");
const regex = new RegExp(" ", "g");
let searchString = value[2].replace(regex, "%20");
let searchTerm = searchString.substring(searchString.lastIndexOf("=") + 1);

(async (searchTerm) => {
  try {
    if (!searchTerm) {
      console.log(`Please enter a search term`);
      return;
    } else if (searchTerm == "leaderboard") {
      readFile();

      return;
    }
    let totalJokesDetails = await fetchData(searchTerm);
    let totalNumberOfJokes = totalJokesDetails.total_jokes;
    // console.log(totalJokesDetails);

    if (totalNumberOfJokes === 0) {
      console.log(`No Jokes found for ${searchTerm}`);
      return;
    }
    let random =
      totalNumberOfJokes > totalJokesDetails.limit
        ? Math.floor(Math.random() * totalJokesDetails.limit)
        : Math.floor(Math.random() * totalNumberOfJokes);

    let joke = totalJokesDetails.results[random].joke;
    console.log(joke);
    //to add text to joke.txt
    generateFile(joke);
  } catch (ex) {
    console.log(ex);
  }
})(searchTerm);
