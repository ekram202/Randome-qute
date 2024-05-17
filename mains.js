

var quotes = [
  "The greatest glory in living lies not in never falling, but in rising every time we fall. - Nelson Mandela",
  "The way to get started is to quit talking and begin doing. - Walt Disney",
  "Your time is limited, don't waste it living someone else's life. - Steve Jobs",
  "If life were predictable it would cease to be life, and be without flavor. - Eleanor Roosevelt",
  "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success. - James Cameron",
  "Life is what happens when you're busy making other plans. - John Lennon",
  
];

var newQuoteButton = document.getElementById("new-quote");
var quoteDisplay = document.getElementById("quote");


function getRandomQuote() {
    var randomIndex = Math.floor(Math.random() * quotes.length);
    var x = quotes[randomIndex];
    quoteDisplay.innerHTML = x ;
}
