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
console.log("Hello World!");

window.onload=startCanvas;

function startCanvas(){
	/**
	* Setting up the canvas
	**/
	var ctx=document.getElementById("myCanvas").getContext("2d");
	console.log(ctx.font); // This is a bit of debug code. If the ctx is working it tells us what the font is. 

	/**
	* Drawing with the rectangle tool
	**/
	ctx.fillRect(0, 0, 100, 25); // This draws a 100 pixel wide, 25 pixel high rectangle at the top left
	
	ctx.fillStyle = "red"; // set colour to red
	ctx.fillRect(475, 0, 100, 25); // Draw a rectangle 100 wide, 25 high in the top right
	
	ctx.fillStyle = "green"; // set colour to green
	ctx.fillRect(475, 375, 100, 25); // Draw a rectangle 100 wide, 25 high in the bottom right 
	
	ctx.fillStyle = "blue"; // set colour to blue
	ctx.fillRect(0, 375, 100, 25); // Draw a rectangle 100 wide, 25 high in the bottom left 
	
	/**
	** Extra challenge: Draw a robot face!
	**/
}
