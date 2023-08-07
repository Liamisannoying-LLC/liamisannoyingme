/* 

This is potsu the JS Library made for the www.liamisannoying.me website

This Library contains Advanced collision Detection(Seperating Axis Theorum)
And physics tool's for easy Game Development across multiple Games




-Disclamer- 

!!!!!currently not true!!!!!!
This is very math-y so some of it is stolen from the internet and gpt(if I couldnt find it on the interweb)
this code doesnt effect liam blaster but is with other games so if you dont count it, LiamBlaster is still legitimate.

From websites:
    SAT algorythem
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
        this.v = Velocity;
        this.mass = mass;
        this.density = density;
        this.vertOrigin = hitboxVertices;

        //collision
        this.projectInAxis = function(x, y) {
            let min = 10000000000;
            let max = -10000000000;
            for (let i = 0; i < polygon.vertices.length; i++) {
                let px = polygon.vertices[i].x;
                let py = polygon.vertices[i].y;
                var projection = (px * x + py * y) / (Math.sqrt(x * x + y * y));
                if (projection > max) {
                    max = projection;
                }
                if (projection < min) {
                    min = projection;
                }
            }
            return { min, max };
        };

        //render
        this.renderImage = function() {
            ctx.drawImage(this.image,this.x,this.y,this.width);
        };

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
        };

        this.offset = function(dx, dy) {
            this.x += dx;
            this.y += dy;
            for(let i = 0; i < this.vertOrigin.length; i++){
                this.vertices[i].x = this.vertOrigin[i].x + this.x;
                this.vertices[i].y = this.vertOrigin[i].y + this.y;
            }
        };
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

function verts(origin){
    var vert = [];
    for(var i = 0; i < origin.length; i++){
        vert[i].x = origin[i].x + 
    }
}
//collision detection SAT