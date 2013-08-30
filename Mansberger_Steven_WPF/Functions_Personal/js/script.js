/* Steven Mansberger
08.29.2013
Functions_Personal */

/* My grandfather owns an apple orchard.
This will be a basic program to decide how many apples can fit in a semi-cylindrical basket with a height of 28.5 in, 
a base with diameter of 24in, and a head with diameter of 40 in.
Average apple volume = 4/3 * 3.14 * r^3*/

var apples = prompt("How many apples are you trying to fit in the barrel?",1);

var volumeApple = 4 / 3 * 3.14 * 3 * 3 * 3;

var applesBasket = function(){
	/*volume of a frustrum
	v= (3.14(h))/3 * (R^2 + Rr + r^2)
	*/
	volumeBarrel = ((3.14 * 28.5) / 3) * ((40 * 40) + (40 * 24) + (24 * 24));
	return volumeBarrel;
}

var volumeDifference = applesBasket() / volumeApple;

var totalApples = volumeDifference - apples;
	
//console.log ("The average apple barrel can hold " + volumeDifference + " apples.");
if(apples <0){
	console.log("Please enter a positive number of apples.");
}else if(apples>volumeDifference){
	console.log("You have filled the barrel with " + (volumeDifference) + " apples, but you have " + (apples - volumeDifference) + " that will not fit.");
}else if(totalApples >=0){
	console.log("You can fit " + totalApples + " more apples in the barrel!");
}
