var c = document.getElementById('cvs');
var ctx = c.getContext('2d');

c.width = window.innerWidth - (window.innerWidth / 10);
c.height = window.innerHeight - (window.innerHeight / 10);

const pointCount = 500;
const points = [];

// Initialize points with default y-levels
for (let i = 0; i < pointCount; i++) {
    points.push({
        x: i * (c.width / (pointCount - 1)),
        y: c.height / 2, // Default y-level in the middle of the canvas
        isSpecified: false
    });
}

var randomWave = Math.floor(Math.random()  * 30);

points[randomWave].y = c.height * -7;
points[250].y = c.height * -8;

points[randomWave].isSpecified = true;
points[250].isSpecified = true;

function update(){
    for (let k = 0; k < pointCount; k++) {
        const previousPoint = points[(k === 0) ? pointCount - 1 : k - 1];
        const nextPoint = points[(k === pointCount - 1) ? 0 : k + 1];
        points[k].y = (previousPoint.y + points[k].y + nextPoint.y) / 3;

        points[k].x -= 1;

        if (points[k].x <= 0) {
            points[k].x = c.width;
            points[k].y = c.height / 2;
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, c.width, c.height);

    update();

    ctx.beginPath();
    ctx.moveTo(points[0].x, points[0].y);

    for (let i = 1; i < pointCount; i++) {
        ctx.lineTo(points[i].x, points[i].y);
        if (i === pointCount - 1) {
            ctx.stroke();
            ctx.beginPath();
            ctx.moveTo(points[i].x, points[i].y);
        }
    }


    requestAnimationFrame(draw);
}
draw();
