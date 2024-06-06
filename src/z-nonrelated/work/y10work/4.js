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

var ctx

window.onload=startCanvas

//All of following is second part of setup

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")

//Following draws the green squares, using a nested loop so it can be sclable.

	ctx.fillStyle = "blue"
	console.log("Starting blue")

	xPosition = 0
	while(xPosition < WIDTH){ 
		yPosition = 0
		while(yPosition < WIDTH){ 
			ctx.fillRect(xPosition, yPosition, 50, 50)
			yPosition = yPosition + 100
		}
		xPosition = xPosition + 100
	}

	//Following draws the green squares, using a nested loop so it can be sclable.

	ctx.fillStyle = "green"
	console.log("Starting green")
	
	xPosition = 50
	while(xPosition < WIDTH){ 
		yPosition = 0
		while(yPosition < WIDTH){ 
			ctx.fillRect(xPosition, yPosition, 50, 50)
			yPosition = yPosition + 100
		}
		xPosition = xPosition + 100
	}

	//Following draws the orange squares, using a nested loop so it can be sclable.

	ctx.fillStyle = "orange"
	console.log("Starting orange")
	
	xPosition = 0
	while(xPosition < WIDTH){ 
		yPosition = 50
		while(yPosition < WIDTH){ 
			ctx.fillRect(xPosition, yPosition, 50, 50)
			yPosition = yPosition + 100
		}
		xPosition = xPosition + 100
	}
		

	//Following draws the purple squares, using a nested loop so it can be sclable.

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

	//Following draws the red squares, using a nested loop so it can be sclable.

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

	//Following draws the black squares, using a nested loop so it can be sclable.

	ctx.fillStyle = "black"
	console.log("Starting black")
	
	leftXPosition = 30
	YPosition = 30
	rightXPosition = WIDTH - 70
	blackDone = false

	if(blackDone == false){
		ctx.fillRect(leftXPosition, YPosition, 40, 40)
		ctx.fillRect(rightXPosition, YPosition, 40, 40)
		leftXPosition = leftXPosition + 50
		yPosition = yPosition - 50
		ctx.fillRect(leftXPosition, YPosition, 40, 40)
		ctx.fillRect(rightXPosition, YPosition, 40, 40)

		blackdone = true
	}

console.log("Finished")
}
