var c = document.getElementById('cvs');
var ctx = c.getContext("2d");

var playery = 400;

function sim(x,y,r,w,h,thrust,mass){
    playery -= thrust / mass;
    y = playery;
    ctx.fillRect(x,y,w,h);
    console.log(x,y,r,w,h,thrust,mass,thrust/mass)
}

window.requestAnimationFrame(loop);

function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    sim(200,playery,0,50,50,100,130)
    window.requestAnimationFrame(loop);
}