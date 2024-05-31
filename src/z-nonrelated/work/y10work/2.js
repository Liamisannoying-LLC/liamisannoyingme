/**
* Title: Mouse Position
* Author: Unknown / mitchli
* Date: Unknown
* Version: Built off "1"
* Purpose: Learn how to detect the mouse position
**/

console.log("mouseEvent activity")
const WIDTH = 600
const HEIGHT = 600
var ctx

//Following is setup

window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	ctx.fillStyle = "brown"
	ctx.fillRect(0,0,WIDTH,HEIGHT)
	ctx.fillStyle = "beige"
	ctx.fillRect(10,10, WIDTH-20, HEIGHT-20)
}

window.addEventListener('mousemove', mouseMovedFunction)

function mouseMovedFunction(mouseEvent){
	var mouseX
	var mouseY
	mouseX = mouseEvent.offsetX
    mouseY = mouseEvent.offsetY
	console.log("mouseX, mouseY",  mouseX, mouseY)
	ctx.fillStyle = "red"
    ctx.fillRect(mouseX, mouseY, 6, 6)
	
	//Following draws the dots
	//Important to note that if you follow the instructions given on here, you get a different result to the instructions given on the doc. 
	//The difference relates to the positioning of the different coloured lines relative to the mouse pointer. 
	//I followed as closely as I could to the original source code, here. 
	//However, for some of them, I only had the doc to work with. This means that some are rotated, and some not. 
	//I could have rotated some of them so that they are all wrong in the same way so that it can all be rotated to in effect be the same, but I decided not to for now.
	
	ctx.fillStyle = "orange"
    ctx.fillRect(mouseX, HEIGHT-mouseY, 6, 6)
	
	ctx.fillStyle = "blue"
    ctx.fillRect(WIDTH-mouseX, mouseY, 6, 6)	
	
	ctx.fillStyle = "green"
    ctx.fillRect(HEIGHT-mouseX, WIDTH-mouseY, 6, 6)	

	ctx.fillStyle = "purple"
    ctx.fillRect(mouseY, mouseX, 6, 6)

	ctx.fillStyle = "yellow"
    ctx.fillRect(WIDTH-mouseY, mouseX, 6, 6)

	ctx.fillStyle = "darkblue"
    ctx.fillRect(mouseY, WIDTH-mouseX, 6, 6)

	ctx.fillStyle = "darkcyan"
    ctx.fillRect(HEIGHT-mouseY, WIDTH-mouseX, 6, 6)
}

//Following restarts canvas

window.addEventListener('click', clickFunction)

function clickFunction(event) {
    console.log("Click!")
    ctx.clearRect(0, 0, WIDTH, HEIGHT)
	startCanvas()
}
