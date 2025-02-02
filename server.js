const http = require("http");

const {
  getQuotes,
  getQuote,
  getRandomQuote,
} = require("./controllers/quoteControler");
const { log } = require("console");

const PORT = 8080;
const API_CONTENT_TYPE = { "Content-Type": "application/json" };

const server = http.createServer(async function (req, res) {
  console.log("Request");

  if (req.url === "/api/quotes" && req.method === "GET") {
    let quotes = await getQuotes();

    if (quotes) {
      res.writeHead(200, API_CONTENT_TYPE);
    } else {
      res.writeHead(404, API_CONTENT_TYPE);
      quotes = { message: "Quotes not found" };
    }

    res.end(JSON.stringify(quotes));
  } else if (req.url === "/api/quotes/random" && req.method === "GET") {
    let quote = await getRandomQuote();

    if (quote) {
      res.writeHead(200, API_CONTENT_TYPE);
    } else {
      res.writeHead(404, API_CONTENT_TYPE);
      quote = { message: "Quote not found" };
    }

    res.end(JSON.stringify(quote));
  }
});

server.listen(PORT);
