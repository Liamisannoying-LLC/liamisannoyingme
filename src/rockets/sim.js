var c = document.getElementById('cvs');
var ctx = c.getContext("2d");

function sim(x,y,r,w,h,thrust,mass){
    ctx.fillRect(x,y + (thrust / mass),w,h);
}

window.requestAnimationFrame(loop);

function loop() {//... its in the name
    ctx.clearRect(0, 0, c.width, c.height);//clears screen
    sim(200,400,0,50,50,100,130)
    window.requestAnimationFrame(loop);//makes it a loop
}