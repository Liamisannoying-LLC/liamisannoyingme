export default class Player {
  // do we need to move right, left, or shoot?
  rightPressed = false;
  leftPressed = false;
  shootPressed = false;

  constructor(canvas, velocity, bulletController) {
    this.canvas = canvas;
    this.velocity = velocity;
    this.bulletController = bulletController;

    // start the player in the middle of the canvas
    this.x = this.canvas.width / 2;
    this.y = this.canvas.height - 75;
    this.width = 50;
    this.height = 48;
    this.image = new Image();
    this.image.src = "images/player.png";

    // set up the event listeners
    document.addEventListener("keydown", this.keydown);
    document.addEventListener("keyup", this.keyup);
  }

  draw(ctx) {
    // if the player wants to shoot, add a bullet to the bulletController
    if (this.shootPressed) {
      this.bulletController.shoot(this.x + this.width / 2, this.y, 4, 10);
    }

    // move the player and make sure they don't run into the walls
    this.move();
    this.collideWithWalls();

    // draw the player on the canvas
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  collideWithWalls() {
    // if the player goes off the left edge of the canvas
    if (this.x < 0) {
      this.x = 0;
    }

    // if the player goes off the right edge of the canvas
    if (this.x > this.canvas.width - this.width) {
      this.x = this.canvas.width - this.width;
    }
  }

  move() {
    // move the player right
    if (this.rightPressed) {
      this.x += this.velocity;
    }
    // move the player left
    else if (this.leftPressed) {
      this.x += -this.velocity;
    }
  }

  keydown = (event) => {
    // if the right arrow key is pressed, start moving right
    if (event.code == "ArrowRight") {
      this.rightPressed = true;
    }

    // if the left arrow key is pressed, start moving left
    if (event.code == "ArrowLeft") {
      this.leftPressed = true;
    }

    // if the space bar is pressed, start shooting
    if (event.code == "Space") {
      this.shootPressed = true;
    }
  };

  keyup = (event) => {
    // if the right arrow key is released, stop moving right
    if (event.code == "ArrowRight") {
      this.rightPressed = false;
    }

    // if the left arrow key is released, stop moving left
    if (event.code == "ArrowLeft") {
      this.leftPressed = false;
    }

    // if the space bar is released, stop shooting
    if (event.code == "Space") {
      this.shootPressed = false;
    }
  };
}

