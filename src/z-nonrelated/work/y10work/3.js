/**
* Title: Using logic
* Author: Unknown / mitchli
* Date: Unknown
* Version: Built off "1"
* Purpose: Learn how to use logic to color the screen
**/

//Following is setup

console.log("Logic activity")

const WIDTH = 600
const HEIGHT = 600
const DOTSIZE = 6

var ctx

window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
}

//Following is detection of mouse

window.addEventListener('mousemove', mouseMoved)

function mouseMoved(mouseEvent){
	var mouseX = mouseEvent.offsetX;
	var mouseY = mouseEvent.offsetY

//The logic. First, it detects if it should draw purple by finding if the mouse is in the ranges x(200-400) and y(200-400). 
//If not it's just about what quadrant it's in.

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

//Following is how to draw

ctx.fillStyle = color;
ctx.fillRect(mouseX, mouseY, DOTSIZE, DOTSIZE)
console.log("mouseX, mouseY", mouseX, mouseY, "Color", color)
}
