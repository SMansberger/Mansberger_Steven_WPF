/* Steven Mansberger
08.20.2013
Conditional_Industry*/

/* I am going to create a prompt that will ask users about their preferred method of storing a selection of data on a certain set of media.
I belive the list will include items such as an .mp3 file, a .avi DVD file, or an .mkv file and the media will have a selection of a 3.5" floppy, a DVD, a Blu-ray disc ,a USB drive, and an external HDD*/

alert("We are going to compare media sizes and the storage devices you can use to keep them.");
alert("First, I need to know what kind of file you are trying to store.");
var media = prompt("If you have an .mp3 file, please enter 1 \nIf you have an .avi movie file, please enter 2 \nIf you have an .mkv Matroska HD Movie File, please enter 3");

alert("What kind of media are you trying to store the file on?");
var storage = prompt("If you are trying to use a 3.5\" floppy, please enter 1 \nIf you are trying to use an 8GB USB drive, please enter 2 \nIf you are trying to use a 9.4GB DVD, please enter 3 \nIf you are trying to use a 25GB Blu-ray Disc, please enter 4");
 
 