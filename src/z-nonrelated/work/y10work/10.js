/**
* Title: Rectangular collision detection excercises
* Author: 
* Date: 
* Version: 1.1 (updated header comments for collisionDetected 8-Nov-22)
* Purpose: Learn how to detect a collision between two rectangles
**/

console.log("Rectangular collision detection activity")

// Some constants that will be used in this scripts
const WIDTH = 600
const HEIGHT = 500
// Task 5a:
// Change the PLAYERWIDTH and PLAYERHEIGHT to 50 and 20
const PLAYERWIDTH = 1
const PLAYERHEIGHT = 1
// Task 4a:
// Change OBSTACLEWIDTH and OBSTACLEHEIGHT to 300 and 50
const OBSTACLEWIDTH = 200
const OBSTACLEHEIGHT = 200

// The canvas context
var ctx

// Obstacle variables
// Task 4b:
// Change obstacleXPosition and obstacleYPosition to 100 and 250
var obstacleXPosition = 200
var obstacleYPosition = 200
var obstacleXSpeed = Math.random()*4-2
var obstacleYSpeed = Math.random()*4-2

// Player movement variables
var playerXPosition = 30
var playerYPosition = 30
var mouseX = 0
var mouseY = 0
var upPressed = false
var downPressed = false
var leftPressed = false
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
	// This is the main loop of the game
	// Clear the frame
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH, HEIGHT)

	// Move the player
	movePlayer()

	// Move the obstacleangle
	// Task 6a:
	// Uncomment the moveObstacle() line
	///moveObstacle()
	
	// Check to see if a collision has happened.
	// If there has been a collision change the colour of the obstacle
	// If there is no collision, reset the colour of the obstacle to orange
	if (collisionDetected()){
		obstacleColor = "darkcyan"
	} else {
		obstacleColor = "orange"
	}

	// Draw the rectangle
	ctx.fillStyle=obstacleColor
	ctx.fillRect(obstacleXPosition,obstacleYPosition,OBSTACLEWIDTH,OBSTACLEHEIGHT)

	// Draw the player
	ctx.fillStyle="blue"
	ctx.fillRect(playerXPosition,playerYPosition,PLAYERWIDTH,PLAYERHEIGHT)
}






/****
**
**  Collision detection function
**  This is where all the logic to detect the collision will happen
**	the function will return true when there is a collision.
**
****/
function collisionDetected(){
	// Task 2:
	// Top and left collision
	// Start modifying the logic in the if statement. The x position has been done for you.
	// Replace the numer "7337" with the obstacle's y position
	if(playerXPosition >= obstacleXPosition && 
		playerYPosition >= 7337 
	){
		return(true)
	}else{
		return(false)
	}
	
	// Task 3:
	// Finish the point/rectangle collision
	// Add two more lines to the if statement
	// Get the collision working from the bottom and the right
	
	
	// Task 4c:
	// Test that the collision is still working.
	// If you need to, rewrite your if statement using the variables:
	//	OBSTACLEWIDTH
	//	OBSTACLEHEIGHT
	//	obstacleXPosition
	//	obstacleYPosition

	// Task 5b:
	// Now that the player is bigger, modify the logic using the PLAYERHEIGHT and PLAYERWIDTH variables

	// Task 6b:
	// Test that the collision is still working (Test all sides).
	// If you need to, rewrite your if statement using the variables:
	//	OBSTACLEWIDTH
	//	OBSTACLEHEIGHT
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
	if(obstacleXPosition < 0 || obstacleXPosition + OBSTACLEWIDTH > WIDTH){
			obstacleXSpeed = -obstacleXSpeed
	}
	if(obstacleYPosition < 0 || obstacleYPosition + OBSTACLEHEIGHT > HEIGHT){
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
