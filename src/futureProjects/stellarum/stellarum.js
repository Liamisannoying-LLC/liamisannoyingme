var c = document.getElementById('cvs');
var ctx = c.getContext('2d');

c.width = window.innerWidth - (window.innerWidth / 10);
c.height = window.innerHeight - (window.innerHeight / 10);

let time = 0;
const waveSpeed = 0.02; // Controls the speed of the wave
const waveAmplitude = 50; // Controls the height of the wave

function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, c.width, c.height);

  // Set the style for the wave
  ctx.strokeStyle = 'blue';
  ctx.lineWidth = 2;

  // Start drawing the wave
  ctx.beginPath();

  // Draw each point in the wave
  for (let x = 0; x <= c.width; x++) {
    const y = waveAmplitude * Math.sin(x * waveSpeed + time);
    ctx.lineTo(x, y + c.height / 2);
  }

  // Finish drawing the wave
  ctx.stroke();

  // Update the time for the next frame
  time += waveSpeed;

  // Request the next animation frame
  requestAnimationFrame(draw);
}

// Start the animation loop
draw();