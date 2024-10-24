export default class Bullet {
  // Initialize a new bullet object with the given properties
  constructor(canvas, x, y, velocity, bulletColor) {
    this.canvas = canvas;
    this.x = x;
    this.y = y;
    this.velocity = velocity;
    this.bulletColor = bulletColor;

    this.width = 5;
    this.height = 10;
  }

  // Draw the bullet on the canvas
  draw(ctx) {
    // Update the bullet's position
    this.y -= this.velocity;

    // Set the fill style to the bullet's color
    ctx.fillStyle = this.bulletColor;

    // Draw the bullet on the canvas
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }

  // Check if the bullet collides with a sprite
  collideWith(sprite) {
    // Check if the bullet overlaps with the sprite's bounding box
    return (
      this.x + this.width > sprite.x &&
      this.x < sprite.x + sprite.width &&
      this.y + this.height > sprite.y &&
      this.y < sprite.y + sprite.height
    );
  }
}

