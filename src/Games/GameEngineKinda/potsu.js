/* 

This is potsu the JS Library made for the www.liamisannoying.me website

This Library contains Advanced collision Detection(Seperating Axis Theorum)
And physics tool's for easy Game Development across multiple Games




-Disclamer-
This is very math-y so a lot of it is stolen from the internet and gpt(if I couldnt find it on the interweb)
this code doesnt effect liam blaster but is with other games so if you dont count it, LiamBlaster is still legitimate.

From websites:
    Seperating Axis Theorum
    Rendering objects

Gpt:
    bouyancy for Hot air balloons(not very many studies on that, exspecialy in js)
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

        //collision
        this.vertices = hitboxVertices;
        this.edges = buildEdges(this.vertices);
        this.projectInAxis = function(x, y) {}
        this.testWith = function (otherPolygon) {} 
        this.renderImage = function() {
            ctx.drawImage(this.image,this.x,this.y,thsi.width);
        }

        this.render = function(fillColour,borderColour) {
            console.log("drawnaedaefa");
            ctx.fillStyle = borderColour;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            for(var i = 0; i < this.vertices.length; i++){
            ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
            console.log("drawn");
            }
            ctx.closePath();
            ctx.fillStyle = fillColour;
            ctx.fill();
            console.log("drawns");
        }

        this.offset = function(dx, dy) {
            this.x += dx;
            this.y += dy;
        }

        this.testCollide = function (otherPolygon) {
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


//SATTTTTTTTTTTTTTTTT stolen from the interweb

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




