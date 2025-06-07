const utils = {
  // Helper function 1
  greet: (name) => {
    console.log(`Hello, ${name}!`);
  },
  // Helper function 2
  getNarutoQuote: () => {
    const quotes = [
      "Believe it!",
      "Dattebayo!",
      "I'm gonna be the Hokage!",
    ];
    return quotes[Math.floor(Math.random() * quotes.length)];
  },
  // Add other helper functions as needed
};