/**
 * Title: Quotes Library
 * Description: Utility library for getting a list of Jokes
 * Author: Muhamad Abduh
 * Date: 16/12/2020
 * 
 */

// Dependencies
var fs = require('fs');

// App object
var quotes = {};

quotes.allQuotes = function() {
  // Read the text file containing the quotes
  var fileContents = fs.readFileSync(__dirname+'/quotes.txt', 'utf-8');

  // Turn the string into array
  var arrayOfQuotes = fileContents.split(/\r?\n/);

  // Return the array
  return arrayOfQuotes;
}

// export the library
module.exports = quotes
