import Player from "./Player.js";
import EnemyController from './EnemyController.js';
import BulletController from "./BulletController.js";

// get the canvas and its 2d drawing context
const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

// set the canvas size
canvas.width = 1400;
canvas.height = 700;

// load the background image
const background = new Image();
background.src = "images/space.png";

// create the bullet controllers for the player and the enemies
const playerBulletController = new BulletController(canvas, 10, "red", true);
const enemyBulletController = new BulletController(canvas, 4, "lightgreen", false);

// create the enemy controller and the player
const enemyController = new EnemyController(
  canvas,
  enemyBulletController,
  playerBulletController
);
const player = new Player(canvas, 3, playerBulletController);

// variables to keep track of whether the game is over and whether the player won
let isGameOver = false;
let didWin = false;

// the main game loop
function game() {
  // check if the game is over
  checkGameOver();

  // draw the background
  ctx.drawImage(background, 0, 0, canvas.width, canvas.height);

  // draw the game over screen if the game is over
  displayGameOver();

  // if the game is not over, draw all the sprites
  if (!isGameOver) {
    enemyController.draw(ctx);
    player.draw(ctx);
    playerBulletController.draw(ctx);
    enemyBulletController.draw(ctx);
  }
}

// draw the game over screen
function displayGameOver() {
  if (isGameOver) {
    let text = didWin ? "you won!!" : "game over...";
    let textOffset = didWin ? 3.5 : 5;

    ctx.fillStyle = "white";
    ctx.font = "70px Arial";
    ctx.fillText(text, canvas.width / textOffset * 2, canvas.height / 2);
  }
}

// check if the game is over
function checkGameOver() {
  if (isGameOver) {
    return;
  }

  // check if the player has been hit by an enemy bullet
  if (enemyBulletController.collideWith(player)) {
    isGameOver = true;
  }

  // check if the player has collided with an enemy
  if (enemyController.collideWith(player)) {
    isGameOver = true;
  }

  // check if the player has won
  if (enemyController.enemyRows.length === 0) {
    didWin = true;
    isGameOver = true;
  }
}

// start the game loop
setInterval(game, 1000 / 60);

