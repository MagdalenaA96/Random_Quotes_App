const quotes = require("../data/quotes.json");

function getAll() {
  return new Promise((resolve, reject) => {
    if (!quotes || quotes.length === 0) {
        reject(new Error("Quotes not found"))
    }
    resolve(quotes);
  });
}

function getById(id) {
  return new Promise((resolve, reject) => {
    const quote = quotes.find((q) => q.id === parseInt(id));

    if (quote) {
      resolve(quote);
    } else {
      reject(new Error(`Quote with id: ${id} not found`));
    }
  });
}

module.exports = {
  getAll,
  getById,
};
