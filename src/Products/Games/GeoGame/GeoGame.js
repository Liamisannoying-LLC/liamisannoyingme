var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

var imgx = 0;
var imgy = 0;
var imgw = 4500;
var imgh = 2592;
var scale = 1.0;

//country's hitbox;
var usaBox = makeHitBox();
var usa = new GameObject(usaBox);

var MapImg = new Image();
MapImg.onload = function() {
    loop();
};
MapImg.src = "Images/Map.png";

function loop() {
    ctx.clearRect(0, 0, c.width, c.height);
    usa.render("red", "black")
    ctx.fillStyle = "rgba(182,220,244,255)";
    ctx.fillRect(0, 0, c.width, c.height);

    const centerX = imgx + imgw / 2;
    const centerY = imgy + imgh / 2;

    const scaledWidth = imgw * scale;
    const scaledHeight = imgh * scale;

    ctx.drawImage(MapImg, imgx, imgy, scaledWidth, scaledHeight);
    window.requestAnimationFrame(loop);
}

window.requestAnimationFrame(loop);

let isHold = false;
let initialX = null;
let initialY = null;
let initialImgX = null;
let initialImgY = null;

document.addEventListener('mousedown', e => {
    isHold = true;
    initialX = e.clientX;
    initialY = e.clientY;
    initialImgX = imgx;
    initialImgY = imgy;
});

document.addEventListener('mouseup', e => {
    isHold = false;
    initialX = null;
    initialY = null;
    initialImgX = null;
    initialImgY = null;
});

document.addEventListener('mousemove', e => {
    if (isHold) {
        const deltaX = e.clientX - initialX;
        const deltaY = e.clientY - initialY;

        imgx = initialImgX + (deltaX / scale) * scale;
        imgy = initialImgY + (deltaY / scale) * scale;
    }
});

document.addEventListener('wheel', e => {
    const zoomFactor = e.deltaY > 0 ? 1 / 1.1 : 1.1;
    const newScale = scale * zoomFactor;

    if (newScale > 3.0) {
        scale = 3.0;
    } else if (newScale < 0.1) {
        scale = 0.1;
    } else {
        const cursorX = e.clientX - c.getBoundingClientRect().left;
        const cursorY = e.clientY - c.getBoundingClientRect().top;

        const deltaX = cursorX - imgx;
        const deltaY = cursorY - imgy;

        imgx = cursorX - (deltaX * (newScale / scale));
        imgy = cursorY - (deltaY * (newScale / scale));

        scale = newScale;
    }
});