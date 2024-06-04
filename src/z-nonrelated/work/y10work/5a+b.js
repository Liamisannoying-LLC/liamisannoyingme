/**
* Title: Functions excercise
* Author: Unknown / mitchli
* Date: Unknown
* Version: 1.1 (9-Nob-22 - improve some instructions, break up tasks to make lesson into two parts)
* Purpose: Learn how to use functions
**/

console.log("Functions activity")

const WIDTH = 600;
const HEIGHT = 600;

var ctx
var textColor = "HotPink"
var bgColor = "Beige"

window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	ctx.font = "45px arial"
	ctx.fillStyle = "black"
	ctx.fillText("Guess my word",150,255);
	ctx.fillText("Press any key",150,300);
}

// Remember event handling from skill 2:
// Events: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// All events you could listen for: https://www.w3schools.com/jsref/dom_obj_event.asp
// The format for an event listener is: element.addEventListener(<which event to listen for>, <what to do with the event>);
// We are listening for the 'keydown' event in the HTML window element. When a key on the keyboard is pressed we want to run the keyDownFunction.
// Task 2a: Uncomment the line below
window.addEventListener('keydown', keyDownFunction)

// This is the function that the eventlistener calls when a key is pressed
function keyDownFunction(keyboardEvent){
	// The keyboard event is passed to the function as an argument
	// The key that was pressed is stored in a local variable named keyDown
	var keyDown = keyboardEvent.key
	
	// Task 2b: Use console.log to display a message saying "You just pressed" and the key that was pressed on the same line

	// Task 3: 
	// Use ctx.fillRect() to fill the whole canvas with the background color.
	//			Use the global variable bgColor
	// Use ctx.fillText() to write the message "You pressed " and the key that was pressed on the canvas in the text Color.
	//			Use the global variable textColor
	//			Use the X and Y coordinates 150, 150

	// Task 4: My secret word is "cat"
	// Use a logic statement to detect the letters in the word "cat"
	// If one of these letters is detected use console.log() to log an appropriate message "congratulations *** is in my word"
	// If any other key is pressed use console.log() to log an appropriate message "sorry *** is not in my word :-("
	//			Don't forget to use double equals (==) in the if statements!
	 if (keyDown=="c"){
		 //Add something in here for what you want to do if the letter is a "c"
	 }else if ( false ){  // you will need to change 'false' to being a test for the letter "a"
	 }else if ( false ){
	 }else{   // If none of the letters match.
		
	 }
}

// Task 5:
// Below is a congratulations function. 
// Replace the console.log "congratulations" statements from task 4 with this function:  congratulations()
// Test it.
// We don't care about the order of the letters
function congratulations(){ // Task 6a: Add the parameter "key" (look at the slides to remind yourself about parameters)
	console.log("That letter is in the word.")
	// Task 6b: 
	// Use the parameter. 
	// In task 5 you you added a call to the congratulations() function.  Now you need to pass the "keyDown" variable to the congratulations function
	// So the call in your keyDownFunction should be changd to look like this: congratulations(keyDown)
	// Uncomment the line below.
	///console.log("Congratulations",key,"is in my word")

	// Task 7:
	// Add graphics.
	// When a correct key is pressed colour the bottom half of the canvas green
	// Find a good green colour from https://www.w3schools.com/colors/colors_names.asp
	// Display the message "Correct, <letter> is in my word!" on the canvas.  where <letter> is the key they pressed.
	// Because this is in a function you will only need to write it once!
} // This is the end of the congratulations function

// Task 8:
// Create a new function for when an incorrect key is pressed.
// Use this function instead of the console.log under task 4
// This function should colour the botton half of the canvas red
// Find a good red colour from https://www.w3schools.com/colors/colors_names.asp
//			I think LightCoral works well
// It should also give a message saying which key was pressed and that it is not in the word.
