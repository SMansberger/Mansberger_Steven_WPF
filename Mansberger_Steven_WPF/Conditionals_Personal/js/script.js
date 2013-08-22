/* Steven Mansberger
08.20.2013
Conditionals_Personal */

/*I am going to determine how many games I must win in order to become a professional League of Legends Player.
Players are sorted into one of 6 tiers and each tier is further broken down into 5 divisions.
To become considered for a pro team, you must make it to the highest division of the highest tier.*/

alert("We are going to see how many games you must win to become a professional League of Legends Player!");

var playerTier=prompt("Please enter your current placement tier (e.g. Silver, Gold, Platinum..): ", "Bronze");

var playerDivision=prompt("Next, please enter your current division within the " + playerTier + " tier.");

