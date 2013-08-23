/* Steven Mansberger
08.20.2013
Conditional_Industry*/

/* I am going to create a prompt that will ask users about their preferred method of storing a selection of data on a certain set of media.
I belive the list will include items such as an .mp3 file, a .avi DVD file, or an .mkv file and the media will have a selection of a 3.5" floppy, a DVD, a Blu-ray disc ,a USB drive, and an external HDD*/

alert("We are going to compare media sizes and the storage devices you can use to keep them.");
alert("First, I need to know what kind of file you are trying to store.");
var media = prompt("If you have an .mp3 file, please enter 1 \nIf you have an .avi movie file, please enter 2 \nIf you have an .mkv Matroska HD Movie File, please enter 3");

alert("What kind of media are you trying to store the file on?");
var storage = prompt("If you are trying to use a 3.5\" floppy, please enter 1 \nIf you are trying to use an 4GB USB drive, please enter 2 \nIf you are trying to use a 9.4GB DVD, please enter 3 \nIf you are trying to use a 25GB Blu-ray Disc, please enter 4");
 
 storage==1 ? console.log("Sorry, that file will not fit on a 3.5\" floppy disk!") : console.log("");
 
 	   if(media==1 && storage==2){
	 console.log("Your .mp3 file will fit on the USB drive and you will have approx. 4092MB of free space left!");
 }else if(media==1 && storage==3){
	 console.log("Your .mp3 file will fit on the DVD and, you will have 9.4GB of free space left!");
 }else if(media==1 && storage==4){
	 console.log("Your .mp3 file will fit on the Blu-ray Disc, and you will have 25GB of free space left!");
 }else if(media==2 && storage ==2){
	 console.log("Your .avi file will fit on the flash drive, and you will have 3.29GB of space left!");
 }else if(media==2 && storage ==3){
	 console.log("Your .avi file will fit on the DVD, and you will have 8.7GB of space left!");
 }else if(media==2 && storage ==4){
	 console.log("Your .avi file will fit on the DVD, and you will have 24.3GB of space left!");
 }else if(media==3 && storage ==2){
	 console.log("Your .mkv file will not fit on a 4GB USB drive! You need almost 13GB more space!");
 }else if(media==3 && storage ==3){
	 console.log("Your .mkv file will not fit on a DVD! You need almost 12GB more space!");
 }else if(media==3 && storage ==4){
	 console.log("Your .mkv file will fit on a Blu-ray Disc and you will have about 8GB additional space!");
 }else{
	 alert("Please enter a valid selection for your media type and storage device!");
 }