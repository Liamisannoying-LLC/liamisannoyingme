/**
* Title: Randomess excercise
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to use randomess with animations
**/

console.log("Randomness activity")

// Task 2:
// Uncomment the line below
// Refresh the page several times, see what happens
///console.log("The random number is:",Math.random())


// Task 3:
// Use Math.random() to generate a random number from 0 to 10
// log the number
// Refresh the page several times, see what happens
///console.log("Number 0 to 10:",Math.random() * ??? )



// Task 4:
// Use Math.random() to generate a random number from 100 to 130
// log the number
// Refresh the page several times, see what happens
///console.log("Number 100 to 130:",Math.random() * ??? + ??? )



// Task 5:
// Use Math.random() to generate a random number between -10 and 10
// log the number
// Refresh the page several times, see what happens



// Task 6:
// Roll a die
// Use Math.random() to generate a whole number from 1 to 6
// log the number
// Refresh the page several times, see what happens




// Some constants that will be used in this script
const WIDTH = 600;
const HEIGHT = 500;
const DOTSIZE = 50

// some variables that will be needed

// Task 8:
// Use Math.random() to set blueXSpeed to a decimal number between -5 and 5
// uncomment the console.log() statement for debugging
// Then use blueXSpeed to move the dot (fix what you did in Task 7)
var ctx
var frameCount = 0
var blueXPosition = 300
var blueYPosition = 250
var blueXSpeed = 0
//console.log("blueXSpeed is" ,blueXSpeed)



// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	// This timer sets the framerate.
	// 20 means 20 milliseconds between frames (50 frames per second)
	timer = setInterval(updateCanvas, 20) 
}

function updateCanvas(){
	// Clear the frame
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH, HEIGHT)

	// Task 7:
	// Try moving the dot.
	// Use Math.random to generate a random number between -5 and 5
	// Add it to blueXPosition
	blueXPosition = blueXPosition
	
	// Task 9:
	// Get it moving diagonally
	// Do the same for blueYPosition




	// Draw the dot
	ctx.fillStyle="blue"
	ctx.fillRect(blueXPosition, blueYPosition, DOTSIZE, DOTSIZE)

	// Task 10:
	// Component testing - wrap at the edges
	// Add code so that when the blue dot disappears off the edge of the screen it returns from the opposite side.
	// Refer to what you did in the animation lesson (it's OK to copy/paste)
	


	
	// Task 11:
	// Component testing - bounce at the edges
	// Comment out the code you wrote for task 10 so it doesn't do anything
	// When the dot touches a boundary, reverse it's speed in that direction.
	// If it's speed was positive, it becomes negative
	// If it's speed was negative, it becomes positive
	// Do this by multiplying it's speed by -1: blueXSpeed = -1 * blueXSpeed
	// Get it bouncing off the left/right walls first
}