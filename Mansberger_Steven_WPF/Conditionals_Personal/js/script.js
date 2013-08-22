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
We will assume you win 20 points per game, for the sake of Math =)
We will also assume each player beings with 0 points for each given division within their tier*/

var tier = 1;
var division = 1;
var gamesRequired = 1;
var placementGames = 1;
alert("We are going to see how many games you must win to become a professional League of Legends Player!");

//prompting user for tier placement. Taking into account some users may not capitalize letters and may abbreviate the "Platinum" tier name.
var playerTier=prompt("Please enter your current placement tier (e.g. Silver, Gold, Platinum...): ", "Bronze");

if(playerTier=="Bronze" || playerTier=="bronze"){ 
	tier=6;
}else if(playerTier=="Silver" || playerTier=="silver"){
	tier=5;
}else if(playerTier=="Gold" || playerTier=="gold"){
	tier=4;
}else if(playerTier=="Platinum" || playerTier=="platinum" || playerTier=="Plat" || playerTier=="plat"){
	tier=3;
}else if(playerTier=="Diamond" || playerTier=="diamond"){
	tier=2;
}else if(playerTier=="Challenger" || playerTier=="challenger"){
	tier=1;
}else{
	//alert("You did not enter a correct tier designation.");
}
//prompting user for division placeent. Taking into account upper- and lower-case alternate spellings.
var playerDivision=prompt("Next, please enter your current division within the " + playerTier + " tier.", "V");

if(playerDivision=="V" || playerDivision=="v"){
	division=5;
}else if(playerDivision=="IV" || playerDivision=="iv"){
	division=4;
}else if(playerDivision=="III" || playerDivision=="iii"){
	division=3;
}else if(playerDivision=="II" || playerDivision=="ii"){
	division=2;
}else if(playerDivision=="I" || playerDivision=="i"){
	division=1;
}else{
	//alert("You did not enter a correct division designation.");
}
//	console.log(tier, division);
//used to test user prompts

/*attempted complex if((tier>5 || tier<1) || ((division>5 || division<1)){
}
Did not function. Unsure if you cannot add multiple conditions as with Java or not.
*/
if(tier==0 && division==1){
	alert("Congratulations! You are already in Challenger I and are being considered for professional League competition!");
}else if((tier>5 || tier<1){
	alert("You did not enter a correct Tier/Division designation.");
}else if{(division>5 || division<1){
	alert("You did not enter a correct Tier/Division designation.");
}else{

/*We will need to take into account placement matches required (e.g. winning best of 3 or best of 5 to advance).
These values will be added separately to the proper variable at the end of the script so as to not skew the gamesRequired calculations.
No points are added during these placement matches.
Five games are required to advance a division and 2 more for placements. 100/(20/game) = 5 + 2 placeents = 7 games per division.\
Taking into account 3 games to advance a tier, we conclude that you need 36 games to advance from division V of one tier to division I of the next. 7 games required to advance from Gold II to Gold I and 8 to advance from Gold I to Platinum V. 7 + 8, or, (7*2) + 1 */

gamesRequired = (((tier-1) * 36) + (division * 7) + 1);

alert("If you win " + gamesRequired + " games, you will have a chance of going pro! Nice Job!");

}