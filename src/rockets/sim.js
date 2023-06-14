var c = document.getElementById('cvs');
var ctx = c.getContext("2d");

let thrust = 0;
let mass = 10000;
let acceleration = 0;
let velocity = 0;
let altitude = 0;
let airResistance = 0;

const deltaTime = 0.1;
const initialGravitationalForce = 9.8;
const gravitationalConstant = 6.67430 * Math.pow(10, -11);
const earthMass = 5.972 * Math.pow(10, 24);
const earthRadius = 6371000; 

var playery = 400;

function sim(x,y,r,w,h,thrust,mass){
    playery -= thrust / mass;
    ctx.fillRect(x,y,w,h);
    console.log(x,y,r,w,h,thrust,mass,thrust/mass)
}

window.requestAnimationFrame(loop);

function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    sim(200,playery,0,50,50,100,130)
    window.requestAnimationFrame(loop);
}