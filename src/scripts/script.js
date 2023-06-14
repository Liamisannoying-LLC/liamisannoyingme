    var c = document.getElementById("cvs");
    var ctx = c.getContext("2d");
    //I am going insane.
    
    c.width = 800;
    c.height = 800;

    var asteroidsCount = 0;

    var ax = [];
    var ay = [];
    var aw = [];
    var adir = [];
    var ahp = [];

    var bulletCount;
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
      score:100
    }
    start();

    function start(){
      
      makeEnemy();
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
      }

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
      if (asteroidsCount >= 10) {
        return; // Stop creating asteroids if the desired count is reached
      }
    
      var bigasteroids = Math.floor(Math.random(5, 10));
    
      if (asteroidsCount < 10 && asteroidsCount !== bigasteroids) {
        aw.push(50);
        ahp.push(20);
      } else {
        aw.push(100);
        ahp.push(40);
      }
    
      var distance = c.width / 2 + 100; // Adjust the distance as per your needs
      var delay = Math.random() * (2000 - 1000) + 1000; // Adjust the maximum delay time in milliseconds
    
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
    
        makeEnemy(); // Call the function recursively to create the next asteroid
      }, delay, asteroidsCount);
    }    

    function draw(){//put graphics on to screen(updated every frame)
      triangle(player.x, player.y, player.Rot, player.width, player.height);
      for(var i = 0; i < asteroidsCount; i++){
        circle(ax[i],//asteroidsX
                  ay[i],//asteroidsY
                  aw[i],//asteroidsWidth
                  ahp[i],//asteroidsHealth
                  i);
      }
      for(var h = 0; h < bulletCount; h++){
        console.log('bullet')
        ctx.rotate(brot[h]);
        ctx.fillStyle = '#3A4750';
        ctx.fillRect(bx[h],by[h],10,25);
        bx[h] += bspeed * Math.cos(angle * Math.PI / 180);
        by[h] += bspeed * Math.sin(angle * Math.PI / 180);
      }
    }

    function update() {
      for (var i = 0; i < asteroidsCount; i++) {

        var dx = player.x - ax[i];//distance to playerX
        var dy = player.y - ay[i];//distance to PlayerY
        var distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < (player.width + aw[i]) / 2) {
          // Collision occurred, asteroid reached player
          console.log("Damage Taken!");
          
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

      if(aw[i] == 100){var speed = 1;}else if(aw[i] == 50){var speed = 2;}; // Adjust the asteroid speed based on the size
        ax[i] += Math.cos(adir[i]) * speed;
        ay[i] += Math.sin(adir[i]) * speed;
      }
    }  


    function bullet(){
      if(clicked){
        console.log('bullet');
        bulletCount++;
        bx[bulletCount] = player.x;
        by[bulletCount] = player.y;
        brot[bulletCount] = player.Rot;
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
    }

    var clicked;
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

    window.requestAnimationFrame(loop);

    function loop() {//... its in the name
    ctx.clearRect(0, 0, c.width, c.height);//clears screen
    update();
    bullet();
    draw();
    window.requestAnimationFrame(loop);//makes it a loop
    }
