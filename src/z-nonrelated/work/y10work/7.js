/**
* Title: Animation excercise
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to animate the canvas
**/

console.log("Animation activity")

// Some constants that will be used in this scripts
const WIDTH = 613;
const HEIGHT = 500;
const DOTSIZE = 50

// some variables that will be needed, you will add to these
var ctx
var frameCount = 0
var blueXPosition = WIDTH - WIDTH - DOTSIZE
var redXPosition = WIDTH
var greenYPosition = HEIGHT - HEIGHT - DOTSIZE
var yellowYPosition = 500
var purpleXPosition = WIDTH - WIDTH - DOTSIZE
var purpleYPosition = 0
var orangeXPosition = 0
var orangeYPosition = HEIGHT - DOTSIZE

// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	// We are using an interval timer to animate the canvas.
	// To set up the interval you give it:
	//		a function to run (updateCanvas)
	// 		a time in milliseconds (ms)
	// The time controls the refresh rate (fps). 1000 means 1 frame a second (1000 milliseconds)
	// It will now run that function, wait, then run it again - forever!
	
	// Task 4:
	// Adjust the number in the setInterval function to draw 50 frames a second
	// Adjust the speed of the blue dot so that it takes about 10 seconds to leave the canvas
	setInterval(updateCanvas, 0)
}

/**
 * Updates the canvas by animating colored dots.
 */
function updateCanvas() {
    // Increment the frameCount
    frameCount++;

    // Clear the canvas
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    // Update blue dot position
    blueXPosition++;
    ctx.fillStyle = "blue";
    ctx.fillRect(blueXPosition, 250, DOTSIZE, DOTSIZE);

    // Update red dot position
    redXPosition--;
    ctx.fillStyle = "red";
    ctx.fillRect(redXPosition, 250, DOTSIZE, DOTSIZE);

    // Update green dot position
    greenYPosition++;
    ctx.fillStyle = "green";
    ctx.fillRect(300, greenYPosition, DOTSIZE, DOTSIZE);

    // Update yellow dot position
    yellowYPosition -= 0.125;
    ctx.fillStyle = "yellow";
    ctx.fillRect(300, yellowYPosition, DOTSIZE, DOTSIZE);

    // Update purple dot position
    purpleXPosition++;
    purpleYPosition++;
    ctx.fillStyle = "purple";
    ctx.fillRect(purpleXPosition, purpleYPosition, DOTSIZE, DOTSIZE);

    // Update orange dot position
    orangeXPosition += 0.2;
    orangeYPosition -= 0.1;
    ctx.fillStyle = "orange";
    ctx.fillRect(orangeXPosition, orangeYPosition, DOTSIZE, DOTSIZE);

    // Wrap dots around the canvas edges
    if (blueXPosition > WIDTH) blueXPosition = -DOTSIZE;
    if (redXPosition < -DOTSIZE) redXPosition = WIDTH;
    if (greenYPosition > HEIGHT) greenYPosition = -DOTSIZE;
    if (yellowYPosition < -DOTSIZE) yellowYPosition = HEIGHT;

    // Wrap purple dot around the canvas edges
    if (purpleXPosition > WIDTH + DOTSIZE) purpleXPosition = -DOTSIZE;
    if (purpleYPosition > HEIGHT + DOTSIZE) purpleYPosition = -DOTSIZE;

    // Wrap orange dot around the canvas edges
    if (orangeXPosition > WIDTH + DOTSIZE || orangeYPosition < -DOTSIZE) {
        orangeXPosition = -DOTSIZE;
        orangeYPosition = HEIGHT;
    }
	console.log("I have drawn frame " + frameCount)
}
