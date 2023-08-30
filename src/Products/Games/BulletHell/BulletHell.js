var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

c.width = window.innerWidth * 0.75;
c.height = window.innerHeight * 0.75;

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
    var thisLoop = new Date();
    var fps = 1000 / (thisLoop - lastLoop);
    lastLoop = thisLoop;

    Player.render("red", "black");


    window.requestAnimationFrame(loop);
}