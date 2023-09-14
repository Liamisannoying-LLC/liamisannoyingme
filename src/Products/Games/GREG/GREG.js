var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

c.width = window.innerWidth * 0.75;
c.height = window.innerHeight * 0.75;

var teminalVelocity = 15;
var speed = 1;
var friction = 0.95;

var PlayerHitbox = [
    { x: 0, y: 0 },
    { x: 50, y: 0 },
    { x: 50, y: 50 },
    { x: 0, y: 50 }
  ];

var room1 = [1,1,1,1,1,1,1,1,
             1,0,0,0,0,0,0,2,
             1,0,0,0,0,0,0,1,     
             1,1,1,1,0,0,0,1,         
             0,0,0,2,0,0,0,1,
             1,1,1,1,0,0,0,1,
             3,0,0,0,0,0,0,1,     
             1,1,1,1,1,1,1,1,                           
            ];
  
var Player = new GameObject(PlayerHitbox, null, null, null, {x:0, y:0}, 0, 0,"player");

Player.goTo(c.width/2, c.height/2);

loop();

var lastLoop = new Date();
function loop(){
    ctx.clearRect(0,0,c.width,c.height);
    var thisLoop = new Date();
    var fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;

    //moving
    Player.Velocity.x = Player.Velocity.x * friction;
    Player.Velocity.y = Player.Velocity.y * friction;
    WorldOfset(Player.Velocity.x, Player.Velocity.y);

    Player.render("red", "black");

    window.requestAnimationFrame(loop);
}

function buildroom(room){
  var objects = [];
  for(var i = 0; i < room.length; i++){
    switch(room[i]){
      case 1:
        object[i] = new GameObject([{ x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }],
          null, null, null, null, null, null,"wall");
        break;
      case 2:
        object[i] = new GameObject([{ x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }],
          null, null, null, null, null, null,"door");
        break;
      case 3:
        object[i] = new GameObject([{ x: 0, y: 0 },
          { x: 50, y: 0 },
          { x: 50, y: 50 },
          { x: 0, y: 50 }],
          null, null, null, null, null, null,"spawn");
        break;
    }
  }
  return objects;
}

function WorldOfset(a, vX, vY){
  for(var i = 0; i < a.length; i++){
    a[i].offset(vx,vy);
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
