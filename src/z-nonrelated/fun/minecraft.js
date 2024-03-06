const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const tileSize = 20;
const worldWidth = 20;
const worldHeight = 15;
const world = [];

// Initialize the world
for (let y = 0; y < worldHeight; y++) {
    world[y] = [];
    for (let x = 0; x < worldWidth; x++) {
        world[y][x] = Math.random() < 0.1 ? 1 : 0; // 10% chance of block
    }
}

function drawWorld() {
    for (let y = 0; y < worldHeight; y++) {
        for (let x = 0; x < worldWidth; x++) {
            if (world[y][x] === 1) {
                ctx.fillStyle = 'brown';
                ctx.fillRect(x * tileSize, y * tileSize, tileSize, tileSize);
            }
        }
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clearCanvas();
    drawWorld();
}

// Initial draw
update();

// Optional: Add keyboard controls for interaction
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowLeft') {
        // Handle left arrow key
    } else if (key === 'ArrowRight') {
        // Handle right arrow key
    } else if (key === 'ArrowUp') {
        // Handle up arrow key
    } else if (key === 'ArrowDown') {
        // Handle down arrow key
    }
});
