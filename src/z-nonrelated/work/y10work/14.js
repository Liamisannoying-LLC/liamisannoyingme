/**
* Title: Images excercises
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to use images

Source images:
Background: https://pixy.org/264030/
CC0 - No attribution required

Circular Umbrella: https://pixabay.com/vectors/umbrella-weather-cover-rain-145919/
Pixaby license: No attribution requred, modification allowed

Rectangular umbrella: https://pixabay.com/vectors/umbrella-parasol-cover-rain-153372/
Pixaby license: No attribution requred, modification allowed

Chick: https://commons.wikimedia.org/wiki/File:Emojione_1F424.svg
CC SA, Attribution required

Raindrop: Original content by Ben Britton
CC BY, Wellington High School
Because I am the copyright holder I don't need to include attribution
If you want to reuse the image in your game you need to credit Wellington High
**/

console.log("Images activity")

// Some constants that will be used in this scripts
const WIDTH = 600
const HEIGHT = 500
// Task 3c
// Adjust the height of the umbrella
// The umbrella looks a bit flat. Adjust the height to 50
const UMBRELLA_WIDTH = 80
const UMBRELLA_HEIGHT = 30
const UMBRELLA_RADIUS = 40
const UMBRELLA_DIAMETER = UMBRELLA_RADIUS * 2
const UMBRELLA_COLOR = "orange"
const UMBRELLA_HIT_COLOR = "darkCyan"
const NUMBER_OF_RAINDROPS = 200 // HITBOX TESTING Change this to 1
const RAIN_WIDTH = 5
const RAIN_HEIGHT = 20
const RAIN_Y_SPEED = 4 // HITBOX TESTING change this to 0.5
const RAIN_COLOR = "Blue"
const CHICK_WIDTH = 30
const CHICK_HEIGHT = 30

var ctx

// Umbrella variables
var umbrellaXPosition = 30
var umbrellaYPosition = 30
var umbrellaColor = "orange"
// Task 3a
// Create the umbrella image variable and link it to the image file
// Uncomment the next two lines, 
/// var umbrellaImage = new Image()
/// umbrellaImage.src = "Rectangular_umbrella.png"

// Task 7a
// Replace the umbrella source image above with the circular umbrella image


// Rain variables
var rainXPosition
var rainYPosition
var rainArray = []
// Task 4a
// Create the rain image variable and link it to the image file
// Uncomment the next two lines, find the name of the rain image
/// var rainImage = new Image()
/// rainImage.src = ""


// Chick variables
var chickXPosition = 300
var chickSpeed = 2
var chickColor = "yellow"
// Task 5a
// The chick needs two images
// One of the chick running left, the other of the chick running right
// The chick running right has been done for you
// Create and link the image variable for the running left image
var chickRightImage = new Image();  
chickRightImage.src = 'chick_Right.png'


// Task 2a
// Create the background image variable
// Link it to the source image
// Make sure that the background.jpg file is in the same folder as this JavaScript file
// Uncomment the next two lines
/// var backgroundImage = new Image();  
/// backgroundImage.src = 'background.jpg';


// Set up the canvas... You've done it before
window.onload=startCanvas

function startCanvas(){
	// The startCanvas() function sets up the game. 
	// This is where all of the once off startup stuff should go
	
	ctx=document.getElementById("myCanvas").getContext("2d")
	// This timer sets the framerate.
	// 10 means 10 milliseconds between frames (100 frames per second)
	timer = setInterval(updateCanvas, 20)
	
	// Create the raindrops
	var dropNumber = 0
	while(dropNumber < NUMBER_OF_RAINDROPS){
		rainArray.push(new Rain(Math.random()* WIDTH))
		dropNumber++;
	}
}

