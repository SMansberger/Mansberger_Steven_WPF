/* Steven Mansberger
08.29.2013
Function_Industry*/

/*This will be a brief program used to determine the minimum number of commits to my GitHub in total for this class.*/
/*var commitsAssignment = 20;
var assignmentsWeek = 1;
var weeks = 4;
*/

var numberWeeks = prompt("How many weeks will this class go for?", 4);

var finalTotal = totalCommits(20, 1, numberWeeks);

function totalCommits(c, a, w){
	var numberCommits = c * a * w;
	return numberCommits;
}
(numberWeeks>0) ? (console.log("You will have to commit code to your GitHub " + finalTotal + " times throughout this class.")) : console.log("Please enter a positive number of class weeks.");


