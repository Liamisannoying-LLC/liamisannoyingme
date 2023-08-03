/*
This is very math-y so a lot of it is stolen from the internet and gpt(if I couldnt find it on the interweb)
this code doesnt effect liam blaster but is with other games so if you dont count it, LiamBlasters Still legitimate.
*/

var ctx;
function Canvas(cvs){
    ctx = cvs;
}

class GameObject {
    constructor(hitboxVertices, image, x, y, width, height, Velocity, mass){
        this.image = image;
        this.y = y;
        this.x = x;
        this.w = width;
        this.h = height;
        this.state = state;
        this.v = Velocity
        this.mass = mass;
        this.density = density;

        //collision
        this.hitbox = hitboxVertices;
        this.edges = buildEdges(this.hitbox);
        this.projectInAxis = function(x, y) {}
        this.testWith = function (otherPolygon) {} 
        this.renderImage = function() {
            ctx.drawImage(this.image,this.x,this.y,thsi.width);
        }

        this.render = function(fillColour,borderColour) {
            ctx.fillStyle = borderColour;
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            for(var i; i < this.vertices.length; i++){
            ctx.lineTo(this.vertices[i].x, this.vertices[i].y);
            }
            ctx.closePath();
            ctx.fillStyle = fillColour;
            ctx.fill();
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


const Gravity = 9.8;


function boyancyForce(airDensity, hotAirTemp, pressureInsideBalloon, balloonRadius) {
    const molarMassAir = 0.029;
    const gasConstant = 8.314;
    //https://www.omnicalculator.com/physics/air-density

    // Calculate hot air density using the Ideal Gas Law
    const hotAirDensity = (pressureInsideBalloon * molarMassAir) / (gasConstant * hotAirTemp);

    // Calculate the volume of the hot air balloon (assuming spherical shape)
    const balloonVolume = (4 / 3) * Math.PI * Math.pow(balloonRadius, 3);

    // Calculate the buoyant force
    const buoyantForce = (airDensity - hotAirDensity) * balloonVolume * Gravity;

    return buoyantForce;
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




