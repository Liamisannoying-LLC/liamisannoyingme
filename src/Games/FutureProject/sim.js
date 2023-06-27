var c = document.getElementById('cvs');
var ctx = c.getContext("2d");

c.height = window.innerHeight - 100;
c.width = window.innerWidth - 100;

let thrust = 0.5;
let mass = 10000;
let acceleration = 0;
let velocity = 0;
let altitude = 0;
let airResistance = 0;
let distanceBetweenCenter;
let gravitationalPull;

const deltaTime = 0.1;
const initialGravitationalForce = 9.8;
const gravitationalConstant = 6.67430 * Math.pow(10, -11);
const earthMass = 5.972 * Math.pow(10, 24);
const earthRadius = 6371000; 

var playery = 400;
var i;
var speed;

function sim(x,y,r,w,h,thrust,mass){
    distanceBetweenCenter = 2900 + (playery + h/2);
    gravitationalPull = (gravitationalConstant * earthMass * mass) / Math.pow(distanceBetweenCenter, 2)
    playery -= thrust / mass;
    playery -= gravitationalPull/10000000000;
    ctx.fillRect(x,y,w,h);
    speed = playery - i;
    console.log(x,y,r,w,h,thrust,mass,thrust/mass,speed);
    
}
setInterval(function (){
    i = playery;
},100);

window.requestAnimationFrame(loop);

function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    sim(200,playery,0,50,50,100,130)
    window.requestAnimationFrame(loop);
}