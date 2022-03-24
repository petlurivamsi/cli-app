const axios = require("axios");

async function fetchData(searchTerm) {
  try {
    const response = await axios.get(
      `https://icanhazdadjoke.com/search?term=${searchTerm}`,
      {
        headers: {
          Accept: "application/json",
          "User-Agent": "axios 0.21.1",
        },
      }
    );
    return response.data;
  } catch (ex) {
    res.json(ex);
  }
}

module.exports = fetchData;
