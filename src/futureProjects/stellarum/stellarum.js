var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - (window.innerWidth / 10);
canvas.height = window.innerHeight - (window.innerHeight / 10);

let waves = [];
let pointCount = 1000;

function drawWave(length,amplitude){
  ctx.fillStyle = "blue";
  ctx.beginPath();
  ctx.moveTo(canvas.width, 50);

  for (var i = 0; i < pointCount; i++) {
    var x = canvas.width - (canvas.width / (pointCount - 1)) * i;
    var y = (canvas.height - 100);
    ctx.lineTo(x, y);
    ctx.moveTo(x, y);
    console.log(x, y);
  }

  ctx.stroke();
}
drawWave(10,10);