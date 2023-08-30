var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

c.width = window.innerWidth * 0.75;
c.height = window.innerHeight * 0.75;

var teminalVelocity = 15;
var speed = 1;
var friction = 0.1;

var PlayerHitbox = [
    { x: 0, y: 0 },
    { x: 50, y: 0 },
    { x: 50, y: 50 },
    { x: 0, y: 50 }
  ];
  
var Player = new GameObject(PlayerHitbox, null, null, null, {x:0, y:0}, 0, 0);

Player.goTo(c.width/2, c.height/2);

loop();

var lastLoop = new Date();
function loop(){
    ctx.clearRect(0,0,c.width,c.height);
    var thisLoop = new Date();
    var fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;

    Player.render("red", "black");
    ctx.fillStyle = "blue";

    window.requestAnimationFrame(loop);
}

SetLoopSpeed(physicsLoop, 10);

function physicsLoop(){
  Player.offset(Player.Velocity.x, Player.Velocity.y);

  if(Player.Velocity.x > 0.001){
  Player.Velocity.x -= friction;
  }else if(Player.Velocity.x < 0.001){
    Player.Velocity.x -= friction;
  }

  if(Player.Velocity.y > 0.001){
    Player.Velocity.y -= friction;
  }else if(Player.Velocity.y < -0.001){
    Player.Velocity.y += friction;
  }

  if(Player.Velocity.x > teminalVelocity){
    Player.Velocity.x = teminalVelocity;
  }else if(Player.Velocity.x < -teminalVelocity){
    Player.Velocity.x = -teminalVelocity;
  }

  if(Player.Velocity.y > teminalVelocity){
    Player.Velocity.y = teminalVelocity;
  }else if(Player.Velocity.y < -teminalVelocity){
    Player.Velocity.y = -teminalVelocity;
  }

}

function move(event){
  if(event.key === "w" && Player.Velocity.y < teminalVelocity){
    Player.Velocity.y -= speed;
  }
  if(event.key === "s" && Player.Velocity.y > -teminalVelocity){
    Player.Velocity.y += speed;
  }
  if(event.key === "a" && Player.Velocity.x > -teminalVelocity){
    Player.Velocity.x -= speed;
  }
  if(event.key === "d" && Player.Velocity.x < teminalVelocity){
    Player.Velocity.x += speed;
  }
}


document.onkeydown = move;