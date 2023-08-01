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
 //buoyancyForce = (airDensity - densityOfHotAir) * balloonVolume * gravity;
}

function AirDensity(){
    //p = p/rt
}


function