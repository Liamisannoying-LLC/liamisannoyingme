/**
* Title: Mouse Position
* Author: Unknown / mitchli
* Date: Unknown
* Version: 1
* Purpose: Learn how to detect the mouse position
**/

console.log("mouseEvent activity")

// Values that will not change during the program should be declared at the start of the program by using the the keyword 'const'.
// It is good practice to use ALLCAPS for constants
// The size of the canvas will not change, these should be declared as constants. WIDTH has been done for you.
// Declare a const for height on line 16.
const WIDTH = 600
const HEIGHT = 600

// the context 'ctx' is another variable that will be used a lot, it is declared at the start of the program
var ctx

window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	// Brown border
	ctx.fillStyle = "brown"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	// Beige background
	ctx.fillStyle = "beige"
	ctx.fillRect(10,10,WIDTH-20,HEIGHT-20)
}
// Events: https://www.w3schools.com/js/js_htmldom_eventlistener.asp
// All events you could listen for: https://www.w3schools.com/jsref/dom_obj_event.asp
// The format for an event listener is: element.addEventListener(<which event to listen for>, <what to do with the event>);
// We are listening for the 'mousemove' event in the HTML window element. When the mouse moves we want to call the mouseMoved function.
// Uncomment the line below
window.addEventListener('mousemove', mouseMovedFunction)

function mouseMovedFunction(mouseEvent){
	// When a mousemove event happens the event gets passed to this function.
	// All of the information about the event is stored in a special variable "mouseEvent"
	// You can get a lot of information about the event. Have a look at https://www.w3schools.com/jsref/obj_mouseevent.asp for a full list of info in a mouse event
	// Here we are interested in the offsetX and offsetY properties. These tell us where on the canvas the mouse is
	// Uncomment the next five lines, fix line 47. Check out the log as you move the mouse:
	var mouseX
	var mouseY
	mouseX = mouseEvent.offsetX; // the offsetX property is the x position on the canvas
    mouseY = mouseEvent.offsetY // the offsetY property is the y position on the canvas
	console.log("mouseX, mouseY",  mouseX, mouseY)
	
	// Draw different coloured dots when the mouse is moved. Fix them up one at a time...
	// The x value goes along the width of the canvas, the y value goes along the height
	ctx.fillStyle = "red"
	// Use the mouseX and mouseY to draw a dot where the mouse pointer is
    ctx.fillRect(mouseX, mouseY, 6, 6)
	
	ctx.fillStyle = "orange"
	// Use the mouseX and mouseY to draw a dot reflected horizontally across the centerline
    ctx.fillRect(WIDTH-mouseX, , 6, 6)
	
	ctx.fillStyle = "blue"
	// Use the mouseX and mouseY to draw a dot reflected vertically across the centerline
    ctx.fillRect(mouseX, HEIGHT, 6, 6)	
	
	ctx.fillStyle = "green" 
	// Use the mouseX and mouseY to draw a dot reflected across the centerpoint
    ctx.fillRect(, , 6, 6)	

	ctx.fillStyle = "purple"
	// Use the mouseX and mouseY to draw a dot reflected across a diagonal - see the image in the doc
    ctx.fillRect(mouseY, , 6, 6)	

	ctx.fillStyle = "yellow"
	// Use the mouseX and mouseY to draw a dot reflected across a diagonal - see the image in the doc
    ctx.fillRect(, , 6, 6)	

	ctx.fillStyle = "darkblue"
	// Use the mouseX and mouseY to draw a dot reflected across a diagonal - see the image in the doc
    ctx.fillRect(, , 6, 6)	

	ctx.fillStyle = "darkcyan"
	// Use the mouseX and mouseY to draw a dot reflected across a diagonal - see the image in the doc
    ctx.fillRect(, , 6, 6)	
}

// Add a new event listener (see line 37)
// It should listen for the 'click' event. It should call the clickFunction

// Add a new function called click Function
// It should log the word "Click!" whenever the mouse is clicked (see line 9)
// Then it should clear the drawing
