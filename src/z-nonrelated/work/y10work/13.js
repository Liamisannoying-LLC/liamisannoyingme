/**
* Title: Objects Array excercises
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to create and use an array of objects
**/

console.log("Objects Array activity")

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

// Task 4a
// Create the array that will hold the raindrops
// Uncomment the rainArray line
///var rainArray = []

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
	
	// Task 2b
	// Change the starting position of the drop from 0 to a random point along the top
	// It will involve math.random()
	drop1 = new Rain(0)

	// Task 3a
	// Create a second drop (create as many as you like)
	// Copy the code from 2b, name the new drop "drop2"


	// Task 4b
	// Create a drop, push it into the array
	// Uncomment the push line below. 
	// Change the starting position from 0 to a random point along the top
	///	rainArray.push(new Rain(0))


	
	// Task 4c
	// Check the new raindrop
	// You can get to the objects in the array by using their index
	// The first object in the array is rainArray[0]
	// You can get it's xPosition by using rainArray[0] like the object variable: rainArray[0].xPosition
	// Log the xPosition of the raindrop. Uncomment the following line and fix it
	/// console.log("The drop's x position is", PUT THE X POSITION HERE)
	
	
	
	// Task 5a
	// Add another drop to the array
	// This is exactly the same as what you did in task 4b. Copy that line of code here



	// Task 5b
	// Check the new raindrop
	// There are now two drops in the array
	// The second object in the array is rainArray[1]
	// Log the xPosition of the raindrop. Uncomment the following line and fix it
	/// console.log("The second drop's x position is", PUT THE X POSITION HERE)
	
	
	
	// Task 6a
	// Add another 8 drops.
	// Copy and paste the code for task 5a here 8 times. Easy!



	// Task 7a
	// Create 200 raindrops
	// Don't copy/paste
	// Use a loop
	// Copy one of the while loops (maybe from task 6d)
	// Copy one of the while loops (maybe from task 6d)
	// Change the top limit from 10 to 200
	// Replace the code in the loop with a new rain line like you copied in task 6a


	
	// Task 7b
	// Check the number
	// Log a message to say how many drops are in the array.
	// You can get the number of elements in the rainArray by calling rainArray.length
	///console.log("There are", PUT THE ARRAY LENGTH HERE ,"drops in the rainArray")
	
	// Task 7c
	// Tidy up your code
	// There are too many drops. Delete the code you created in task 4b, 4c, 5a, 5b and 6a
	// Keep your code tidy. Now there should be exactly 200 drops
		
		
	// Task 9
	// How many raindrops in a storm. Change the number of drops created.
	// Check that they all draw, move and collide correctly.
	// Try 400
	// Try 1000
	// Try 10000
	// When does it start to get laggy
	// There are some subtle bugs with large numbers of drops. See if you can fix them
}

