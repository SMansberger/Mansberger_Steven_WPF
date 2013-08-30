/* Steven Mansberger
08.29.2013
Functions_Wacky */

/*This will be a very simple program to determine how long we have until christmas!*/

  myDate=new Date(); 
cmas=Date.parse("Dec 25, "+myDate.getFullYear());
today=Date.parse(myDate);

//conversion from milliseconds as determined by Date.parse() to number of days and calculating days difference from now til christmas
daysToChristmas=Math.round((cmas-today)/(1000*60*60*24)); 

if (daysToChristmas==0) {
console.log("Today is Christmas ... Merry Christmas!");
}else if (daysToChristmas>0){
console.log("There are "+daysToChristmas+" days to Christmas!");
}