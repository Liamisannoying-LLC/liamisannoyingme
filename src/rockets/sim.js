var c = document.getElementById('cvs');
var ctx = c.getContext("2d");

function sim(x,y,r,w,h,thrust,mass){
    ctx.fillRect(x,y + (thrust / mass),w,h);
}
