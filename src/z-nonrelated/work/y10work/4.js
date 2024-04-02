/**
* Title: Canvas scripts
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to use loops
**/

console.log("Loop activity")

// Some constants that will be used in this scripts
const WIDTH = 600;
const HEIGHT = 600;

// some variables that will be needed
var ctx

// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	
	ctx.fillStyle = "blue"
	console.log("Starting blue")
	// Draw blue squares on the canvas individually.
	// Each square is 50 pixels across.
	// Start with the first row:
    ctx.fillRect(0, 0, 50, 50)
    ctx.fillRect(100, 0, 50, 50)
    /*ctx.fillRect(, , 50, 50)
    ctx.fillRect(, , 50, 50)
    ctx.fillRect(, , 50, 50)
    ctx.fillRect(, , 50, 50)*/
	// then go to the second row:
    ctx.fillRect(0, 100, 50, 50)
    ctx.fillRect(100, 100, 50, 50)
    /*ctx.fillRect(, , 50, 50)
    ctx.fillRect(, , 50, 50)
    ctx.fillRect(, , 50, 50)
    ctx.fillRect(, , 50, 50)*/
	// and so on until you're done...
    /*ctx.fillRect(, , 50, 50)*/
    
	
	ctx.fillStyle = "green"
	console.log("Starting green")
	// Next draw the green squares.
	// Use a while loop to draw six squares on each row
	xPosition = 50; // Set the starting x position to 50
	count = 0; // Reset the count
	while(count < 6){ // Do this 6 times
		ctx.fillRect(xPosition, 0, 50, 50) // The first row stats at y = 0
		xPosition = xPosition + 100        // Change the xPosition 
		count = count + 1				   // Increase the count by one
	}
	// Add more loops until you are done.




	ctx.fillStyle = "orange"
	console.log("Starting orange")
	// Next draw the green squares.
	// This time, don't count. Just keep going until you have used up the width of the canvas
	xPosition = 0 // reset the xPosition to the start
	while(xPosition < WIDTH){ // Do this until you run out of canvas
		ctx.fillRect(xPosition, 50, 50, 50) // The first row starts at y = 50
		xPosition = xPosition + 100			// Change the xPosition
	}
	// Add more loops until you are done.



	
	ctx.fillStyle = "purple"
	console.log("Starting purple")
	// Next draw the purple squares.
	// Instead of doing six separate loops, use a nested loop
	// This nested loop is broken. Change teh numbers to fix it!
	xPosition = 450
	while(xPosition < WIDTH){ 
		yPosition = 450
		while(yPosition < WIDTH){ 
			ctx.fillRect(xPosition, yPosition, 50, 50)
			yPosition = yPosition + 100
		}
		xPosition = xPosition + 50
	}
	
	ctx.fillStyle = "red"
	console.log("Starting red")
	// Now draw the small red dots.
	// Each red dot is 10 pixels wide
	// Use a nested loop to create all the red dots.
	// you can copy and modify the nested loop from the purple squares





	ctx.fillStyle = "black"
	console.log("Starting black")
	// Finally add the black squares
	// Use loops to do it without doing each square manually





console.log("Finished")
}
