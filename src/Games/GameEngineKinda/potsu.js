

class GameObject {
    constructor(hitboxVertices, image, x, y, w, h,canvas){
        this.hitbox = hitboxVertices;
        this.image = image;
        this.x = x;
        this.y = y;
        this.w = w;
        this.h = h;
        ctx = canvas;
    }

    draw(){
        if(this.image){
            ctx.drawImage
        }
    }
}




function CheckCollsions(object1, object2){

checkPolygonOverlap(object1, object2)

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
        const p1 = polygon[i];
        const p2 = polygon[(i + 1) % numVertices];
        const edge = { x: p2.x - p1.x, y: p2.y - p1.y };
        const normalVector = { x: -edge.y, y: edge.x };
        axes.push(normalVector);
    }
    return axes;
}

function project(polygon, axis) {
    let minProjection = dotProduct(polygon[0], axis);
    let maxProjection = minProjection;

    const numVertices = polygon.length;
    for (let i = 1; i < numVertices; i++) {
        const projection = dotProduct(polygon[i], axis);
        if (projection < minProjection) {
            minProjection = projection;
        } else if (projection > maxProjection) {
            maxProjection = projection;
        }
    }

    return { min: minProjection, max: maxProjection };
}

function checkPolygonOverlap(polygon1, polygon2) {
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

}