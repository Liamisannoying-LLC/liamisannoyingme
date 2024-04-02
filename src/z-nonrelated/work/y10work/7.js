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
var blueXPosition = 0
var redXPosition = WIDTH
var greenYPosition = 1000
var purpleXPosition = 0
var purpleYPosition = 0


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
	setInterval(updateCanvas, 1000)
}

function updateCanvas(){	
	// frameCount is a variable that counts the numeber of frames that have been drawn
	frameCount++
	console.log("I have drawn frame", frameCount)
	
	
	// Task 3:
	// Clear the screen.
	// Draw a white rectangle the WIDTH and HEIGHT of the canvas to clear the last frame
	// Use the WIDTH and HEIGHT constants


	
	// Task 2:
	// Make the blue dot move towards the right
	// This part runs once every frame
	// Make the blueXPosition increase by 100 every frame
	blueXPosition = blueXPosition	
	ctx.fillStyle="blue"
	ctx.fillRect(blueXPosition,250,DOTSIZE,DOTSIZE)
	
	
	// Task 5:
	// Make the Red dot move towards the left
	// Hints: 	Find where the redXPosition is created
	//			It is moving the opposite direction to blue

	ctx.fillStyle="Red"
	ctx.fillRect(redXPosition,250,DOTSIZE,DOTSIZE)
	
	
	// Task 6:
	// Make the Green dot start at the top and move down
	// Vertical movement is all about the Y position
	// You will need to fix the initial greenYPosition (line 21)

	ctx.fillStyle="green"
	ctx.fillRect(300, greenYPosition,DOTSIZE,DOTSIZE)
	
	
	// Task 7:
	// Make the yellow dot move slowly up from the bottom. 
	// It should take about twice as long as the green dot to get all the way across.
	// You can do this all by yourself.
	// Create the yellowYPosition variable around line 22
	// use the green dot as an example
	// Hint: you can add decimals to the yellowYPosition



	// Task 8:
	// Make the purple dot move from the top left to the bottom right
	// Add to the x and y position every frame
	purpleXPosition = purpleXPosition 
	purpleYPosition = purpleYPosition
	ctx.fillStyle="purple"
	///ctx.fillRect(purpleXPosition,purpleYPosition,DOTSIZE,DOTSIZE)
	

	// Task 9:
	// Make an orange dot that:
	//		Starts on the bottom left
	// 		Travels upwards to the right
	// 		Leaves the canvas after 10 seconds only half way up
	// You can do this all by yourself.
	// Hint: You can change the x and y position by different amounts



	
	// Task 10:
	// Great, but after a while the screen is empty. Make them stay.
	// Make the dots wrap around the screen when they leave
	// (they go back to the other side)
	// Uncomment the lines below for the blue and red dots
	// Notice that these lines use the constants for WIDTH and DOTSIZE
	// Use these as a hint to create simlar statements for Green and Yellow
	
	// When the Blue dot gets to the right hand edge it goes back to the left
	///if (blueXPosition > WIDTH){
	///	blueXPosition = -DOTSIZE
	///}
	
	// When the Red dot gets to the left hand edge it goes back to the right
	///if (redXPosition < -DOTSIZE){
	///	 redXPosition = WIDTH
	///}
	
	// When the green dot gets to the bottom it goes back to the top

	// When the Yellow dot gets to the top it goes back to the bottom

	
	// Task 11:
	// Make the purple and orange dots wrap
	// This gets a little tricky.
	// Think about what has to happen to the x and the y position separately
	// Play with it until you get it right. Ask your friends for help
	
	// When the purple dot gets to the edge it goes back to the start

	// When the orange dot gets to the right hand edge it goes back to the left
	// When it gets to the top it goes bak to the bottom

}