function updateCanvas(){
	// Clear the frame
	ctx.fillStyle="white"
	ctx.fillRect(0,0,WIDTH, HEIGHT)

	/**
	**
	** Move the raindrops
	**
	**/

	// Task 2c
	// Move the rain
	// The Rain class has a movement method moveRain()
	// Uncomment the line below, replace BADNAME with the name of the raindrop
/// BADNAME.moveRain()
	
	// Task 3c
	// Move the second drop
	// Copy the code from 2c, fix the name


	// Task 4e
	// Move the new drop
	// You can access methods in the same way you can access properties
	// Uncomment the line below
	/// rainArray[0].moveRain()

 
	// Task 5d
	// Move the new drop
	// Similar to task 4e, just use the new index. You can copy the code from task 4e and change it

	
	// Task 6d
	// Move the new drops
	// Copy the loop from task 6b.
	// Replace the fillRect line with a moveRain line like task 5d




	// Task 6e
	// Once this is working, tidy up your code.
	// The code you wrote for task 4e and 5d are causing problems.
	// You are moving the first two drops twice.
	// Delete the redundant code.
	
	
	// Task 7d
	// Move the drops
	// The movement loop (task 6d) is only doing the first 10 drops in the rainArray
	// Change the maximum to the number of drops in the rainArray
	// Use rainArray.length
	
	// Task 7e
	// Fix the rest
	// The movement loop and collision loops are only doing the first 10 drops
	// Fix those
	

	/**
	**
	** Move the chick
	**
	**/
	moveChick()
	
	
	/**
	**
	** Do collisions
	**
	**/
	umbrellaColor = UMBRELLA_COLOR
	// Task 2d
	// Detect a collision
	// The umbrellaHit() function needs two arguments, the x position and the y position of the drop
	// If the drop has hit the umbrella it needs to go back to the top
	// Fix these two things
	if (umbrellaHit(0, drop1.yPosition)){ // Check the drop's xPosition and yPosition
		umbrellaColor = UMBRELLA_HIT_COLOR // Change the umbrella color
		drop1.yPosition // Reset the yPosition to the top
	}

	// Task 3d
	// Detect a collision with the second drop
	// Copy and adjust the code from 2d


	
	// Task 4f
	// Detect a collision with the new drop
	// Uncomment the collision code below and fix it.
	/// if (umbrellaHit(0, rainArray[0].yPosition)){ // Check the drop's xPosition and yPosition
	///	 umbrellaColor = UMBRELLA_HIT_COLOR  // Change the umbrella color
	///										// Reset the yPosition to the top
	/// }

	
	// Task 5e
	// Detect a collision with the new drop
	// Uncomment the collision code below and fix it.
	// Don't forget to use the index of the new drop
	/// if (umbrellaHit(0, rainArray[0].yPosition)){ // Check the drop's xPosition and yPosition
	///	 umbrellaColor = UMBRELLA_HIT_COLOR // Change the umbrella color
	///										// Reset the yPosition to the top
	/// }


	// Task 6f
	// Detect collisions with the new drops.
	// Use a loop to detect a collision with each new drop
	// Copy the loop from task 6b.
	// Replace the fillRect line with a the collision code, like task 4f and 5d


	
	// Task 6g
	// Once this is working, tidy up your code.
	// You do not need the code you wrote for task 4f or 5e.
	// Leaving it in will make your code hard to debug later.
	// Delete the redundant code.
	
	
	// Task 8b
	// When drops get to the bottom the should not go to the top
	// Change the line in the collision code (task 6f) that changes the drops yPosition
	// Make them appear at a random position above the canvas
	// A y position between 0 and -HEIGHT (negative y is above the canvas)
	
	// Task 8c
	// Tidy up.
	// Get rid of the two red drops (drop1, drop2)
	// Use the find function (ctrl-f) to find all the times you have used drop1 and drop 2
	// Delete any code that uses them.
	
	/**
	**
	** Draw the rain
	**
	**/
	ctx.fillStyle="red" // Color the first drops red for debugging
	// Task 2a
	// Draw the first drop of rain
	// Uncomment the fillRect line
	///ctx.fillRect(drop1.xPosition, drop1.yPosition, RAIN_WIDTH, RAIN_HEIGHT);
	
	// Task 3b
	// Draw the second drop
	// Uncomment the fillRect line and fix the xPosition
	///ctx.fillRect(0, drop2.yPosition, RAIN_WIDTH, RAIN_HEIGHT);

	ctx.fillStyle=RAIN_COLOR // Color the rest of the rain properly
	// Task 4d
	// Draw the new drop
	// The x position has been done for you, fill in the y position
	/// ctx.fillRect(rainArray[0].xPosition, 0, RAIN_WIDTH, RAIN_HEIGHT);

	
	// Task 5c
	// Draw the new drop
	// This is just like task 4d except you need to do use rainArray[1] instead of rainArray[0]
	// Copy the fillRect line and adjust it for the new drop


	// Task 6b
	// Draw all 10 drops
	// You could do each individually but that would be a lot of copy/paste and editing
	// Much faster to use a loop (remember loops from skill 3)
	// This loop needs to be fixed. 
	//		The while line should go up to 10
	//		The fillRect needs the x position for the drop
	var dropNumber = 0 // Start at drop 0
	while (dropNumber < 0){ // Keep going until you get to the last drop
		ctx.fillRect(0, rainArray[dropNumber].yPosition, RAIN_WIDTH, RAIN_HEIGHT);
		dropNumber ++ // Do the next drop
	}

	
	// Task 6c
	// Once this is working, tidy up your code.
	// You do not need the code you wrote for task 4d or 5c.
	// Leaving it in will make your code hard to debug later.
	// Delete the redundant code.
	


	// Draw the umbrella
	ctx.fillStyle=umbrellaColor
	ctx.fillRect(umbrellaXPosition, umbrellaYPosition, UMBRELLA_WIDTH, UMBRELLA_HEIGHT);
	
	// Draw the chick
	ctx.fillStyle=chickColor
	ctx.fillRect(chickXPosition, HEIGHT - CHICK_HEIGHT, CHICK_WIDTH, CHICK_HEIGHT);
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
		// Task 8a
		// The rain looks terrible!
		// The drops should start at random heights
		// Change the line below that sets the yPosition
		// Make them appear at a random position above the canvas
		// A y position between 0 and -HEIGHT (negative y is above the canvas)
		this.yPosition = 0
	}
	moveRain(){
		// Move the rain - Change it's position
		this.yPosition += RAIN_Y_SPEED
	
		// When rain it's the bottom, restart at the top
		if(this.yPosition > HEIGHT){
			this.yPosition = 0 // There is a problem here. This line means the rain flickers in at the top of the canvas. See if you can fix it.
		}
	}
}

/****
**
** Below is the code for collisions, umbrella and the chick. 
** You will not need to modify it this lesson.
**
****/

function umbrellaHit(rainX, rainY){
	// Rectangular collision detection between the raindrop and the umbrella
	if(
		umbrellaXPosition + UMBRELLA_WIDTH > rainX && 
		umbrellaXPosition < rainX+RAIN_WIDTH &&
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