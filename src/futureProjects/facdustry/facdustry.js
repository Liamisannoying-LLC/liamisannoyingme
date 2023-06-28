var c = document.getElementById('cvs');
var ctx = c.getContext('2d');

var cookies = document.cookie;//I hate you

c.width = window.innerWidth - (window.innerWidth / 10);
c.height = window.innerHeight - (window.innerHeight / 10);

//vars
var geometry = {};

//cookies
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }
  
  function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }
  
  function checkCookie() {
    let user = getCookie("username");
    if (user != "") {
      //alert("Welcome again " + user);
    } else {
      //user = prompt("Please enter your name:", "");
      if (user != "" && user != null) {
        //setCookie("username", user, 365 * 1000);
      }
    }
  }

//drawing geometry
function draw(object,bordercolour,fillcolour){
    let region = new Path2D();
    for(let i; i < Object.keys(object).length; i++){
        region.strokeStyle = bordercolour;
        region.moveTo(geometry[object][i].x, geometry[object][i].y);
        region.lineTo(geometry[object][(i + 1) % Object.keys(geometry[object]).length].x, geometry[object][(i + 1) % Object.keys(geometry[object]).length].y);
    }
    region.closePath();

    ctx.fillStyle = fillcolour;
    ctx.stroke(region);
    ctx.fill(region);
}

geometry["triangle"] = [
    { x: c.width / 2, y: c.height / 2 },
    { x: c.width / 2 + 50, y: c.height / 2 + 50 },
    { x: c.width / 2 - 50, y: c.height / 2 + 50 }
  ];
  
  requestAnimationFrame(loop);
  
  function loop() {
    ctx.clearRect(0, 0, c.width, c.height); // Clear the canvas before redrawing
    draw('triangle', 'black', 'red');
    requestAnimationFrame(loop);
  }