/**
* Title: Canvas scripts
* Author: Unknown / mitchli
* Date: Unknown
* Version: Built off "1"
* Purpose: Learn how to use loops
**/

//Following is first part of setup

console.log("Loop activity")

var WIDTH = 800

var ctx

window.onload=startCanvas

function resizeCanvas(){
	var width = parseInt(document.getElementsByName("inputbox")[0].value)
	if (!isNaN(width)){
		WIDTH = width
		startCanvas()
	}
	else{

	}
}

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

	function drawleft(){
		ctx.fillRect(leftXPosition, YPosition, 40, 40)
	}
	function drawright(){
		ctx.fillRect(rightXPosition, YPosition, 40, 40)
	}
	
	while(YPosition < WIDTH - 69){
		drawleft()
		drawright()

		leftXPosition = leftXPosition + 50
		rightXPosition = rightXPosition - 50
		YPosition = YPosition + 50

		if(leftXPosition > WIDTH - 50 && rightXPosition < 50){
			blackDone = true
		}
		if(blackDone){
			break
		}
	}

console.log("Finished")
}
