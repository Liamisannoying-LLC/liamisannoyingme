export default class Enemy {
  // Constructor function that sets the initial position and size of the enemy
  constructor(x, y, imageNumber) {
    this.x = x;
    this.y = y;
    this.width = 44; // Width of the enemy image
    this.height = 32; // Height of the enemy image

    this.image = new Image(); // Create an image object
    this.image.src = `images/enemy${imageNumber}.png`; // Set the source of the image
  }

  // Draw the enemy image on the canvas
  draw(ctx) {
    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
  }

  // Move the enemy horizontally and vertically based on the velocity
  move(xVelocity, yVelocity) {
    this.x += xVelocity;
    this.y += yVelocity;
  }

  // Check if the enemy and a sprite are colliding
  collideWith(sprite) {
    if (
      this.x + this.width > sprite.x &&
      this.x < sprite.x + sprite.width &&
      this.y + this.height > sprite.y &&
      this.y < sprite.y + sprite.height
    ) {
      return true;
    } else {
      return false;
    }
  }
}
