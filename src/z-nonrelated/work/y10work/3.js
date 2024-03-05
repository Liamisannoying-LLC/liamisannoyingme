/**
* Title: Using logic
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to use logic to color the screen
**/

console.log("Logic activity")

// Some constants that will be used in this scripts
// Task 2: uncomment the DOTSIZE
const WIDTH = 600;
const HEIGHT = 600;
//const DOTSIZE = 6

// some variables that will be needed
var ctx

// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
}
// Set up the mouse listener... You've done it before
window.addEventListener('mousemove', mouseMoved)

function mouseMoved(mouseEvent){
	// Warmup: Use the mouse to draw red dots on the canvas.
	// Task 2: The mouseX has been done for you. Assign the right value to mouseY (You did this last lesson)
	var mouseX = mouseEvent.offsetX; // the offsetX property is the x position on the canvas
	
	// Task 2: Set the colour of the dot to red
	color = "beige"

/*
*  Here is where all the logic will go.
*  There is a good description of how to use logic at https://www.w3schools.com/js/js_if_else.asp
*/

// Task 3: If the mouse is in the top half of the canvas the color should change to blue
// Fix the conditional so that the colour changes to blue half way down the canvas
if ( mouseY > 1000 ) {
	color = "blue"
}

// Task 4: 
// If the mouse is in the top right of the canvas the color should change to Yellow
// If the mouse is in the bottom right of the canvas the color should change to Green
// See the image in the doc.
// There are many ways to do this. If statements inside if statements may be helpful
if ( false ) { // Add your own condition
	if ( false ){ // Add your own condition
		color = "yellow" // Change color
	}else{
		// Change color
	}
}

// Task 5:
// If the mouse is in the middle 200 pixels the color should change to purple
// See the image in the doc
// There are many ways to do this, Experiment until you get it. Talk to your friends for ideas is you're stuck

/*
*  Here is where all the logic finishes
*/
	// Set the fill to the right color
	ctx.fillStyle = color;
	// Task 2: Draw a red square at the mouse pointer. Use the constant DOTSIZE instead of a literal value
	ctx.fillRect(mouseX, mouseY, DOTSIZE, DOTSIZE)

	// This is a debug statement. It might be useful later...
	console.log("mouseX, mouseY", mouseX, mouseY, " Color",color)
}
