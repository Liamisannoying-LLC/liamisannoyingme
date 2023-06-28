var c = document.getElementById('cvs');
var ctx = c.getContext('2d');

c.width = window.innerWidth - (window.innerWidth / 10);
c.height = window.innerHeight - (window.innerHeight / 10);

var waveCount = 1;
var WavePull = [];
WavePull.push(c.height/2 + 50);


function draw() {

  ctx.clearRect(0, 0, c.width, c.height);

  ctx.fillRect(0,c.height/2,c.width,c.height/2);

  ctx.beginPath();

  for(var i; i < waveCount; i++){
    ctx.moveTo(c.width,c.height/2);
    ctx.lineTo(c.width/5,WavePull[i]);
    ctx.moveTo(c.width/5,WavePull[i]);
  }


  requestAnimationFrame(draw);
}

draw();