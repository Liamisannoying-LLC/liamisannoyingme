/* 

This is potsu the JS Library made for the www.liamisannoying.me website

This Library contains Advanced collision Detection(Seperating Axis Theorum)
And physics tool's for easy Game Development across multiple Games




-Disclamer- 

!!!!!currently not true!!!!!!
This is very math-y so some of it is stolen from the internet and gpt(if I couldnt find it on the interweb)
this code doesnt effect liam blaster but is with other games so if you dont count it, LiamBlaster is still legitimate.

From websites:

Gpt:

*/

var ctx;

function Canvas(cvs){
    ctx = cvs;
}

class GameObject {
    constructor(hitboxVertices, image, x, y, width, height, Velocity, mass, density){
        this.image = image;
        this.y = y;
        this.x = x;
        this.w = width;
        this.h = height;
        this.v = Velocity
        this.mass = mass;
        this.density = density;
        this.vertices = hitboxVertices;

        //render
        this.renderImage = function() {
            ctx.drawImage(this.image,this.x,this.y,this.width);
        }

        this.render = function(fillColour,borderColour) {
            ctx.fillStyle = borderColour;
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            for(var i = 0; i < this.vertices.length; i++){
            ctx.lineTo(this.vertices[i].x + this.x, this.vertices[i].y + this.y);
            }
            ctx.closePath();
            ctx.fillStyle = fillColour;
            ctx.stroke();
            ctx.fill();
        }

        this.offset = function(dx, dy) {
            this.x += dx;
            this.y += dy;
        }
    }
}

//kpa
var PressureList = [101, 99.5, 97.7, 96.0, 94.2, 92.5, 90.8, 89.1, 87.5, 85.9, 84.3, 81.2, 78.2, 75.3, 72.4, 69.7, 57.2, 46.6, 37.6, 30.1, 23.8, 18.7, 14.5, 11.1]
//meters
var PressureAlt = [0, 152, 305, 457, 610, 762, 914, 1067, 1219, 1372, 1524, 1829, 2134, 2438, 2743, 3048, 4572, 6096, 7620, 9144, 10668, 12192, 13716, 15240]

function boyancyForce(balloonRadius, altitude){//meters
    let balloonVolume = 4/3 * Math.PI * Math.pow(balloonRadius, 3);//meters^3
    let airDensity;//kg/m^3

    for(let i = 0; i < PressureAlt.length; i++){//finds air pressure of altitude
        if(altitude > PressureAlt[i] && altitude < PressureAlt[i+1]){
            airDensity = PressureList[i];
        }
    }

    return balloonVolume * airDensity * 9.8;//bf = V x D * G
}


//collision detection its Kinda SAT

function CheckCollide(object, object2){
    var objectMin = { x:10000000000, y:10000000000};
    var objectMax = { x:-10000000000, y:-10000000000};
    var object2Min = { x:10000000000, y:10000000000};
    var object2Max = { x:-10000000000, y:-10000000000};

    for (var i = 0; i < object.vertices.length; i++) {
        var vertex = object.vertices[i];
        objectMin.x = Math.min(objectMin.x, vertex.x);
        objectMax.x = Math.max(objectMax.x, vertex.x);
        objectMin.y = Math.min(objectMin.y, vertex.y);
        objectMax.y = Math.max(objectMax.y, vertex.y);
    }

    for (var i = 0; i < object2.vertices.length; i++) {
        var vertex = object2.vertices[i];
        object2Min.x = Math.min(object2Min.x, vertex.x);
        object2Max.x = Math.max(object2Max.x, vertex.x);
        object2Min.y = Math.min(object2Min.y, vertex.y);
        object2Max.y = Math.max(object2Max.y, vertex.y);
    }

    if (
        objectMax.x >= object2Min.x &&
        objectMin.x <= object2Max.x &&
        objectMax.y >= object2Min.y &&
        objectMin.y <= object2Max.y
    ) {
        return true;
    } else {
        return false;
    }
}