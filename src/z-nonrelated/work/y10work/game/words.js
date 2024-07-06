//The words project is on hold for now, I think. I'll leave this here though.
window.onload=startCanvas

function resizeCanvas(){
	ctx.fillStyle = "white"
	ctx.fillRect(0,0,WIDTH,WIDTH)
	var width = parseInt(document.getElementsByName("inputbox")[0].value)
	if (!isNaN(width)){
		WIDTH = width
		startCanvas()
	}
	else{

    }
}

function startCanvas(){
	var ctx
	ctx=document.getElementById("myCanvas").getContext("2d")

	ctx.fillStyle = "black"
	ctx.fillRect(0, 0, 500, 500)
}

