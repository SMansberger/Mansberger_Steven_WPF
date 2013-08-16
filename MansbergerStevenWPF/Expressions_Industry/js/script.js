/* Steven Mansberger
08.15.2013
Expression_Industry 

I have had some problems with my variables gathering information from the user. When using the prompt() command, my variables are captured
as strings, even when whole number are entered. As a result, when printing out my calculator's final answer, the user inputs and calculations 
show up something like 12020, instead of 140 (120 + 20). I have tried using parseInt(prompt()) as well, but after implementing that for
all of my variables in this .js file, none of my alert() or prompt() functions would run! I am at a loss and would appreciate feedback*/

alert("We are going to calculate how long it will take to complete and upload a Web Programming Fundamentals assignment");

/*
Here, I attempted to declare the variables as integers originally. I was hoping that they would maintain that variable type after 
being captured in the next step, but this was not the case.

var projectTime = 1;
var minutesPlan = 1;
var minutesCreate = 1;
var uploadSpeed = 1;
*/

var minutesPlan = prompt("How many minutes will it take to plan the assignment out?");
var minutesCreate = prompt("How many minutes will it take you to create and develop your code/assignment?");
var uploadSpeed = prompt("How fast is your internet connection upload (in mbps)?");

alert("Come back when you have completed your assignment! We will need to know your file size!");

var fileSize = prompt("How large is your file? (in MB)?");

var projectTime = (minutesPlan + minutesCreate);
//Convert mbps to MB/min
var speedConvert = uploadSpeed * 0.1333333;
var uploadTime = speedConvert / fileSize;
var totalTime = projectTime + uploadTime;

alert("It will take you a total of " + totalTime + " minutes to plan, develop, and upload your assignment!");