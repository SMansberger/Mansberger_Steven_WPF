/* Steven Mansberger
08.20.2013
Conditional_Wacky */

/*this program will run to determine if you drink enough water in a day!
it is suggested that men drink at least 3 litres of water a day and women drink 2.2 litres
First, we will prompt the user whether they are male or female and then we will utilize ternaries to determine if the amount of water they drink is adequate
For simplicity's sake, we are not going to decide if they drink too much water in a given day. Maybe in the future :) */

var gender = prompt("I will let you know if you drink enough water! First, are you male or female?", "male");
var water = prompt("How much water do you drink a day (in ounces)?", 0);


(gender=="male") ? ((water>=101.4) ? console.log("You drink plenty of water! Keep it up!")  : (water>=0) ? console.log("You should drink at least "+ (101.4 - water) + "oz more water per day!") : console.log("Please enter a positive value for water drunk.")) : (gender=="female") ? ((water>=74.4) ? console.log("You drink plenty of water! Keep it up!") : (water>=0) ? console.log("You should drink at least "+ (74.4 - water) + "oz more water per day!") : console.log("Please enter a positive value for water drunk.")) : console.log("Please answer the questions properly, stating your gender and then the amount of water you drink daily.");