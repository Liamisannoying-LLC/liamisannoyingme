/*
(indented like python if its indented it in the same topic)
Game concepts:

La Montgolfiere (hot air baloon):

    Could have a mode where you are in a race against other hot air balloon pilots:

        get to the end goal
        find the height of the wind and make sure its in the right direction. 
        avoid dangerous weather(or not and risk it for more speed)

    Adventure mode:

        find things like in the sky, science things     
        
    Find new species of birds:

        catch birds(mabyeeeeeee)
        find their nest and colony
        name them


    Survive game:

        la montgolfiere is breaking down and you need parts to fix it as your flying



    Extras:

        find parts for a new balloons(one speedy, one with a fast altitude gain ,and one that can move more presices)
        Upgrade indivdual parts of balloon e.g. different burner for faster Height gain, Balloon More Heat resistant

    Dificulty:

        Its a cozy game not a difficult one
    
    Balloon Features:

        Braking?
        Balloon overheat and pop when on max thrust for to long
        Balloon pops when gets to high;

    Ui:

        Very visual e.g. not lots of numbers(mabye option to turn them on)
        arrow pointing in drection the balloon is moving
    
    Art Style:
        idk something like alto's oddesy
*/

var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

c.width = window.innerWidth * 0.75;
c.height = window.innerHeight * 0.75;

Canvas(ctx);

//vertices
balloonVerts = [
        { x: 20, y: 0 },
        { x: 50, y: 0 },
        { x: 70, y: 20 },
        { x: 70, y: 50 },
        { x: 50, y: 70 },
        { x: 20, y: 70 },
        { x: 0, y: 50 },
        { x: 0, y: 20 }
];

//images
var balloonImg = new Image();
balloonImg.src = "Images/balloon.png";

//making objects
var balloon = new GameObject(balloonVerts,balloonImg,c.width/6,c.height/1.5,{x:0,y:0},100,1);

//vars
var balloonTemp = 0;

balloon.goTo(500,500);
function loop(){
    if(balloon.Velocity.y > 3.8){
        balloon.Velocity.y = 3.8;
    }
    balloon.offset(balloon.Velocity.x, balloon.Velocity.y);


    ctx.clearRect(0,0,c.width,c.height);
    balloon.renderImage();

    window.requestAnimationFrame(loop);
}
loop();

SetLoopSpeed(physicsLoop, 1000);

function physicsLoop(){
    console.log(balloonTemp);
    balloon.Velocity.y += 9.8;
    balloonTemp -= 0.2;

}


function move(event){
if(event.key === "w"){
    balloonTemp += 0.5;

    balloon.Velocity.y -= balloonNetBouyancy(balloon.y, balloonTemp)/10000;
}
if(event.key === "s"){
    balloonTemp -= 0.5;
    console.log(balloon.y);
    balloon.Velocity.y -= balloonNetBouyancy(balloon.y, balloonTemp)/10000;
}
}

document.onkeydown = move;