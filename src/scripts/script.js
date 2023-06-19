    var c = document.getElementById("cvs");
    var ctx = c.getContext("2d");
    //I am going insane.
    //triangle and update function have used chat gpt only because so confusing
    
    c.width = window.innerHeight - 100;
    c.height = window.innerHeight - 100;

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
        ctx.beginPath();
        ctx.moveTo(-w / 2, -h / 2);
        ctx.lineTo(w / 2, -h / 2);
        ctx.lineTo(0, h / 2);
        ctx.closePath();
        ctx.fillStyle = '#3A4750';
        ctx.fill();
        ctx.restore();
      }//stole triangle from gpt(why is it so annoying to make one?)

    function circle(x, y, w, hp, count) {
      if(hp != 0){
      var colour;
      
      if (w === 100) {//makes more red based on health
        var dif = 40 - hp;
        colour = "rgb(" + (58 + dif * 4) + ", 71, 80)";
      } else if (w === 50) {
        var dif = 20 - hp;
        colour = "rgb(" + (58 + dif * 8) + ", 71, 80)";
      }
      
      w = w / 2;//draws circle
      ctx.beginPath();
      ctx.arc(x, y, w, 0, 2 * Math.PI, false);
      ctx.fillStyle = colour;
      ctx.fill();
      ctx.lineWidth = 5;
      ctx.strokeStyle = colour;
      ctx.stroke();
      }else{
          console.log('Spliced!');
          ax.splice(count, 1);
          ay.splice(count, 1);
          aw.splice(count, 1);
          adir.splice(count, 1);
          ahp.splice(count, 1);
        }
    }

    function makeEnemy() {
      console.log('makeEnemy');
      if (asteroidsCount >= 10) {
        return;
      }
    
      var bigasteroids = Math.floor(Math.random() * 6) + 5; // Random number between 5 and 10
    
      if (asteroidsCount < 10 || (asteroidsCount === bigasteroids && asteroidsCount < 11)) {
        aw.push(50);
        ahp.push(20);
      } else {
        aw.push(100);
        ahp.push(40);
      }
    
      var distance = c.width / 2 + 100;
      var delay = Math.random() * (2000 - 1000) + 1000;
    
      setTimeout(function (index) {
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
        

    function draw(){//put graphics on to screen(updated every frame)
      //player
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
        ctx.fillStyle = '#3A4750';
        ctx.fillRect(-12.5, -5, 25, 10);
        ctx.restore();

        bx[h] += bspeed * Math.cos(brot[h]);
        by[h] += bspeed * Math.sin(brot[h]);
      }


    }

    function update() {
      console.clear();
      console.log(ax);
      console.log(ay);
      for (var i = 0; i < asteroidsCount; i++) {

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
        }//i stole this from chat gpt ^

        var angle = Math.atan2(dy, dx);//calculates angle
        adir[i] = angle;

      if(aw[i] == 100){var speed = 1;}else if(aw[i] == 50){var speed = 2;}; // Adjust the asteroid speed based on the size
        ax[i] += Math.cos(adir[i]) * speed;
        ay[i] += Math.sin(adir[i]) * speed;
      }



      for(var g = 0; g < asteroidsCount; g++){
          for(var j = 0; j < bulletCount; j++){
            if(bx[j] <= ax[g] + aw[g] && bx[j] >= ax[g]){
              if(by[j] <= ay[g] + aw[g] && by[j] >= ay[g]){
                
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

    function mouseDown(event){
      if(canClick){
        clicked = true;
        canClick = false;
      }
    }
    function mouseup(event){
      clicked = false;
      canClick = true;
    }

    var timer = 0;
    window.requestAnimationFrame(loop);

    function loop() {//... its in the name
    ctx.clearRect(0, 0, c.width, c.height);//clears screen
    setTimeout(function(){
      timer++;
      if(timer == 300){
      makeEnemy();
      }
    },1)
    update(); 
    bullet();
    draw();
    window.requestAnimationFrame(loop);//makes it a loop
    }
