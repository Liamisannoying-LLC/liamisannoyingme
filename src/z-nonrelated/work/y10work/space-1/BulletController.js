import Bullet from "./Bullet.js";

// This class manages bullets for the game
export default class BulletController {
  // The bullets currently on the screen
  bullets = [];
  // The time left until the next bullet can be fired
  timeTillNextBulletAllowed = 0;

  constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled) {
    // Set up the bullet controller
    this.canvas = canvas;
    this.maxBulletsAtATime = 50;
    this.bulletColor = bulletColor;
    this.soundEnabled = soundEnabled;

    this.shootSound = new Audio("sounds/shoot.wav");
    this.shootSound.volume = 0.1;
  }

  // Draw all currently active bullets on the canvas
  draw(ctx) {
    // Filter out bullets that are off the screen
    this.bullets = this.bullets.filter(
      (bullet) => bullet.y + bullet.width > 0 && bullet.y <= this.canvas.height
    );

    // Draw each bullet
    this.bullets.forEach((bullet) => bullet.draw(ctx));

    // If time until next bullet is up, reset the timer
    if (this.timeTillNextBulletAllowed > 0) {
      this.timeTillNextBulletAllowed--;
    }
  }

  // Check if any bullets are colliding with a sprite
  collideWith(sprite) {
    // Find the index of the first bullet that collides with the sprite
    const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) =>
      bullet.collideWith(sprite)
    );

    // If a bullet collided with the sprite, remove it
    if (bulletThatHitSpriteIndex >= 0) {
      this.bullets.splice(bulletThatHitSpriteIndex, 1);
      return true;
    }

    return false;
  }

  // Create a new bullet and add it to the list of bullets
  shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
    // If enough time has passed and there is space for another bullet, create a new one
    if (
      this.timeTillNextBulletAllowed <= 0 &&
      this.bullets.length < this.maxBulletsAtATime
    ) {
      const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
      this.bullets.push(bullet);

      // Play the shooting sound if it is enabled
      if (this.soundEnabled) {
        this.shootSound.currentTime = 0;
        this.shootSound.play();
      }

      // Set the time until the next bullet can be fired
      this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
    }
  }
}

