    var c = document.getElementById("cvs");
    var ctx = c.getContext("2d");
    
    c.width = 750;
    c.height = 750;

    var asteroidsCount = 0;

    var ax = [];
    var ay = [];
    var aw = [];
    var adir = [];
    var ahp = [];

    var player = {
      x: c.width/2,
      y: c.height/2,
      width:50,
      height:50,
      Rot: 0
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
        ax.pop(count);
        ay.pop(count);
        aw.pop(count);
        adir.pop(count);
        ahp.pop(count);
      }
    }

    function makeEnemy() {
      for (asteroidsCount; asteroidsCount < 10; asteroidsCount++) {
        var bigasteroids = Math.floor(Math.random(5, 10));

        if (asteroidsCount < 10 && asteroidsCount != bigasteroids) {
          aw.push(50);
          ahp.push(20);
        } else {
          aw.push(100);
          ahp.push(40);
        }

        var distance = c.width / 2 + 100; // Adjust the distance as per your needs
        var delay = Math.random() * 5000; // Adjust the maximum delay time in milliseconds

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
          if(ahp[index] === 0){asteroidsCount -= 1; return 0;}else{
          circle(ax[index], ay[index], aw[index],ahp[index], index);
          }
        }, delay, asteroidsCount);
      }
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
    }

    function HasHitPlayer(){
      if(dx > 0 && dx < 1 && dy > 0 && dy < 1){
            console.log(dx + "," + dy);
            asteroidsCount -= 1;
            return true;    
      }else{
        return false;
      }
    }

    function update() {
      for (var i = 0; i < ax.length; i++) {

        var dx = player.x - ax[i];//distance to playerX
        var dy = player.y - ay[i];//distance to PlayerY
        var angle = Math.atan2(dy, dx);//calculates angle
        adir[i] = angle;

      if(aw[i] == 100){var speed = 1;}else if(aw[i] == 50){var speed = 2;}; // Adjust the asteroid speed based on the size
        ax[i] += Math.cos(adir[i]) * speed;
        ay[i] += Math.sin(adir[i]) * speed;
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

    window.requestAnimationFrame(loop);

    function loop() {//... its in the name
    ctx.clearRect(0, 0, c.width, c.height);//clears screen
    update();
    draw();
    window.requestAnimationFrame(loop);//makes it a loop
    }
