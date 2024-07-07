// Get the canvas element
const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

// Set up game constants
const GAME_WIDTH = 800;
const GAME_HEIGHT = 600;
const PLAYER_SPEED = 5;
const ENEMY_SPEED = 2;
const BULLET_SPEED = 10;

// Load game assets
const playerImage = new Image();
playerImage.src = 'player.png';
const enemyImage = new Image();
enemyImage.src = 'enemy.png';
const bulletImage = new Image();
bulletImage.src = 'bullet.png';

// Create game objects and initialize game state
let playerX = GAME_WIDTH / 2;
let playerY = GAME_HEIGHT - 50;
let enemies = [];
let bullets = [];

// Update game state and render objects
function update() {
  // Clear the canvas
  ctx.clearRect(0, 0, GAME_WIDTH, GAME_HEIGHT);

  // Update player movement
  if (keys.left) {
    playerX -= PLAYER_SPEED;
  }
  if (keys.right) {
    playerX += PLAYER_SPEED;
  }

  // Update enemy movement and shooting
  enemies.forEach((enemy, index) => {
    enemy.x += ENEMY_SPEED;
    if (enemy.x > GAME_WIDTH) {
      enemy.x = 0;
    }
    if (enemy.x < playerX && enemy.x + enemy.width > playerX && enemy.y < playerY && enemy.y + enemy.height > playerY) {
      // Player hit by enemy
      // Add game over logic here
    }
    if (Math.abs(enemy.x - playerX) < 300) {
      // Create bullet and add it to bullets array
      const bullet = {
        x: enemy.x + enemy.width / 2,
        y: enemy.y,
        speed: BULLET_SPEED,
        direction: 'up'
      };
      bullets.push(bullet);
    }
  });
  
  // Update bullet movement
  bullets.forEach((bullet, index) => {
    switch (bullet.direction) {
      case 'up':
        bullet.y -= bullet.speed;
        break;
      case 'down':
        bullet.y += bullet.speed;
        break;
      case 'left':
        bullet.x -= bullet.speed;
        break;
      case 'right':
        bullet.x += bullet.speed;
        break;
    }
    if (bullet.direction === 'up' && bullet.y < 0) {
        bullet.direction = 'down';
      } else if (bullet.direction === 'down' && bullet.y > GAME_HEIGHT) {
        bullet.direction = 'up';
      } else if (bullet.direction === 'left' && bullet.x < 0) {
        bullet.direction = 'right';
      } else if (bullet.direction === 'right' && bullet.x > GAME_WIDTH) {
        bullet.direction = 'left';
      }
      if (bullet.direction === 'up' || bullet.direction === 'down') {
        bullet.x = enemy.x + enemy.width / 2;
      } else {
        bullet.y = enemy.y + enemy.height / 2;
      }
      // Check for bullet collision with player
      if (bullet.x > playerX && bullet.x < playerX + 50 && bullet.y > playerY && bullet.y < playerY + 50) {
        // Player hit by bullet
        // Add game over logic here
      }
      // Render bullet
      ctx.drawImage(bulletImage, bullet.x, bullet.y, 10, 10);
    });
  
    // Render player
    ctx.drawImage(playerImage, playerX, playerY, 50, 50);
  
    // Render enemies
    enemies.forEach((enemy, index) => {
      ctx.drawImage(enemyImage, enemy.x, enemy.y, 50, 50);
    });
  
    // Request next frame
    requestAnimationFrame(update);
  }
  
  // Handle keyboard input
  let keys = {};
  document.addEventListener('keydown', (event) => {
    keys[event.key] = true;
  });
  document.addEventListener('keyup', (event) => {
    keys[event.key] = false;
  });
  
  // Start the game loop
update();