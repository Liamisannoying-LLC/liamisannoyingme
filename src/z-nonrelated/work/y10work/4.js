/**
* Title: Canvas scripts
* Author: Unknown / mitchli
* Date: Unknown
* Version: Built off "1"
* Purpose: Learn how to use loops
**/

//Following is first part of setup

console.log("Loop activity")

const WIDTH = 600
const HEIGHT = 600

var ctx

window.onload=startCanvas

//All of following is second part of setup

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")

//Following draws the green squares, manually. 

	ctx.fillStyle = "blue"
	console.log("Starting blue")

	ctx.fillRect(0, 0, 50, 50)
	ctx.fillRect(100, 0, 50, 50)
    ctx.fillRect(200, 0, 50, 50)
    ctx.fillRect(300, 0, 50, 50)
    ctx.fillRect(400, 0, 50, 50)
    ctx.fillRect(500, 0, 50, 50)
    ctx.fillRect(0, 100, 50, 50)
    ctx.fillRect(100, 100, 50, 50)
    ctx.fillRect(200, 100, 50, 50)
    ctx.fillRect(300, 100, 50, 50)
    ctx.fillRect(400, 100, 50, 50)
    ctx.fillRect(500, 100, 50, 50)
    ctx.fillRect(0, 200, 50, 50)
    ctx.fillRect(100, 200, 50, 50)
    ctx.fillRect(200, 200, 50, 50)
    ctx.fillRect(300, 200, 50, 50)
    ctx.fillRect(400, 200, 50, 50)
    ctx.fillRect(500, 200, 50, 50)
    ctx.fillRect(0, 300, 50, 50)
    ctx.fillRect(100, 300, 50, 50)
    ctx.fillRect(200, 300, 50, 50)
    ctx.fillRect(300, 300, 50, 50)
    ctx.fillRect(400, 300, 50, 50)
    ctx.fillRect(500, 300, 50, 50)
    ctx.fillRect(0, 400, 50, 50)
    ctx.fillRect(100, 400, 50, 50)
    ctx.fillRect(200, 400, 50, 50)
    ctx.fillRect(300, 400, 50, 50)
    ctx.fillRect(400, 400, 50, 50)
    ctx.fillRect(500, 400, 50, 50)
    ctx.fillRect(0, 500, 50, 50)
    ctx.fillRect(100, 500, 50, 50)
    ctx.fillRect(200, 500, 50, 50)
    ctx.fillRect(300, 500, 50, 50)
    ctx.fillRect(400, 500, 50, 50)
    ctx.fillRect(500, 500, 50, 50)

	//Following draws the green squares, using a few nearly identical loops.

	ctx.fillStyle = "green"
	console.log("Starting green")

	xPosition = 50
	count = 0
	while(count < 6){
    	ctx.fillRect(xPosition, 0, 50, 50)
		xPosition = xPosition + 100
		count = count + 1
	}
	xPosition = 50
	count = 0
	while(count < 6){
    	ctx.fillRect(xPosition, 100, 50, 50)
		xPosition = xPosition + 100
		count = count + 1
	}
	xPosition = 50
	count = 0
	while(count < 6){
    	ctx.fillRect(xPosition, 200, 50, 50)
		xPosition = xPosition + 100
		count = count + 1
	}
	xPosition = 50
	count = 0
	while(count < 6){
    	ctx.fillRect(xPosition, 300, 50, 50)
		xPosition = xPosition + 100
		count = count + 1
	}
	xPosition = 50
	count = 0
	while(count < 6){
   		ctx.fillRect(xPosition, 400, 50, 50)
		xPosition = xPosition + 100
		count = count + 1
	}
	xPosition = 50
	count = 0
	while(count < 6){
   		ctx.fillRect(xPosition, 500, 50, 50)
		xPosition = xPosition + 100
		count = count + 1
	}

	//Following draws the orange squares, using the same method as the green squares, except instead of a count variable, we use WIDTH

	ctx.fillStyle = "orange"
	console.log("Starting orange")

	xPosition = 0
	while(xPosition < WIDTH){
		ctx.fillRect(xPosition, 50, 50, 50)
		xPosition = xPosition + 100
	}
	xPosition = 0
	while(xPosition < WIDTH){
		ctx.fillRect(xPosition, 150, 50, 50)
		xPosition = xPosition + 100
	}
	xPosition = 0
	while(xPosition < WIDTH){
		ctx.fillRect(xPosition, 250, 50, 50)
		xPosition = xPosition + 100
	}
	xPosition = 0
	while(xPosition < WIDTH){
		ctx.fillRect(xPosition, 350, 50, 50)
		xPosition = xPosition + 100
	}
	xPosition = 0
	while(xPosition < WIDTH){
		ctx.fillRect(xPosition, 450, 50, 50)
		xPosition = xPosition + 100
	}
	xPosition = 0
	while(xPosition < WIDTH){
		ctx.fillRect(xPosition, 550, 50, 50)
		xPosition = xPosition + 100
	}

	//Following draws the purple squares, using nested loop

	ctx.fillStyle = "purple"
	console.log("Starting purple")

	xPosition = 50
	while(xPosition < WIDTH){ 
		yPosition = 50
		while(yPosition < WIDTH){ 
			ctx.fillRect(xPosition, yPosition, 50, 50)
			yPosition = yPosition + 100
		}
		xPosition = xPosition + 100
	}

	//Following draws the red squares, using nested loop

	ctx.fillStyle = "red"
	console.log("Starting red")

	xPosition = 20
	while(xPosition < WIDTH){ 
		yPosition = 20
		while(yPosition < WIDTH){ 
			ctx.fillRect(xPosition, yPosition, 10, 10)
			yPosition = yPosition + 50
		}
		xPosition = xPosition + 50
	}

	//Following draws the black squares, using two non-nested loops becuase making them nested was unnecessary for the product (for now)

	ctx.fillStyle = "black"
	console.log("Starting black")
	
	xPosition = 30;
	yPosition = 30;
	blacksquarecount = 0
	blacksquaresdone = false
	
	while(blacksquarecount < 11){
		ctx.fillRect(xPosition, yPosition, 40, 40)
		xPosition = xPosition + 50
		yPosition = yPosition + 50
		blacksquarecount = blacksquarecount + 1
	}
	xPosition = 530
	yPosition = 30
	blacksquarecount = 0

	while (blacksquarecount < 11){
		ctx.fillRect(xPosition, yPosition, 40, 40)
		xPosition = xPosition - 50
		yPosition = yPosition + 50
		blacksquarecount = blacksquarecount + 1
	}

console.log("Finished")
}
