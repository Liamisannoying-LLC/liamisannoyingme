var c = document.getElementById("cvs");
var ctx = c.getContext("2d");

var MapImg = new Image();
MapImg.onload = function() {
    ctx.drawImage(MapImg, 0, 0, 900, 900);
};
MapImg.src = "Images/Map.png";