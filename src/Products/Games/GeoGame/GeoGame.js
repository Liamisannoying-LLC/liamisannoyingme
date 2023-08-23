var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

var imgx = 0;
var imgy = 0;
var imgw = 1920;
var imgh = 1178;

var MapImg = new Image();
MapImg.onload = function() {
    loop();
};
MapImg.src = "Images/Map.png";

function loop(){
    ctx.clearRect(0, 0, c.clientWidth, c.clientHeight);
    ctx.drawImage(MapImg, imgx, imgy, imgw, imgh);
    window.requestAnimationFrame(loop);
}

function handleScroll() {
    imgx -= window.scrollY;
    imgy -= window.scrollY;
    imgh += window.scrollY;
    imgw += window.scrollY;
}

window.addEventListener('scroll', handleScroll);

window.requestAnimationFrame(loop);

let prevX = null;
let prevY = null;
let isHold = false;

document.addEventListener('mousedown', e => {
    isHold = true;
    prevX = e.clientX;
    prevY = e.clientY;
});

document.addEventListener('mouseup', e => {
    isHold = false;
    prevX = null;
    prevY = null;
});

document.addEventListener('mousemove', e => {
    if (isHold) {
        const deltaX = e.clientX - prevX;
        const deltaY = e.clientY - prevY;

        imgx += deltaX;
        imgy += deltaY;

        prevX = e.clientX;
        prevY = e.clientY;
    }
});