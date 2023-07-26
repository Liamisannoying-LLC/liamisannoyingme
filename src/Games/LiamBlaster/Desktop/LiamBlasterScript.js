    var c = document.getElementById("cvs");
    var ctx = c.getContext("2d");

    var oli = document.getElementById("oli");
    var liam = document.getElementById("liam");
    var BulletImg = document.getElementById("Bullet");

    var div = document.getElementById('circle');
    //I am going insane.
    
    c.width = window.innerHeight - 100;
    c.height = window.innerHeight - 100;

    if ("ontouchstart" in document.documentElement)
    {
      window.location = "../Mobile/LiamBlasterMobile.html";
    }

    var asteroidsCount = 0;

    var ax = [];
    var ay = [];
    var aw = [];
    var adir = [];
    var ahp = [];

    var bulletCount = 0;
    var bx = [];
    var by = [];
    var brot = [];
    var bspeed = 3;

    var player = {
      x: c.width/2,
      y: c.height/2,
      width:50,
      height:50,
      Rot: 0,
      hp:3,
      score:0
    }

    function triangle(x, y, r, w, h) {
        ctx.save();
        ctx.translate(x, y);
        ctx.rotate(r);
        ctx.drawImage(oli, -w / 2, -h / 2, w, h);
        ctx.restore();
      }

    function circle(x, y, w, hp, count) {
      if(hp != 0){
      
      w = w / 2;
      ctx.drawImage(liam, x, y, w, w);
      }else{

        ax.splice(count, 1);
        ay.splice(count, 1);
        aw.splice(count, 1);
        adir.splice(count, 1);
        ahp.splice(count, 1);
        asteroidsCount--;

        player.score++;
        }
    }

    function makeEnemy() {
      var bigasteroids = Math.floor(Math.random() * 5) + asteroidsCount;

      if(asteroidsCount == bigasteroids){
        aw.push(150);
        ahp.push(40);
        bigasteroids = Math.floor(Math.random() * 4) + 1;
      }else{
        aw.push(100);
        ahp.push(20);
      }
    
      var distance = c.width / 2 + 100;
      var delay = Math.random() * (2000 - 1000) + 1000;
    
      setTimeout(function (index) {
        console.log(index);
        var angle = Math.random() * 2 * Math.PI;
        var x, y;
        do {
          x = c.width / 2 + distance * Math.cos(angle);
          y = c.height / 2 + distance * Math.sin(angle);
          angle = Math.random() * 2 * Math.PI;
        } while (x >= 0 && x <= c.width && y >= 0 && y <= c.height);
    
        ax[index] = x;
        ay[index] = y;
        circle(ax[index], ay[index], aw[index], ahp[index], index);
    
        asteroidsCount++;
    
        makeEnemy();
      }, delay, asteroidsCount);
    }
        
    function draw(){
      triangle(player.x, player.y, player.Rot, player.width, player.height);

      //asteroids
      for(var i = 0; i < asteroidsCount; i++){
        circle(ax[i],//asteroidsX
                  ay[i],//asteroidsY
                  aw[i],//asteroidsWidth
                  ahp[i],//asteroidsHealth
                  i);
      }

      //bullets
      for(var h = 0; h < bulletCount; h++){
        ctx.save();
        ctx.translate(bx[h], by[h]);
        ctx.rotate(brot[h]);
        //ctx.fillStyle = '#3A4750';
        //ctx.fillRect(-12.5, -5, 25, 10);
        ctx.drawImage(BulletImg, 0,-15, 30, 30);
        ctx.restore();

        bx[h] += bspeed * Math.cos(brot[h]);
        by[h] += bspeed * Math.sin(brot[h]);
      }


    }

    function update() {

      for(var i = 0; i < asteroidsCount; i++) {

        var dx = player.x - ax[i];//distance to playerX
        var dy = player.y - ay[i];//distance to PlayerY
        var distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < (player.width + aw[i]) / 2) {
          // Collision occurred, asteroid reached player
          
          player.hp -= 1;
          
          // Remove the asteroid from the arrays
          ax.splice(i, 1);
          ay.splice(i, 1);
          aw.splice(i, 1);
          adir.splice(i, 1);
          ahp.splice(i, 1);
                    
          // Update the asteroidsCount
          asteroidsCount--;
    
          // Skip the rest of the loop iteration
          continue;
        }

        var angle = Math.atan2(dy, dx);//calculates angle
        adir[i] = angle;

      if(aw[i] == 100){var speed = 1 + (player.score/10);}else if(aw[i] == 50){var speed = 2 + (player.score/10);}; // Adjust the asteroid speed based on the size
        ax[i] += Math.cos(adir[i]) * speed;
        ay[i] += Math.sin(adir[i]) * speed;
      }

      for(var g = 0; g < asteroidsCount; g++){
          for(var j = 0; j < bulletCount; j++){
            if (bx[j] >= ax[g] - aw[g] / 2 && bx[j] <= ax[g] + aw[g] / 2) {
              if (by[j] >= ay[g] - aw[g] / 2 && by[j] <= ay[g] + aw[g] / 2) {           
                
                ahp[g] -= 10;
                // Remove the asteroid from the arrays
                bx.splice(j, 1);
                by.splice(j, 1);
                brot.splice(j, 1);
                
                // Update the asteroidsCount
                bulletCount--;
              }
            }
          }
      }
    }  

    function bullet(){
      if(clicked){
        bulletCount++;
        bx[bulletCount - 1] = player.x + (player.width / 2) * Math.cos(player.Rot + Math.PI / 2);
        by[bulletCount - 1] =  player.y + (player.height / 2) * Math.sin(player.Rot + Math.PI / 2);
        brot[bulletCount - 1] = player.Rot + Math.PI / 2;

        clicked = false;
        canClick = false;
      }
    }

    window.addEventListener("mousemove", handleMouseMove);

    function handleMouseMove(event) {
        var rect = c.getBoundingClientRect();
        var mouseX = event.clientX - rect.left;
        var mouseY = event.clientY - rect.top;
      
        var dx = mouseX - player.x;
        var dy = mouseY - player.y;
        var angle = Math.atan2(dy, dx);
      
        // Adjust the angle to rotate the top of the triangle towards the mouse
        player.Rot = angle - Math.PI / 2;
        if (bulletCount > 0) {
          brot[bulletCount] = player.Rot + Math.PI / 2;
      }
    }

    var clicked = false;
    var canClick = true;

    window.addEventListener("mousedown",mouseDown);
    window.addEventListener("mouseup",mouseup);
    window.addEventListener("keydown",start);

    function mouseDown(event){
      if(canClick){
        clicked = true;
        canClick = false;
      }
    }

    function mouseup(event){
      clicked = false;
      setTimeout(function (){
      canClick = true;
      }, 100);
    }

    var hasStarted = false;
    start();

    function start(event){
      document.addEventListener('keydown', function(event) {
        if(event.key === ' ' && hasStarted == false){
        hasStarted = true;
        makeEnemy();
        }
      });
    }

    function Dead(){
      if(player.hp <= 0){
        
        player.hp = 3;
        player.score = 0;

        hasStarted = false;
      }
      if(!hasStarted){
        asteroidsCount = 0;
        ax.splice(0, ax.length);
        ay.splice(0, ay.length);
        aw.splice(0, aw.length);
        adir.splice(0, adir.length);
        ahp.splice(0, ahp.length);
      }
    }

    window.requestAnimationFrame(loop);

    function loop() {//... its in the name
    ctx.clearRect(0, 0, c.width, c.height);//clears screen

    if(!hasStarted){
      ctx.font = "24px 'Bold Roboto', sans-serif";
      ctx.fillStyle = 'black';
      ctx.fillText("Look with the mouse",player.x - 100, player.y  + 50);
      ctx.fillText(" and click to shoot",player.x - 100, player.y + 80);
      ctx.fillText("press space to start", player.x - 100, player.y + 120);
    }else{
    ctx.font = "24px 'Bold Roboto', sans-serif";
    ctx.fillStyle = 'black';
    ctx.fillText("hp:" + player.hp,c.width/2 - 78,c.height / 10);
    ctx.fillText("score:" + player.score,c.width/2 + 24, c.height / 10);
    }

    Dead();
    update(); 
    bullet();
    draw();
    window.requestAnimationFrame(loop);//makes it a loop
    }
