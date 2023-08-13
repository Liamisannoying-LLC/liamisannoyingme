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
*/




/*
shape vertices:

square = [
  { x: 0, y: 0 },
  { x: 50, y: 0 },
  { x: 50, y: 50 },
  { x: 0, y: 50 }
];

triangle = [
  { x: 25, y: 0 },
  { x: 50, y: 50 },
  { x: 0, y: 50 }
];

hexagon = [
  { x: 30, y: 0 },
  { x: 60, y: 20 },
  { x: 60, y: 50 },
  { x: 30, y: 70 },
  { x: 0, y: 50 },
  { x: 0, y: 20 }
];

octagon = [
  { x: 20, y: 0 },
  { x: 50, y: 0 },
  { x: 70, y: 20 },
  { x: 70, y: 50 },
  { x: 50, y: 70 },
  { x: 20, y: 70 },
  { x: 0, y: 50 },
  { x: 0, y: 20 }
];

pentagon = [
  { x: 25, y: 0 },
  { x: 50, y: 18 },
  { x: 42, y: 50 },
  { x: 8, y: 50 },
  { x: 0, y: 18 }
];

*/
var ctx;

function Canvas(cvs){
    ctx = cvs;
}

class GameObject {
    constructor(hitboxVertices, image, width, height, Velocity, mass, density){
        this.image = image;
        this.w = width;
        this.h = height;
        this.v = Velocity;
        this.mass = mass;
        this.density = density;
        this.vertOrigin = hitboxVertices;
        this.vertices = this.vertOrigin;
        this.edges = buildEdges(this.vertices);

        //collision
        this.projectInAxis = function(x, y) {
            let min = 10000000000;
            let max = -10000000000;
            for (let i = 0; i < this.vertices.length; i++) {
                let px = this.vertices[i].x;
                let py = this.vertices[i].y;
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

        this.testWith = function (otherPolygon) {
            // get all edges
            const edges = [];
            for (let i = 0; i < this.edges.length; i++) {
                edges.push(this.edges[i]);
            }
            for (let i = 0; i < otherPolygon.edges.length; i++) {
                edges.push(otherPolygon.edges[i]);
            }
            // build all axis and project
            for (let i = 0; i < edges.length; i++) {
                // get axis
                const length = Math.sqrt(edges[i].y * edges[i].y + edges[i].x * edges[i].x);
                const axis = {
                    x: -edges[i].y / length,
                    y: edges[i].x / length,
                };
                // project polygon under axis
                const { min: minA, max: maxA } = this.projectInAxis(axis.x, axis.y);
                const { min: minB, max: maxB } = otherPolygon.projectInAxis(axis.x, axis.y);
                if (intervalDistance(minA, maxA, minB, maxB) > 0) {
                    return false;
                }
            }
            return true;
        };

        //render
        this.renderImage = function() {
            if(ctx === null){
                console.error("No CanvasRenderingContext2D applied");
            }else{
            ctx.drawImage(this.image,this.vertices[1].x,this.vertices[1].y,this.width);
            }
        };

        this.render = function(fillColour,borderColour) {
            if(ctx === null){
                console.error("No CanvasRenderingContext2D applied");
            }else{
            ctx.fillStyle = borderColour;
            ctx.lineWidth = 10;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            for(var i = 0; i < this.vertices.length; i++){
            ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
            }
            ctx.closePath();
            ctx.fillStyle = fillColour;
            ctx.stroke();
            ctx.fill();
            }
        };

        this.offset = function(dx, dy) {
            for (let i = 0; i < this.vertices.length; i++) {
                this.vertices[i] = {
                    x: this.vertices[i].x + dx,
                    y: this.vertices[i].y + dy,
                };
            }
        };

        this.goTo = function(x,y) {
            for (let i = 0; i < this.vertices.length; i++) {
                this.vertices[i] = {
                    x: this.vertOrigin[i].x + x,
                    y: this.vertOrigin[i].y + y
                }
            }
        }
    }
}



//SCIENCE

//kpa
var PressureList = [101, 99.5, 97.7, 96.0, 94.2, 92.5, 90.8, 89.1, 87.5, 85.9, 84.3, 81.2, 78.2, 75.3, 72.4, 69.7, 57.2, 46.6, 37.6, 30.1, 23.8, 18.7, 14.5, 11.1]
//meters
var PressureAlt = [0, 152, 305, 457, 610, 762, 914, 1067, 1219, 1372, 1524, 1829, 2134, 2438, 2743, 3048, 4572, 6096, 7620, 9144, 10668, 12192, 13716, 15240]

function AirboyancyForce(volume, altitude){//meters

    let airdensity = airDensity(altitude);//kg/m^3

    return volume * airdensity * 9.8;//bf = V x D * G
}

function BoyantForce(volume, liquidDensity){
    return volume * liquidDensity * 9.8;
}


function IdealGasLaw(altitude,Temp){
    Temp = Temp += 273.15;
    return airDensity(altitude) / (287 * Temp)
}

//(1.2−0.946)×2800
function balloonNetBouyancy(altitude,Temp){
    var volume = 2800;
    var OutsideAir = AirboyancyForce(volume,altitude);

    var IdealGasLaw = IdealGasLaw(altitude, Temp);
    
    return (OutsideAir - IdealGasLaw) * volume;
}


function airDensity(altitude){
    for(let i = 0; i < PressureAlt.length; i++){//finds air pressure of altitude
        if(altitude > PressureAlt[i] && altitude < PressureAlt[i+1]){
            return PressureList[i];
        }
    }
}






//collision detection SAT

function buildEdges(vertices) {
    const edges = [];
    if (vertices.length < 3) {
        console.error("Only polygons supported.");
        return edges;
    }
    for (let i = 0; i < vertices.length; i++) {
        const a = vertices[i];
        let b = vertices[0];
        if (i + 1 < vertices.length) {
            b = vertices[i + 1];
        }
        edges.push({
            x: (b.x - a.x),
            y: (b.y - a.y),
        });
    }
    return edges;
}

function intervalDistance(minA, maxA, minB, maxB) {
    if (minA < minB) {
        return (minB - maxA);
    }
    return (minA - maxB);
}