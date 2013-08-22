/* Steven Mansberger
08.15.2013
Expression_Wacky */


alert("Welcome to the Random Sentence Creator!")

var randomWords = [];

var noun = prompt("Please enter a noun: ");
randomWords[0] = noun;

var verb = prompt("Please enter a verb: ");
randomWords[1] = verb;

var directObj = prompt("Please enter another noun: ");
randomWords[2] = directObj;

alert("Creating your random sentence...");
alert("Your sentence has been created! Press ok to continue!");

var arrayOne = ["The " + noun + " will " + verb + " over the " + directObj + "." , 
				"Today, twenty " + noun + " are going to " + verb + " behind the " + directObj + "." ,
				"Our " + noun + " have to " + verb + " under the " + directObj + "."];

var randomNumber = Math.floor(Math.random() * arrayOne.length);
var randomSelection = arrayOne[randomNumber];

alert(randomSelection);