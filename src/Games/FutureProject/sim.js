var c = document.getElementById('cvs');
var ctx = c.getContext("2d");

c.height = window.innerHeight - 150;
c.width = window.innerWidth - 650;

var playerY = 0;
var zoom = 1;
var thrustSlider = document.getElementById('thrust');
var fuelSlider = document.getElementById('fuel');

var thrust = parseFloat(thrustSlider.value);
var mass = 10000; // Initial mass
var fuel = parseFloat(fuelSlider.value);

const deltaTime = 0.1;
const initialGravitationalForce = 9.8;
const gravitationalConstant = 6.67430 * Math.pow(10, -11);
const earthMass = 5.972 * Math.pow(10, 24);
const earthRadius = 6371000;

window.addEventListener("wheel", event => {
    var delta = Math.sign(event.deltaY);
    zoom += delta;
    console.info(delta);
});

function sim() {
    if(fuel > 0){
    playerY -= thrust / mass;
    }else{

    }
    ctx.fillRect(c.width/2 + -zoom, c.height/2, 50 * -zoom, 50 * -zoom);
    ctx.fillText("Height:" + playerY, c.width/2,50)
    //console.log(x, y, r, w, h, thrust, mass, thrust / mass);
}

window.requestAnimationFrame(loop);

function loop() {
  ctx.clearRect(0, 0, c.width, c.height);
  thrust = parseFloat(thrustSlider.value);
  fuel = parseFloat(fuelSlider.value);

  // Calculate the mass based on fuel level
  mass = 10000 + (fuel * 100); // Adjust the mass calculation as desired

  sim();
    console.log(fuel)
  if (fuel > 0) {
    fuel -= thrust * mass; // Adjust the fuel consumption rate as desired
  }else{
    playerY += gravitationalConstant;
  }

  window.requestAnimationFrame(loop);
}