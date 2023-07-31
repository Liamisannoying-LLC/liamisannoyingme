var ctx;
function Canvas(cvs){
    ctx = cvs;
}

class GameObject {
    constructor(hitboxVertices, image, x, y, width, height, Velocity, mass,density, state){
        this.hitbox = hitboxVertices;
        this.image = image;
        this.y = y;
        this.x = x;
        this.w = width;
        this.h = height;
        this.state = state;
        this.v = Velocity
        this.mass = mass;
        this.density = density;
    }

    draw(){
        if(this.image){
            ctx.drawImage
        }
    }
}

function boyancyForce(object,liquid){
 return liquid.density * object.v * (object.w * object.h * object.w);
}

function dotProduct(vector1, vector2) {
    return vector1.x * vector2.x + vector1.y * vector2.y;
}

function overlap(min1, max1, min2, max2) {
    return !(min1 > max2 || max1 < min2);
}

function getPerpendicularAxes(polygon) {
    const axes = [];
    const numVertices = polygon.length;
    for (let i = 0; i < numVertices; i++) {
        var p1 = polygon[i];
        var p2 = polygon[(i + 1) % numVertices];
        const edge = { x: p2.x - p1.x, y: p2.y - p1.y };
        const normalVector = { x: -edge.y, y: edge.x };
        axes.push(normalVector);
    }
    return axes;
}

function project(polygon, axis) {
    let minProjection = dotProduct(polygon[0], axis);
    let maxProjection = minProjection;

    var numVertices = polygon.length;
    for (let i = 1; i < numVertices; i++) {
        var projection = dotProduct(polygon[i], axis);
        if (projection < minProjection) {
            minProjection = projection;
        } else if (projection > maxProjection) {
            maxProjection = projection;
        }
    }

    return { min: minProjection, max: maxProjection };
}

function CheckCollisions(polygon1, polygon2) {
    const axes = getPerpendicularAxes(polygon1).concat(getPerpendicularAxes(polygon2));

    for (const axis of axes) {
        const proj1 = project(polygon1, axis);
        const proj2 = project(polygon2, axis);

        if (!overlap(proj1.min, proj1.max, proj2.min, proj2.max)) {
            return false;
        }
    }

    return true;
}