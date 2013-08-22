/* Steven Mansberger
08.20.2013
Conditionals_Personal */

/*I am going to determine how many games I must win in order to become a professional League of Legends Player.
Players are sorted into one of 6 tiers (bronze, gold, silver, platinum, diamond, and challenger). 
Each tier is further broken down into 5 divisions (V, IV, III, II, and I).
To become considered for a pro team, you must make it to the highest division of the highest tier.
Points are awareded for each game won. You must reach a total of 100 points in a division to place into the next division.
Once you have earned 100 points to place, you must win the next 2 out of 3 games to advance. 
Once you reach 100 points of the highest division of a tier, such as, Silver I, you must win 3 of the next 5 games to place into Gold V.*/

alert("We are going to see how many games you must win to become a professional League of Legends Player!");

var playerTier=prompt("Please enter your current placement tier (e.g. Silver, Gold, Platinum..): ", "Bronze");

var playerDivision=prompt("Next, please enter your current division within the " + playerTier + " tier.");