function updateCanvas(){
	// The updateCanvas() function contains the main game loop
	// It is run once every frame. Most of the game code will go here
	
	// Clear the frame
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH, HEIGHT)
	// Task 2b
	// Draw the background 
	// The background image is already the correct size, it just needs to be positioned in the top left
	// Uncomment the line below and fix the coordinates
	/// ctx.drawImage(backgroundImage,150,30);

	// move the rain
	var dropNumber = 0 // Start at drop 0
	while (dropNumber < rainArray.length){ // Keep going until you get to the last drop
		rainArray[dropNumber].moveRain()
		dropNumber ++ // Do the next drop
	}
	
	// move the chickXPosition
	moveChick()
	
	// Detect collisions
	umbrellaColor = "Orange"
	var dropNumber = 0 // Start at drop 0
	while (dropNumber < rainArray.length){ // Keep going until you get to the last drop
	// Task 7c
	// Replace the umbrellaHitRectangular function with umbrellaHitCircular
	if (umbrellaHitRectangular(rainArray[dropNumber].xPosition, rainArray[dropNumber].yPosition)){
		 umbrellaColor = UMBRELLA_HIT_COLOR
		 rainArray[dropNumber].yPosition = Math.random()*-HEIGHT
	}
	dropNumber ++ // Do the next drop
	}
	
	// Draw the rain
	ctx.fillStyle=RAIN_COLOR
	var dropNumber = 0 // Start at drop 0
	while (dropNumber < rainArray.length){ // Keep going until you get to the last drop
		// Task 4b
		// Comment out the fillRect line
		// Uncomment the drawImage line
		// Fix the y position in the drawImage line so the raindrops fall
		// Use the RAIN_WIDTH and RAIN_HEIGHT to size the drops correctly
		ctx.fillRect(rainArray[dropNumber].xPosition, rainArray[dropNumber].yPosition, RAIN_WIDTH, RAIN_HEIGHT);
		/// ctx.drawImage(rainImage,rainArray[dropNumber].xPosition, 0)
		dropNumber ++ // Do the next drop
	}

	// Draw the chick
	ctx.fillStyle=chickColor
	ctx.fillRect(chickXPosition, HEIGHT - CHICK_HEIGHT, CHICK_WIDTH, CHICK_HEIGHT);
	// Task 5b
	// There need to be two images for the chick, one going left, one going right
	// Uncomment the 'if' statement below.
	// Draw the right and left images as required.
	// Look at the fillRect above line for hints
	// comment out the fillRect line above when you've got it working
	///if (chickSpeed > 0){ // If the chick speed is positive, the chick is going right
	///	// Draw the image of the chick going right
	/// ctx.drawImage();
	///}else{ // If the chick speed is negative, the chick is going left
	///	// Draw the image of the chick going left
	/// ctx.drawImage();
	///}
	
	// Draw the umbrella
	// Task 3b
	// Comment out the fillRect line
	// Uncomment the drawImage line
	// Fix the drawImage line to draw the unbrella in the right place (use the umbrella x position and umbrella y position)
	// Fix it so the umbrella is the right size (use the UMBRELLA_WIDTH and UMBRELLA_HEIGHT)
	ctx.fillStyle=umbrellaColor
	ctx.fillRect(umbrellaXPosition, umbrellaYPosition, UMBRELLA_WIDTH, UMBRELLA_HEIGHT);
	/// ctx.drawImage(umbrellaImage,50,50,200,200);

	// Task 7b
	// Change the UMBRELLA_WIDTH and UMBRELLA_HEIGHT to UMBRELLA_DIAMETER in the drawImage line above

}

/****
**
** Class definition for the raindrops
**
****/

class Rain{ /// Note that the name of the class starts with a capital letter, like the Math object. This is a convention that makes it easier to read the code.
	/* 
	The Rain class contains everything to do with rain. This includes:
		stuff about the rain - it's variables (or properties)
		and what the rain does - it's functions (or methods)
	*/
	constructor(x){
		/* 
		All classes MUST have a constructor.
		The constructor sets up the properties. Each one starts with "this." That tells JavaScript that it is a variable inside this object.
		All variables to do with this object that are not CONST need to be defined here.
		*/
		this.xPosition = x
		this.yPosition = Math.random()* - HEIGHT - RAIN_HEIGHT;
	}

	moveRain(){
		// Move the rain - Change it's position
		this.yPosition += RAIN_Y_SPEED
		///this.yPosition = 200 // HITBOX TESTING uncomment this line
		// When rain it's the bottom, restart at the top
		if(this.yPosition > HEIGHT){
			this.yPosition = Math.random() * - HEIGHT - RAIN_HEIGHT
		}
	}
}

/****
**
** Below is the code for collisions between umbrella and the rain
**
****/

