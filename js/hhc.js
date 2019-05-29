'use strict';

/* This script includes a prompt for user to enter their name and type and number of coffees they want, 
creates personalized greetings based on the time of day and person's name, 
and outputs a numbered list of the number of coffees they order. */

var name = prompt('Hello there! May we have your name?');
var number = prompt("How many coffees would you like to buy today?");
var today = new Date();
var hourNow = today.getHours();
var greeting;

if (hourNow > 18) {
  greeting = 'Too late for coffee, ' + name + '? Never!';
} else if (hourNow > 12) {
  greeting = 'Hitting that afternoon slump, ' + name + '? Time for a pick me up!';
} else if (hourNow > 0) {
  greeting = 'Let\'s get your morning off to a great start, ' + name + '!';
} else {
  greeting = 'Welcome!';
}

var special = 'Today\'s special:';
var weekday = new Date();
var thisDay = weekday.getDay();
var promotion;
if (thisDay === 1,3,5) {
  promotion = special + ' Fresh, delicious blueberry scones!';
} else if (thisDay === 2,4,6) {
  promotion = special + ' Hot, delicious 16 oz latte!';
}else {
  promotion = 'We are closed today. We look forward to seeing you tomorrow!';
}

function howManyCoffees() {
  var output = '';
  for (var i = 0; i < number; i++) {
    var num = i + 1;
    output += '<li>' + num + ' coffee! <li>';
  }
  return output;
}