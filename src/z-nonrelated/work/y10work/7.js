/**
* Title: Animation excercise
* Author: 
* Date: 
* Version: 1
* Purpose: Learn how to animate the canvas
**/

console.log("Animation activity")

const WIDTH = 613;
const HEIGHT = 500;
const DOTSIZE = 50;
var ctx
var frameCount = 0
var blueXPosition = WIDTH - WIDTH - DOTSIZE
var redXPosition = WIDTH
var greenYPosition = HEIGHT - HEIGHT - DOTSIZE
var yellowYPosition = 500
var purpleXPosition = WIDTH - WIDTH - DOTSIZE
var purpleYPosition = 0
var orangeXPosition = 0
var orangeYPosition = HEIGHT - DOTSIZE

window.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	setInterval(updateCanvas, 0)
}

function updateCanvas() {
    frameCount++;

    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, WIDTH, HEIGHT);

    blueXPosition++;
    ctx.fillStyle = "blue";
    ctx.fillRect(blueXPosition, 250, DOTSIZE, DOTSIZE);

    redXPosition--;
    ctx.fillStyle = "red";
    ctx.fillRect(redXPosition, 250, DOTSIZE, DOTSIZE);

    greenYPosition++;
    ctx.fillStyle = "green";
    ctx.fillRect(300, greenYPosition, DOTSIZE, DOTSIZE);

    yellowYPosition -= 0.125;
    ctx.fillStyle = "yellow";
    ctx.fillRect(300, yellowYPosition, DOTSIZE, DOTSIZE);

    purpleXPosition++;
    purpleYPosition++;
    ctx.fillStyle = "purple";
    ctx.fillRect(purpleXPosition, purpleYPosition, DOTSIZE, DOTSIZE);

    orangeXPosition += 0.2;
    orangeYPosition -= 0.1;
    ctx.fillStyle = "orange";
    ctx.fillRect(orangeXPosition, orangeYPosition, DOTSIZE, DOTSIZE);

    if (blueXPosition > WIDTH) blueXPosition = -DOTSIZE;
    if (redXPosition < -DOTSIZE) redXPosition = WIDTH;
    if (greenYPosition > HEIGHT) greenYPosition = -DOTSIZE;
    if (yellowYPosition < -DOTSIZE) yellowYPosition = HEIGHT;

    if (purpleXPosition > WIDTH + DOTSIZE) purpleXPosition = -DOTSIZE;
    if (purpleYPosition > HEIGHT + DOTSIZE) purpleYPosition = -DOTSIZE;

    if (orangeXPosition > WIDTH + DOTSIZE || orangeYPosition < -DOTSIZE) {
        orangeXPosition = -DOTSIZE;
        orangeYPosition = HEIGHT;
    }
	console.log("I have drawn frame " + frameCount)
}
