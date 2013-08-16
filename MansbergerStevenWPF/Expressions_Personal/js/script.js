/* Steven Mansberger
08.15.2013
Expression_Personal */

alert("We are going to calculate how many characters you type in a given year!");
var wpmInput = prompt("Enter your average WPM: ");
var typingHours = prompt("Enter the number of hours you spend typing on an average work day: ");
var daysWork = prompt("Enter the number of days you spend working in an average month: ");

var avgWord = 4.5
var minutesDay = 1440

var charsMinute = wpmInput * avgWord;
var charsDay = charsMinute * minutesDay;
var charsYear = charsDay * daysWork;

alert("You type an average of " + charsYear + " characters a year!");
//console.log("You type an average of " + charsYear + " characters a year!");