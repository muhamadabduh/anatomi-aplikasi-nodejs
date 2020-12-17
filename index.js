/**
 * Title: Basic Node Example
 * Description: Simple file that declares a few functions and invoke them
 * Author: Muhamad Abduh
 * Date: 16/12/2020
 * 
 */

// Dependencies
var mathLib = require('./lib/math');
var quotesLib = require('./lib/quotes');

// App object
var app = {};

// configuration
app.config = {
  'timeBetweenQuotes' : 2000
};

// function that prints a random quotes
app.printAQuote = function() {

  // Get all the quotes
  var allQuotes = quotesLib.allQuotes();

  // Get the length of the quotes
  var numberOfQuotes = allQuotes.length;

  // Pick a random number between 1 and the number of jokes
  var randomNumber = mathLib.getRandomNumber(1, numberOfQuotes);

  // Get the quote at that position in the array (minus one);
  var selectedQuote = allQuotes[randomNumber - 1];

  // Send the joke to the console
  console.log(selectedQuote);
}

// function that loops indifinitely, calling the printAQuote function as it goes
app.indefiniteLoop = function() {

  // Create the interval, using the config variable defined above
  setInterval(app.printAQuote, app.config.timeBetweenQuotes);
}

// Invoke the loop
app.indefiniteLoop()