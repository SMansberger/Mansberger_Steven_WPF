/* Steven Mansberger
08.20.2013
Conditionals_Personal */

/*I am going to determine how many games I must win in order to become a professional League of Legends Player.
Players are sorted into one of 6 tiers (bronze, gold, silver, platinum, diamond, and challenger). 
Each tier is further broken down into 5 divisions (V, IV, III, II, and I).
To become considered for a pro team, you must make it to the highest division of the highest tier.
Points are awareded for each game won. You must reach a total of 100 points in a division to place into the next division.
Once you have earned 100 points to place, you must win the next 2 out of 3 games to advance. 
Once you reach 100 points of the highest division of a tier, such as, Silver I, you must win 3 of the next 5 games to place into Gold V.
We will assume you win 20 points per game, for the sake of Math =)*/

var tier = 1;
var division = 1;
var gamesRequired = 1;
alert("We are going to see how many games you must win to become a professional League of Legends Player!");

//prompting user for tier placement. Taking into account some users may not capitalize letters and may abbreviate the "Platinum" tier name.
var playerTier=prompt("Please enter your current placement tier (e.g. Silver, Gold, Platinum...): ", "Bronze");

if(playerTier=="Bronze" || playerTier=="bronze"){ 
	tier = 1;
}else if(playerTier=="Silver" || playerTier=="silver"){
	tier = 2;
}else if(playerTier=="Gold" || playerTier=="gold"){
	tier = 3;
}else if(playerTier=="Platinum" || playerTier=="platinum" || playerTier=="Plat" || playerTier=="plat"){
	tier = 4;
}else if(playerTier=="Challenger" || playerTier=="challenger"){
	tier = 5;
}else{
	alert("You did not enter a correct tier designation.");
}
//prompting user for division placeent. Taking into account upper- and lower-case alternate spellings.
var playerDivision=prompt("Next, please enter your current division within the " + playerTier + " tier.", "V");

if(playerDivision=="V" || playerDivision=="v"){
	division = 1;
}else if(playerDivision=="IV" || playerDivision=="iv"){
	division =2;
}else if(playerDivision=="III" || playerDivision=="iii"){
	division =3;
}else if(playerDivision=="II" || playerDivision=="ii"){
	division =4;
}else if(playerDivision=="I" || playerDivision=="i"){
	division =5;
}else{
	alert("You did not enter a correct division designation.");
}
//	console.log(tier, division);
//used to test user prompts

/*We will need to take into account placement matches required (e.g. winning best of 3 or best of 5 to advance).
These values will be added separately to the proper variable at the end of the script so as to not skew the gamesRequired calculations*/

