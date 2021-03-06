require("env2")("./.env");
const API_KEY = process.env.API_KEY;
const URL = "https://newsapi.org/v2/everything";
const prepareAPIcallURL = searchTerm => {
  return URL + "?q=" + encodeURIComponent(searchTerm);
};
const getURLwithAPI = url => url + "&apiKey=" + API_KEY;
module.exports = {
  prepareAPIcallURL,
  getURLwithAPI
};
