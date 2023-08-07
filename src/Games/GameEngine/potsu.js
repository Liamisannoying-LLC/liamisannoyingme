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
    Expanding on SAT algorythem
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
        this.vertices ;

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
            for(let i = 0; i < this.vertOrigin.length; i++){
                this.vertices[i].x = this.vertOrigin[i].x + this.x;
                this.vertices[i].y = this.vertOrigin[i].y + this.y;
            }
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
//collision detection SAT

function CheckCollide(object1, object2) {

    function getMinMax(vertices, axis) {
        let min = Number.POSITIVE_INFINITY;
        let max = Number.NEGATIVE_INFINITY;

        for (let i = 0; i < vertices.length; i++) {
            let projection = vertices[i].x * axis.x + vertices[i].y * axis.y;
            min = Math.min(min, projection);
            max = Math.max(max, projection);
        }

        return { min: min, max: max };
    }

    function axisSeparation(axis) {
        let minMax1 = getMinMax(object1.vertices, axis);
        let minMax2 = getMinMax(object2.vertices, axis);

        return (minMax1.min > minMax2.max || minMax1.max < minMax2.min);
    }

    for (let i = 0; i < object1.vertices.length; i++) {
        let j = (i + 1) % object1.vertices.length;
        let axis = {
            x: object1.vertices[j].y - object1.vertices[i].y,
            y: object1.vertices[i].x - object1.vertices[j].x
        };

        if (axisSeparation(axis)) {
            return false;
        }
    }

    for (let i = 0; i < object2.vertices.length; i++) {
        let j = (i + 1) % object2.vertices.length;
        let axis = {
            x: object2.vertices[j].y - object2.vertices[i].y,
            y: object2.vertices[i].x - object2.vertices[j].x
        };

        if (axisSeparation(axis)) {
            return false;
        }
    }

    return true;
}