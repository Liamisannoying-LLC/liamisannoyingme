var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - (window.innerWidth / 10);
canvas.height = window.innerHeight - (window.innerHeight / 10);

// Wave object
function Wave(x, y, amplitude, wavelength, speed) {
    this.x = x; // x position
    this.y = y; // y position
    this.amplitude = amplitude; // wave amplitude
    this.wavelength = wavelength; // wave wavelength
    this.speed = speed; // wave speed
  }
  
  // Array to store waves
  const waves = [];
  
  // Function to generate waves
  function generateWaves() {
    // Add a new wave to the array with random properties
    const x = canvas.width / 2;
    const y = canvas.height;
    const amplitude = Math.random() * 100 + 50;
    const wavelength = Math.random() * 200 + 100;
    const speed = Math.random() * 2 + 1;
  
    waves.push(new Wave(x, y, amplitude, wavelength, speed));
  }
  
  // Function to update wave positions
  function updateWaves() {
    for (let i = 0; i < waves.length; i++) {
      const wave = waves[i];
      wave.x -= wave.speed;
  
      // Remove waves that are off the canvas
      if (wave.x - wave.wavelength / 2 > canvas.width) {
        waves.splice(i, 1);
        i--;
      }
    }
  }
  
  // Function to render waves
  function renderWaves() {
    for (let i = 0; i < waves.length; i++) {
      const wave = waves[i];
  
      // Draw waves as curved shapes
      ctx.beginPath();
      ctx.moveTo(wave.x - wave.wavelength / 2, wave.y);
      for (let x = wave.x - wave.wavelength / 2; x <= wave.x + wave.wavelength / 2; x++) {
        const y = wave.y - wave.amplitude * Math.sin((x - wave.x) / wave.wavelength * 2 * Math.PI);
        ctx.lineTo(x, y);
      }
      ctx.lineTo(wave.x + wave.wavelength / 2, wave.y);
      ctx.closePath();
  
      // Customize wave appearance
      ctx.fillStyle = "blue";
      ctx.fill();
    }
  }