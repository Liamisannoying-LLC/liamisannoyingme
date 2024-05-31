/**
* Title: Using logic
* Author: Unknown / mitchli
* Date: Unknown
* Version: Built off "1"
* Purpose: Learn how to use logic to color the screen
**/

console.log("Logic activity")

const WIDTH = 600
const HEIGHT = 600
const DOTSIZE = 6

var ctx

window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
}

window.addEventListener('mousemove', mouseMoved)

function mouseMoved(mouseEvent){
	var mouseX = mouseEvent.offsetX;
	var mouseY = mouseEvent.offsetY

if (mouseX > 200 && mouseX < 400 && mouseY > 200 && mouseY < 400){


		color = "purple"
	}else if (mouseX > 300 && mouseY > 300){
		color = "green"
	}else if(mouseX > 300 && mouseY < 300){
		color = "yellow"
	}else if(mouseX < 300 && mouseY > 300){
		color = "red"
	}else if(mouseX < 300 && mouseY < 300){
		color = "blue"
}

// Task 5:
// If the mouse is in the middle 200 pixels the color should change to purple
// See the image in the doc
// There are many ways to do this, Experiment until you get it. Talk to your friends for ideas is you're stuck

/*
*  Here is where all the logic finishes
*/
	// Set the fill to the right color
	ctx.fillStyle = color;
	// Task 2: Draw a red square at the mouse pointer. Use the constant DOTSIZE instead of a literal value
	ctx.fillRect(mouseX, mouseY, DOTSIZE, DOTSIZE)

	// This is a debug statement. It might be useful later...
	console.log("mouseX, mouseY", mouseX, mouseY, "Color", color)
}
