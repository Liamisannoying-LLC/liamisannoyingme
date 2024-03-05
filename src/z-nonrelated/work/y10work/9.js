/**
* Title: Movement control excercises
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to control movement with the keyboard and mouse
**/

console.log("Movement control activity")

// Some constants that will be used in this scripts
const WIDTH = 600;
const HEIGHT = 500;
const PLAYERSIZE = 50

// some variables that will be needed
var ctx
var frameCount = 0
var playerXPosition = 300
var playerYPosition = 250
var mouseX = 0
var mouseY = 0
// Task 3a
// First create variables for the speed. This will be added to the position every frame.
// Uncomment the line for the x speed, create one for the y speed
///var playerXSpeed = 0

// Task 5b
// Set the playerXSpeed and playerYSpeed to 3 (above, in task 3a)

// Task 5c
// Set up the movement flags. One for each direction. 
// Uncomment the one for up, add the rest.
///var upPressed = false


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

	// Add some text to display information about the player - helpful for debugging
	ctx.fillStyle="black"
	ctx.font = "10px Arial"
	ctx.fillText("X position: "+playerXPosition,30,30)
	ctx.fillText("Y position: "+playerYPosition,30,50)
	// Task 3c: Diagnostic text. uncomment the following lines and go to 3d
	///ctx.fillText("X speed: "+playerXSpeed,30,70)
	///ctx.fillText("Y speed: "+playerYSpeed,30,90)
	ctx.fillText("X speed: ",30,70)
	ctx.fillText("Y speed: ",30,90)
	// Task 3d:
	// Move the player
	// change the position of the player by adding the appropriate speed to the position variable
	// Uncomment the one for x, create one for y
	///playerXPosition = playerXPosition + playerXSpeed
	
	
	// Task 5e:
	// Move the player.
	// Comment out the code from task 3d
	// Check to see if the movement flag is true. If it is, move the player that direction.
	// up has been done for you. Uncomment the code.
	// Add code for the other three directions
	///if(upPressed){
	///	playerYPosition -= playerYSpeed
	///}
	
	
	// Task 7b:
	// Now get the player to travel towards the mouse pointer.
	// This will use the mouse speed that you have already set up.
	// This is going to involve some logic. 
	// If the mouse is to the right of the player move the player to the right:
	/// if(mouseX > playerXPosition){
	/// 	playerXPosition += playerXSpeed
	/// }
	// Now add code for the other three directions






	
	// Task 8:
	// Now get the player to accelerate towards the mouse pointer.
	// First, comment out the code you wrote for 7b
	// This is going to involve the same logic (the if... lines) as 7b, you can copy and paste.
	// If the mouse is to the right of the player, accelerate the player right (increase it's speed a little):
	/// if(mouseX > playerXPosition){
	/// 	playerXSpeed = playerXSpeed + 0.1
	/// }
	// Now add code for the other three directions







	
	// Draw the player
	ctx.fillStyle="blue"
	ctx.fillRect(playerXPosition,playerYPosition,PLAYERSIZE,PLAYERSIZE)
}

// Set up the keydown listener... You've done it before
window.addEventListener('keydown', keyDownFunction)

function keyDownFunction(keyboardEvent){
	var keyDown = keyboardEvent.key
	console.log("You just pressed", keyDown)
	// Task 2:
	// When a key is pressed, change the position
	// w and a have been started for you. Fix them and add code for s and d
	/// if (keyDown=="w"){
	/// 	playerYPosition = playerYPosition - 10
	/// }
	/// if (keyDown=="a"){
	/// 	playerXPosition
	/// }
	
	
	
	
	
	
	
	
	// Task 3b:
	// Comment out the code from task 2. (Notepad++ has a shortcut in the edit menu)
	// When a key is pressed, set the speed of the player
	// The actual movement will happen in 3d
	// w and a have been started for you. Fix them and add code for s and d
	/// if (keyDown=="w"){
	/// 	playerYSpeed = -5
	/// }
	/// if (keyDown=="a"){
	/// 	playerXSpeed
	/// }








	// Task 4:
	// Comment out the code from task 3b.
	// When a key is pressed, change the speed of the player
	// The code to actually do the movement was done in task 3d
	// w and a have been started for you. Fix them and add code for s and d
	/// if (keyDown=="w"){
	/// 	playerYSpeed = playerYSpeed - 1
	/// }
	/// if (keyDown=="a"){
	///	 	playerXSpeed
	/// }
	
	
	
	
	
	
	
	
	
	// Task 5a:
	// First, comment out the code from task 4
	// The first implementation of keyboard movement was rough. Like using "When key pressed" in Scratch.
	// We can do better!
	// We will do this by setting a flag for each movement key. If the key is pressed, set the flag to true.
	// In 5d you we will un-set the flag when the key is released
	// uncomment the code for the up key ("w", although you could use any key you want)
	///if (keyDown=="w"){
	///	upPressed = true
	///}





	// Task 6a:
	// Set things up for the mouse movement.
	// Comment out the code from task 5e and move on to 6b

}

// Task 5d:
// Set up the keyup listener. You've done it before back in skill 2
// Add a new event listener
// It should listen for the 'keyup' event.
// Create an appropriate function for it to call.
// Look at the keydown EventListener for a reminder on what this looks like
// The keyup event is just like the keydown event. You can copy most of it from the keydown listener and keyDownFunction
// This function should set the relevant keyPressed variable to false when each button is released
// Add a console.log to say which key you have released









// Task 6b:
// Set up the mousemove listener. You've done it before back in skill 2
// Add a new window event listener. 
// It should listen for the 'mousemove' event
// It should call mouseMovedFunction (this has been created for you)
// Look at the keyup EventListener for a reminder on what this looks like




function mouseMovedFunction(mouseEvent){
	// Task 6c:
	// Get the mouse position from the event, store it in the appropriate variables
	// The X position has been done for you. Add the Y position.
	///mouseX = mouseEvent.offsetX


	// Optional:
	// This text looks horrible. Move these lines to a better place if you want. (near 3d)
	ctx.fillText("Mouse X position: "+mouseX,30,110)
	ctx.fillText("Mouse Y position: "+mouseY,30,130)
	// Task 6d:
	// Set the player dot position to the mouse position
	// Uncomment the X position line, you get to fix the y position
	///playerXPosition = mouseX



	
	// Task 7a:
	// First, comment out the two lines of code from task 6d that set the position.
}
