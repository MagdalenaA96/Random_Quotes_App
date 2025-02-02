class RandomQuote {
  constructor() {
    this.init();
  }

  init() {
    this.quoteContainer = document.getElementById("quote-container");
    this.quote = document.getElementById("quote");
    this.author = document.getElementById("author");
    this.quoteBtn = document.getElementById("next-quote-btn");

    this.quoteBtn.addEventListener("click", this.getQuote);

    document.addEventListener("keyup", (e) => {
      if (e.code === "Enter") {
        this.getQuote();
      }
    });

    this.getQuote();
  }

  getQuote = async () => {
    const apiURL = "/api/quotes/random";

    try {
      const response = await fetch(apiURL);
      const data = await response.json();

      this.quote.textContent = data.quote;
      this.author.textContent = data.author;
    } catch (error) {
      console.log(error);
      this.quote.textContent = "Server error: " + error;
    }
  };
}

const randomQuote = new RandomQuote();
