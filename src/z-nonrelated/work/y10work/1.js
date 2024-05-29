/**
* Title: Canvas scripts
* Author: Unknown / mitchli
* Date: Unknown
* Version: 1.1 (typo fix 7-nov-22)
* Purpose: Learn how to draw on the HTML canvas.
*			Rectangles, coordinates, log messages
**/

//Becuase why not
console.log("Hello World!")

//Starts the canvas, and has an... interesting method to debug. If it returns correct info anout the console text, it should be good. 
//I believe the reason for this is that it not only avoids syntax errors, but also logic ones. I think.

window.onload=startCanvas

function startCanvas(){
	var ctx
	ctx=document.getElementById("myCanvas").getContext("2d")
	console.log("debug: " + ctx.font)

	//The following draws the four side rectangles

	ctx.fillStyle = "black";
	ctx.fillRect(0, 0, 100, 25);
	
	ctx.fillStyle = "red";
	ctx.fillRect(575, 0, 25, 100);
	
	ctx.fillStyle = "green";
	ctx.fillRect(500, 375, 100, 25);
	
	ctx.fillStyle = "blue";
	ctx.fillRect(0, 300, 25, 100);
	
	//The following draws the Robot
	
	ctx.fillStyle = "yellow";
	ctx.fillRect(90, 35, 350, 400)

	ctx.fillStyle = "black";
  	ctx.fillRect(235, 275, 60, 210)
	
	ctx.fillStyle = "black";
	ctx.fillRect(175, 75, 180, 210)

	ctx.fillStyle = "black";
	ctx.fillRect(255, 295, 60, 210)
	
	ctx.fillStyle = "black";
	ctx.fillRect(195, 95, 180, 210)

	ctx.fillStyle = "black";
	ctx.fillRect(135, 335, 220, 110)
	
	ctx.fillStyle = "darkred";
	ctx.fillRect(200, 100, 170, 200)

	ctx.fillStyle = "black";
	ctx.fillRect(155, 355, 220, 110)

	ctx.fillStyle = "black";
	ctx.fillRect(335, 150, 50, 50,)

	ctx.fillStyle = "navy";
	ctx.fillRect(340, 155, 40, 40,)

	ctx.fillStyle = "black";
	ctx.fillRect(260, 150, 50, 50,)

	ctx.fillStyle = "navy";
	ctx.fillRect(265, 155, 40, 40,)

	ctx.fillStyle = "black";
	ctx.fillRect(270, 235, 115, 30);

	ctx.fillStyle = "navy";
	ctx.fillRect(275, 240, 105, 20);

	ctx.fillStyle = "darkred";
	ctx.fillRect(260, 300, 50, 200)

	ctx.fillStyle = "darkblue";
	ctx.fillRect(160, 360, 210, 100)

	//The following draws some random lines for artistic/grading reasons
	
	ctx.beginPath();
	ctx.moveTo(290, 0);
	ctx.lineTo(35, 100);
	ctx.lineTo(200, 300);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(310, 0);
	ctx.lineTo(55, 100);
	ctx.lineTo(200, 280);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(330, 0);
	ctx.lineTo(75, 100);
	ctx.lineTo(200, 260);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(350, 0);
	ctx.lineTo(95, 100);
	ctx.lineTo(200, 240);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(370, 0);
	ctx.lineTo(115, 100);
	ctx.lineTo(200, 220);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(390, 0);
	ctx.lineTo(135, 100);
	ctx.lineTo(200, 200);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(410, 0);
	ctx.lineTo(155, 100);
	ctx.lineTo(200, 180);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(430, 0);
	ctx.lineTo(175, 100);
	ctx.lineTo(200, 160);
	ctx.strokeStyle = "red";
	ctx.stroke();

	ctx.beginPath();
	ctx.moveTo(450, 0);
	ctx.lineTo(195, 100);
	ctx.lineTo(200, 140);
	ctx.strokeStyle = "red";
	ctx.stroke();

  }