function umbrellaHitRectangular(rainX, rainY){
	// Task 6b
	// Adjust the hitbox to make the collisions work better
	// 	Right now rain at the edges of the umbrella disappears before it touches the picture
	// 	If you move the umbrella down onto a raindrop the rain disappears before it touches the picure
	//
	// Below variables for the edges of the hitboxes for the umbrella and the raindrop have been defined.
	// To start with they have been defined to line up with the images
	// Adjust the edges so that the hitboxes line up better with the image of the umbrella and rain
	var umbrellaHitLeft = umbrellaXPosition
	var umbrellaHitRight = umbrellaXPosition + UMBRELLA_WIDTH
	var umbrellaHitTop = umbrellaYPosition
	var umbrellaHitBottom = umbrellaYPosition + UMBRELLA_HEIGHT
	
	var rainHitLeft = rainX
	var rainHitRight = rainX + RAIN_WIDTH
	var rainHitTop = rainY
	var rainHitBottom = rainY + RAIN_HEIGHT


	// Don't change these
	// These variables are calculated from the edges you adjusted above
	var umbrellaHitWidth = umbrellaHitRight-umbrellaHitLeft
	var umbrellaHitHeight = umbrellaHitBottom-umbrellaHitTop
	var rainHitWidth = rainHitRight-rainHitLeft
	var rainHitHeight = rainHitBottom-rainHitTop
	
	// Task 6a
	// Set things up for testing.
	// While you are testing hitboxes you will make some changes to the code.
	// You will want to test with one drop that is not moving
	// Then you will want to test with the rain falling very slowly
	// It will be helpful to have the hitboxes displaying
	// Use the "find" function to look for "HITBOX TESTING" for helpful places to adjust
	/// HITBOX TESTING: Uncomment the following three lines to draw the hitboxes on the screen
	/// ctx.strokeStyle = "rgb(0,255,0)" // Draw the hitboxes bright green
	/// ctx.strokeRect(umbrellaHitLeft, umbrellaHitTop, umbrellaHitWidth, umbrellaHitHeight);
	/// ctx.strokeRect(rainHitLeft, rainHitTop, rainHitWidth, rainHitHeight);

	////
	// Here is the rectangular collision code.
	// You do not need to modify it
	////	
	if(
		umbrellaHitRight > rainHitLeft 
		&& umbrellaHitLeft < rainHitRight
		&& umbrellaHitTop < rainHitBottom 
		&& umbrellaHitBottom > rainHitTop
	){
		// The raindrop has hit the umbrella, return true
		return(true)
	}else{
		// The raindrop has not hit the umbrella, return false
		return(false)
	}
}

function umbrellaHitCircular(rainX, rainY){
	// Task 7e
	// Set up the hitbox variables
	// The hitboxes do not match the images at all.
	// Images are drawn from the top left corner
	// Circles are drawn from the center
	// You need to work out the maths to make the hitboxes match the images
	var umbrellaHitX = umbrellaXPosition
	var umbrellaHitY = umbrellaYPosition
	var umbrellaHitRadius = UMBRELLA_RADIUS

	var rainHitX = rainX
	var rainHitY = rainY
	var rainHitRadius = RAIN_WIDTH/2
	

	// Task 7d
	// Draw the hitboxes
	// Uncomment the two ctx.arc lines below
	ctx.strokeStyle = "rgb(0,255,0)" // Draw the hitboxes bright green
	// Draw the umbrella hitbox
	ctx.beginPath();
	/// ctx.arc(umbrellaHitX, umbrellaHitY, umbrellaHitRadius, 0, 2 * Math.PI);
	ctx.stroke();
	// Draw the rain hitbox
	ctx.beginPath();
	/// ctx.arc(rainHitX, rainHitY, rainHitRadius, 0, 2 * Math.PI);
	ctx.stroke();

	////
	// Here is the circular collision code.
	// You do not need to modify it
	////
	// x distance
	var xDist = umbrellaHitX - rainHitX
	// y distance
	var yDist = umbrellaHitY - rainHitY

	// diagonal distance (Pythagoras!)
	var dist = Math.sqrt(xDist*xDist + yDist*yDist)
	if (dist < umbrellaHitRadius + rainHitRadius){
		// The raindrop has hit the umbrella, return true
		return(true)
	}else{
		// The raindrop has not hit the umbrella, return false
		return(false)
	}
}

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
