/**
* Title: Circular collision detection excercises
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to detect a collision between two circles
**/

console.log("Circular collision detection activity")

// Some constants that will be used in this scripts
const WIDTH = 600
const HEIGHT = 500
// Task 5a:
// Change the Player Radius to 30
const PLAYERRADIUS = 1
// Task 6b:
// Change the Obstacle Radius to 150
const OBSTACLERADIUS = 100

// The canvas context
var ctx

var obstacleXPosition = 300
var obstacleYPosition = 250
var obstacleXSpeed = Math.random()*4-2
var obstacleYSpeed = Math.random()*4-2
var obstacleColor

// Player movement variables
var playerXPosition = 30
var playerYPosition = 30
var mouseX = 0
var mouseY = 0
var upPressed = false
var downPressed = false
var leftPressed = false
var rightPressed = false
var rightPressed = false


// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	// This timer sets the framerate.
	// 10 means 10 milliseconds between frames (100 frames per second)
	timer = setInterval(updateCanvas, 10) 
}

function updateCanvas(){
	// Clear the frame
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH, HEIGHT)

	// Move the player
	movePlayer()
	
	// Task 6:
	// Move the obstacle
	// Uncomment the moveObstacle() line
	///moveObstacle()
	
	if (collisionDetected()){
		obstacleColor = "darkcyan"
	} else {
		obstacleColor = "orange"
	}
	// Draw the obstacle
	ctx.fillStyle=obstacleColor
	ctx.beginPath();
	ctx.arc(obstacleXPosition, obstacleYPosition, OBSTACLERADIUS, 0, 2 * Math.PI);
	ctx.fill();
	ctx.closePath();

	// Draw the dot
	ctx.fillStyle="blue"
	ctx.beginPath();
	ctx.arc(playerXPosition, playerYPosition, PLAYERRADIUS, 0, 2 * Math.PI);
	ctx.fill();
	
}

/****
**
**  Collision detection function
**  This is where all the logic to detect the collision will happen
**	the function will 
**
****/
function collisionDetected(){
	// Some diagnostic text, useful for debugging
	ctx.fillStyle="black"
	ctx.fillText("Player X position: " + playerXPosition,30,30)
	ctx.fillText("Player Y position: " + playerYPosition,30,50)
	ctx.fillText("Obstacle X position: " + obstacleXPosition,30,70)
	ctx.fillText("Obstacle Y position: " + obstacleYPosition,30,90)

	
	// Task 2:
	// Calculate the horizontal (x) and vertical (y) distance between the dot and the center of the circle
	// The x distance has been done for you
	// Uncomment the two diagnostic text lines
	///var xDist = playerXPosition - obstacleXPosition

	/// ctx.fillText("X distance: " + xDist,30,110)
	/// ctx.fillText("Y distance: " + yDist,30,130)	


	// Task 3:
	// Calculate the true diagonal distance between the dot and the center of the circle
	// Remember the pythagorean theorem:
	// The diagonal distance is the square root of the x distance squared plus the y distance squared
	// Some hints:
	// Squaring something: Math.pow(something, 2)
	// Square root something: Math.sqrt(something)
	// Uncomment the two diagnostic text lines	var distance = Math.sqrt(xDist*xDist + yDist*yDist)
	// Add some diagnotic text of your own to help you see what is going on
	var distance
	/// ctx.fillText("Distance between centers: " + distance,30,150)
	/// ctx.fillText("Distance between edges: " + Math.ceil(distance - OBSTACLERADIUS - PLAYERRADIUS),30,170)

	// Task 4:
	// Detect the collision
	// Use an if statement to return true if the dot has collided with the circle
	// Return false if it has not (look at skill 10 for an example)
	return(false)

	
	// Task 5b:
	// Adjust the if statement so that the function returns true when the circles touch

	// Task 6c:
	// Test that the collision is still working.
	// If you need to, rewrite your if statement using the variables:
	//	OBSTACLERADIUS
	//	PLAYERRADIUS
	// You may need to adjust your calculations to use
	//	obstacleXPosition
	//	obstacleYPosition
}









/****
**
** Below is the code for movement. You will not need to modify it
**
****/

function movePlayer(){
	// Move the player if the movement keys are being pressed
	if(upPressed){
		playerYPosition -= 1
	}
	if(leftPressed){
		playerXPosition -= 1
	}
	if(downPressed){
		playerYPosition += 1
	}
	if(rightPressed){
		playerXPosition += 1
	}
}


function moveObstacle(){
	// Move the rectangle - Change it's position
	obstacleXPosition += obstacleXSpeed
	obstacleYPosition += obstacleYSpeed
	
	// Bounce at the edges of the canvas
	// When part of the rectangle goes out of the sides, reverse teh speed in that direction my making it the negative of itself
	if(obstacleXPosition < OBSTACLERADIUS || obstacleXPosition + OBSTACLERADIUS > WIDTH){
			obstacleXSpeed = -obstacleXSpeed
	}
	if(obstacleYPosition < OBSTACLERADIUS || obstacleYPosition + OBSTACLERADIUS > HEIGHT){
			obstacleYSpeed = -obstacleYSpeed
	}

}

// Listen to keyboard events for keyboard movement
// Set up the keydown listener... You've done it before
window.addEventListener('keydown', keyDownFunction)

function keyDownFunction(keyboardEvent){
	// Remember if the movement keys are being pressed
	var keyDown = keyboardEvent.key
	if (keyDown=="w"){
		upPressed = true
	}
	if (keyDown=="a"){
		leftPressed = true
	}	
	if (keyDown=="s"){
		downPressed = true
	}
	if (keyDown=="d"){
		rightPressed = true
	}
}

window.addEventListener('keyup', keyUpFunction)

function keyUpFunction(keyboardEvent){
	// Forget movement keys when they are released
	var keyUp = keyboardEvent.key
	if (keyUp=="w"){
		upPressed = false
	}
	if (keyUp=="a"){
		leftPressed = false
	}	
	if (keyUp=="s"){
		downPressed = false
	}
	if (keyUp=="d"){
		rightPressed = false
	}
}

// Listen to mouse events for mouse movement
window.addEventListener('mousemove', mouseMovedFunction)

function mouseMovedFunction(mouseEvent){
	// If the mouse is moved, place the player under the cursor.
	// This will override keyboard movement
	playerXPosition = mouseEvent.offsetX
	playerYPosition = mouseEvent.offsetY
}
