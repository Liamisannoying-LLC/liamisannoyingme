/**
* Title: Canvas scripts
* Author:
* Date: 
* Version: 1.1 (typo fix 7-nov-22)
* Purpose: Learn how to draw on the HTML canvas.
*			Rectangles, coordinates, log messages
**/


/**
* Logging messages
**/
// To begin with, just check to see that this script is running correctly.
// Fix the console.log() statement. Replace the words broken message with "Hello World!" in quotes
// console.log is a very helpful way to put debugging messages into your code. It can help you find out what is going wrong.

console.log("Hello World!")

// This is the line that tells the browser that when the page has loaded, do the "startCanvas" function
// Uncomment the onload line
window.onload=startCanvas

// Below here we define what the "startCanvas" function does
function startCanvas(){
	/**
	* Setting up the canvas
	**/
	// Before you start drawing the script needs to get the canvas info from the webpage.
	// When the webpage loads this information gets put into the variable "ctx" (ctx stands for 'context')
	// Uncomment the getContext line, and the log line
	var ctx
	ctx=document.getElementById("myCanvas").getContext("2d")
	console.log(ctx.font) // This is a bit of debug code. If the ctx is working it tells us what the font is. 

	/**
	* Drawing with the rectangle tool
	**/
	// Now you can use the fillRect() function to draw a filled rectangle on the canvas.
	// You pass four arguements in to the function. The first two are the top left corner, the third is the width, the fourth is the height.
	// More info here: https://www.w3schools.com/tags/canvas_fillrect.asp

	// uncomment the line below
	ctx.fillRect(0, 0, 100, 25); // This draws a 100 pixel wide, 25 pixel high rectangle at the top left
	
	//
	//  Hint: The canvas is 600 wide, 400 high
	//
	ctx.fillStyle = "red"; // set colour to red
	// Draw a rectangle 25 wide, 100 high in the top right
	// You need to work out the dimensions yourself
	ctx.fillRect(575, 0, width, height);
	
	ctx.fillStyle = "green"; // set colour to green
	// Draw a rectangle 100 wide, 25 high in the bottom right 
	// You need to work out the coordinates yourself
	ctx.fillRect(x position, y position, width, height);
	
	ctx.fillStyle = "blue"; // set colour to blue
	// Draw a rectangle 25 wide, 100 high in the bottom left 
	// You get to do it all yourself
	
	/**
	** Extra challenge: Draw a robot face!
	**/
}
