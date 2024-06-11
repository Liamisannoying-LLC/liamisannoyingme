/**
 * Title: Functions exercise
 * Author: Unknown / mitchli
 * Date: Unknown
 * Version: Built off "1.1""
 * Purpose: Learn how to use functions
 */

//Following is setup
console.log("Functions activity");

const WIDTH = 600;
const HEIGHT = 600;

let ctx;
let textColor = "HotPink";
let bgColor = "Beige";

window.onload = startCanvas;

function startCanvas() {
  ctx = document.getElementById("myCanvas").getContext("2d");
  ctx.font = "45px arial";
  ctx.fillStyle = "black";
  ctx.fillText("Guess my word", 150, 255);
  ctx.fillText("Press any key", 150, 300);
}

window.addEventListener('keydown', keyDownFunction);

function keyDownFunction(keyboardEvent) {
  const keyDown = keyboardEvent.key;

  if (/^[a-zA-Z]$/.test(keyDown)) {
    displayKey(keyDown);
  }
}

function displayKey(key) {
  console.log(`You pressed '${key}'`);

  ctx.fillStyle = bgColor;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.fillStyle = textColor;
  ctx.fillText("You pressed '" + (key) + "'", 150, 150);

  if (["c", "a", "t"].includes(key.toLowerCase())) {
    congratulations(key);
  } else {
    displayIncorrectMessage(key);
  }
}

function congratulations(key) {
  console.log("Congratulations, '" + (key) + "' is in my word");

  ctx.fillStyle = "lightgreen";
  ctx.fillRect(0, 300, WIDTH, HEIGHT);
  ctx.fillStyle = "black";
  ctx.fillText("Well done, '" + (key) + "' is in my word", 10, 470);
}

function displayIncorrectMessage(key) {
  console.log("Sorry, '" + (key) + "' is not in my word");

  ctx.fillStyle = "lightcoral";
  ctx.fillRect(0, 300, WIDTH, HEIGHT);
  ctx.fillStyle = "black";
  ctx.fillText("Sorry, '" + (key) + "' is not in my word", 10, 470);
}

