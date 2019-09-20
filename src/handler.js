const fs = require("fs");
const path = require("path");
const myRequest = require("./request");
const logic = require("./logic");
const queryString = require("querystring");
const url = require("url");

module.exports = {
  staticAssets(req, res) {
    const extension = path.extname(req.url).substring(1);
    const extensionType = {
      html: "text/html",
      css: "text/css",
      js: "application/javascript",
      ico: "image/x-icon",
      svg: "image/svg+xml",

    };
    const filePath = path.join(__dirname, "..", req.url);
    fs.readFile(filePath, (error, file) => {
      if (error) {
        res.writeHead(500, { "content-type": "text/html" });
        res.end(error.message);
      } else {
        res.writeHead(200, { "content-type": extensionType[extension] });
        res.end(file);
      }
    });
  },
  apiRequest(req, res) {
    const searchTerm = queryString.parse(url.parse(req.url).query).q;
    myRequest(
      logic.getURLwithAPI(logic.prepareAPIcallURL(searchTerm)),
      (err, apiRes) => {
        if (err) {
          console.log(err);
        } else {
          res.writeHead(apiRes.statusCode, { "content-type": "text/html" });
          res.end(JSON.stringify(apiRes.body));
        }
      }
    );
  },
  notFound(req, res) {
    res.writeHead(404, { "content-type": "text/html" });
    res.end("404: File not found");
  }
};
