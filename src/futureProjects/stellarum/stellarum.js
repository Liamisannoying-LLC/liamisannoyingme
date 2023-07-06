var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - (window.innerWidth / 10);
canvas.height = window.innerHeight - (window.innerHeight / 10);

let waves = [];

function createNewWave() {
  const wave = {
    x: canvas.width + 50,
    amplitude: 100,
    length: 200,
    speed: 2,
  };

  waves.push(wave);
}

function drawWave() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = 0; i < waves.length; i++) {
    const wave = waves[i];

    ctx.beginPath();

    for (let x = 0; x < canvas.width; x++) {
      const waveHeight =
        Math.pow(Math.E, -Math.pow(x - wave.x, 2) / wave.length) *
        wave.amplitude;

      if (x === 0) {
        ctx.moveTo(x, canvas.height / 2 + waveHeight);
      } else {
        ctx.lineTo(x, canvas.height / 2 + waveHeight);
      }

    }

    ctx.strokeStyle = "blue";
    ctx.lineWidth = 2;
    ctx.stroke();

    wave.x -= wave.speed;

    wave.amplitude *= 0.99;
    wave.length *= 0.99;

    if (wave.x < -canvas.width) {
      waves.splice(i, 1);
      i--;
    }
  }

  requestAnimationFrame(drawWave);
}

drawWave();