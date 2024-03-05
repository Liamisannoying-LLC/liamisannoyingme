/**
* Title: Objects excercises
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to create and use JavaScript objects
**/

console.log("Objects activity")

// Some constants that will be used in this scripts
const WIDTH = 600
const HEIGHT = 500
const UMBRELLA_WIDTH = 80
const UMBRELLA_HEIGHT = 30
const UMBRELLA_COLOR = "orange"
const UMBRELLA_HIT_COLOR = "darkCyan"
const RAIN_WIDTH = 5
const RAIN_HEIGHT = 20
const RAIN_Y_SPEED = 4
const RAIN_COLOR = "Blue"
const CHICK_WIDTH = 30
const CHICK_HEIGHT = 30

// some variables that will be needed
var ctx
var umbrellaXPosition = 30
var umbrellaYPosition = 30
var umbrellaColor

// Task 2c:
// Make the first drop appear at a random position along the top.
// You will need to use Math.random() and the const WIDTH to set the x position
var rainXPosition = 0 		// Start the raindrop at a random position
var rainYPosition = 0		// Start the raindrop at the top of the canvas

var chickXPosition = 300
var chickSpeed = 2
var chickColor = "yellow"


// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	// This timer sets the framerate.
	// 10 means 10 milliseconds between frames (100 frames per second)
	timer = setInterval(updateCanvas, 20)
	
	// Task 4a:
	// Create a new drop of rain.
	// Uncomment the drop1 line below
	// Instead of 0, pass in a random position across the canvas.
	// Copy this from where you set up the rainXPosition above 
	///drop1 = new Rain(0)

	// Task 7a:
	// Create four more raindrops like the first.
	// name them drop2..5
	///drop2 = new Rain(Math.random()*WIDTH)

}

function updateCanvas(){
	// Clear the frame
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH, HEIGHT)

	// Task 2a:
	// To start with you will get one drop of rain working, not using objects
	// This raindrop will be red for debugging purposes
	//
	// First: Get the raindrop moving.
	// Uncomment the next line
	///rainYPosition += RAIN_Y_SPEED

	// task 2b: 
	// Fix the if statement so that it restarts at the top once it hits the bottom
	if(rainYPosition>0){
		rainYPosition = 0 - RAIN_HEIGHT
	}
	
	// Task 5a:
	// In the main loop, move the drop.
	// Uncomment the line below
	///drop1.moveRain()
	
	// Task 7b:
	// Move the four new raindrops
	///drop2.moveRain()


	
	// move the chickXPosition
	moveChick()
		
	umbrellaColor = UMBRELLA_COLOR
	// Detect the raindrop hitting the umbrella (Orange rectangle)
	// if the unbrella is hit, the color should change to UMBRELLA_HIT_COLOR
	// and the raindrop should go back to the top (change the y position)
	if (umbrellaHit(rainXPosition, rainYPosition)){
		// Task 3a:
		// Add two lines of code here so that if the unbrella is hit:
		//		the umbrella should change to UMBRELLA_HIT_COLOR
		// 		the raindrop should go back to the top (change the y position)


	}
	
	// Task 6:
	// Look at the collision code above.
	// Copy it and modify it for drop1.
	// Hint: You are writing code outside the class definition
	// You need to use drop1.xPosition to get the position of this drop



	
	// Task 7c:
	// Write the collision code for each of the new drops
	// Yes, there is a lot of cut and paste. Next lesson you will learn an easier way



	
	// Draw the first drop red (for debugging)
	ctx.fillStyle="red"
	ctx.fillRect(rainXPosition, rainYPosition, RAIN_WIDTH, RAIN_HEIGHT);
	
	ctx.fillStyle=RAIN_COLOR
	// Task 4b:
	// Draw the first raindrop
	// Uncomment the line below. Replace the number 300 with the y position
	///ctx.fillRect(drop1.xPosition, 300, RAIN_WIDTH, RAIN_HEIGHT);

	// Task 7d:
	// Draw the new drops
	// look at the fillRect line above and the collision code for inspiration. 






	// Draw the umbrella
	ctx.fillStyle=umbrellaColor
	ctx.fillRect(umbrellaXPosition, umbrellaYPosition, UMBRELLA_WIDTH, UMBRELLA_HEIGHT);
	
	// Draw the chick
	ctx.fillStyle=chickColor
	ctx.fillRect(chickXPosition, HEIGHT - CHICK_HEIGHT, CHICK_WIDTH, CHICK_HEIGHT);
	
}

function umbrellaHit(rainX, rainY){
	// Rectangular collision detection between the raindrop and the umbrella
	// Task 3b:
	// The collision detection is half working.
	// fix the rectangular collision detection logic.
	// Review skill 10 if you need to
	if(
		umbrellaYPosition+ UMBRELLA_HEIGHT > rainY && 
		umbrellaYPosition < rainY+RAIN_HEIGHT
	){
		// The raindrop has hit the umbrella, return true
		return(true)
	}else{
		// The raindrop has not hit the umbrella, return false
		return(false)
	}
}

class Rain{ /// Note that the name of the class starts with a capital letter, like the Math object. This is a convention that makes it easier to read the code.
	/* 
	The Rain class contains everything to do with rain. This includes:
		stuff about the rain - it's properties (variables)
		and what the rain does - it's methods (functions)
		
	The properties you need to keep track of are the rain's
		x position
		y position
		
	The method you will to include is how to move the raindrop
	*/
	constructor(x){
		/* 
		All classes MUST have a constructor.
		The constructor sets up the properties. Each one starts with "this." 
		'this' tells JavaScript that it is a variable inside this object.
		All variables to do with this object that are not CONST need to be defined here.
		This constructor accepts one argument for the drops x position
		*/
		
		// Task 4c:
		// Use the argument that has been passed to the constructor to set the x position instead of 0
		// Hint: look at the constructor line
		this.xPosition = 0	// Start at the x position passed in
		this.yPosition = 0 	// Always start at the top
	}

	moveRain(){
		// Move the rain, it falls down
		// When rain hits the bottom, restart at the top
		
		// Task 5b:
		// Look at the code you wrote for task2a and 2b.
		// Use this as an example for the code to move the drop.
		// Remember: you are writing code inside the class definition.
		// You need to use this.yPosition for the position of this drop




	}
}


/****
**
** Below is the code for the umbrella and the chick. You will not need to modify it
**
****/

// Set up a mouse listener for the unbrella
window.addEventListener('mousemove', mouseMovedFunction)

function mouseMovedFunction(mouseEvent){
	// Set the umbrella  position to the mouse position
	umbrellaXPosition = mouseEvent.offsetX
	umbrellaYPosition = mouseEvent.offsetY
}

function moveChick(){
	chickXPosition += chickSpeed
	
	// When the chick gets to a side I want it to bounce off and head back the other way
	// I want it's speed to be different each time. I can make the speed faster to increase the difficulty.
	// When the chick gets to the right, turn around, reset speed, go left
	if (chickXPosition > WIDTH-CHICK_WIDTH){
		chickSpeed = -(3 + Math.random()*2-1) // Random speed from -2 to -4
	}
		
	// When the chick gets to the left, turn around, reset speed, go right
	if (chickXPosition < 0){
		chickSpeed = 3 + Math.random()*2-1 // Random speed from 2 to 4
	}	
}

