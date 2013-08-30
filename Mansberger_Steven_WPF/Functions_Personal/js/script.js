/* Steven Mansberger
08.29.2013
Functions_Personal */

/* This will be a basic program to decide how many apples can fit in a semi-cylindrical basket with a height of 28.5 in, 
a base with diameter of 24in, and a head with diameter of 40 in*/

var apples = 1;

var applesBasket = function(){
	/*volume of a frustrum
	v= (3.14(h))/3 * (R^2 + Rr + r^2)
	*/
	volumeBarrel = ((3.14 * 28.5) / 3) * ((40 * 40) + (40 * 24) + (24 * 24));
	return volumeBarrel;
}
	
console.log(volumeBarrel);
