/**
// BY THOMAS OLAV
* Title: Liam vs evil liam
// BY THOMAS OLAV
* Author: Thomas Olav
// BY THOMAS OLAV
* Date: 21/3/24
// BY THOMAS OLAV
* Version: -
// BY THOMAS OLAV
**/
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
// THERE IS SOME GAME LORE IN THE CODE (LIAM MADE ME DO IT!!)
// BY THOMAS OLAV
//console.log("Page working")
// BY THOMAS OLAV

// BY THOMAS OLAV
// Unfortunatly the hazards only work in one level. This is because I am a lazy child.
// BY THOMAS OLAV

// BY THOMAS OLAV
const HEIGHT = 600;
// BY THOMAS OLAV
const WIDTH = 600;
// BY THOMAS OLAV
const backGroundColor = "PapayaWhip";
// BY THOMAS OLAV

// BY THOMAS OLAV
const LVL1BGCOLOR = "PapayaWhip";
// BY THOMAS OLAV
const LVL1OBSCOLOR = "NavajoWhite";
// BY THOMAS OLAV

// BY THOMAS OLAV
const LVL2BGCOLOR = "Black";
// BY THOMAS OLAV
const LVL2OBSCOLOR = "Violet";
// BY THOMAS OLAV

// BY THOMAS OLAV
const LVL1DISABLEDOBSCOLOR = "LightGrey";
// BY THOMAS OLAV
const LVL2DISABLEDOBSCOLOR = "White";
// BY THOMAS OLAV

// BY THOMAS OLAV
const PLAYER_HEIGHT = 40;
// BY THOMAS OLAV
const PLAYER_WIDTH = 40;
// BY THOMAS OLAV
const playerColor = "pink";
// BY THOMAS OLAV

// BY THOMAS OLAV
const wallColor = "SkyBlue";
// BY THOMAS OLAV

// BY THOMAS OLAV
var won = false;
// BY THOMAS OLAV

// BY THOMAS OLAV
var liamHappyImage = new Image()
// BY THOMAS OLAV
liamHappyImage.src = "Liam Happy.png"
// BY THOMAS OLAV

// BY THOMAS OLAV
var liamAngryImage = new Image()
// BY THOMAS OLAV
liamAngryImage.src = "Liam Angry.png"
// BY THOMAS OLAV

// BY THOMAS OLAV
var liamAngry1900Image = new Image()
// BY THOMAS OLAV
liamAngry1900Image.src = "Liam Angry 1900s edition.png"
// BY THOMAS OLAV

// BY THOMAS OLAV
var winScreenImage = new Image()
// BY THOMAS OLAV
winScreenImage.src = "WIN SCREEN.png"
// BY THOMAS OLAV

// BY THOMAS OLAV
var playerSpeed = 10
// BY THOMAS OLAV

// BY THOMAS OLAV
var upPressed = false
// BY THOMAS OLAV
var downPressed = false
// BY THOMAS OLAV
var leftPressed = false
// BY THOMAS OLAV
var rightPressed = false
// BY THOMAS OLAV

// BY THOMAS OLAV
var moving = false
// BY THOMAS OLAV

// BY THOMAS OLAV
var movingUp = false
// BY THOMAS OLAV
var movingDown = false
// BY THOMAS OLAV
var movingLeft = false
// BY THOMAS OLAV
var movingRight = false
// BY THOMAS OLAV

// BY THOMAS OLAV
var startPlayerX1 = 40;
// BY THOMAS OLAV
var startPlayerY1 = 40;
// BY THOMAS OLAV

// BY THOMAS OLAV
var startPlayerX2 = 480;
// BY THOMAS OLAV
var startPlayerY2 = 480;
// BY THOMAS OLAV

// BY THOMAS OLAV
var startPlayerX3 = 520;
// BY THOMAS OLAV
var startPlayerY3 = 40;
// BY THOMAS OLAV

// BY THOMAS OLAV
var playerX = 40;
// BY THOMAS OLAV
var playerY = 40;
// BY THOMAS OLAV

// BY THOMAS OLAV
var level1Selected = true; // Set to true if level 1, false for level 2
// BY THOMAS OLAV

// BY THOMAS OLAV
var wallArray1 = [];
// BY THOMAS OLAV
var wallArray2 = [];
// BY THOMAS OLAV

// BY THOMAS OLAV
var wallArrayLevelOne1 = [];
// BY THOMAS OLAV
var wallArrayLevelOne2 = [];
// BY THOMAS OLAV

// BY THOMAS OLAV
var wallArrayLevelTwo1 = [];
// BY THOMAS OLAV
var wallArrayLevelTwo2 = [];
// BY THOMAS OLAV

// BY THOMAS OLAV
var wallArrayLevelThree1 = [];
// BY THOMAS OLAV
var wallArrayLevelThree2 = [];
// BY THOMAS OLAV

// BY THOMAS OLAV
var stageSelected = 1;
// BY THOMAS OLAV

// BY THOMAS OLAV
var hazSize = 40;
// BY THOMAS OLAV

// BY THOMAS OLAV
const LIAM_END_WIDTH = 100;
// BY THOMAS OLAV
const LIAM_END_HEIGHT = 100;
// BY THOMAS OLAV

// BY THOMAS OLAV
var liamEndx = 430;
// BY THOMAS OLAV
var liamEndy = 50;
// BY THOMAS OLAV

// BY THOMAS OLAV
var liamEndx1 = 430;
// BY THOMAS OLAV
var liamEndy1 = 50;
// BY THOMAS OLAV

// BY THOMAS OLAV
var liamEndx2 = 80;
// BY THOMAS OLAV
var liamEndy2 = 80;
// BY THOMAS OLAV

// BY THOMAS OLAV
var liamEndx3 = 250;
// BY THOMAS OLAV
var liamEndy3 = 200;
// BY THOMAS OLAV

// BY THOMAS OLAV
var hazArray = [];
// BY THOMAS OLAV
var hazColor = "red";
// BY THOMAS OLAV

// BY THOMAS OLAV
//var wallX = 300;
// BY THOMAS OLAV
//var wallY = 100;
// BY THOMAS OLAV

// BY THOMAS OLAV
//var wallXAcc = 5;
// BY THOMAS OLAV
//var wallYAcc = 0;
// BY THOMAS OLAV

// BY THOMAS OLAV
liamHappyImage.onload=startCanvas
// BY THOMAS OLAV

// BY THOMAS OLAV
function startCanvas(){
// BY THOMAS OLAV

// BY THOMAS OLAV
    //console.log("Start canvas working")
// BY THOMAS OLAV

// BY THOMAS OLAV
	ctx=document.getElementById("myCanvas").getContext("2d")
// BY THOMAS OLAV
	// This timer sets the framerate.
// BY THOMAS OLAV
	// 10 means 10 milliseconds between frames (100 frames per second)
// BY THOMAS OLAV
	timer = setInterval(updateCanvas, 10);
// BY THOMAS OLAV

// BY THOMAS OLAV
	//THIS IS WHERE THE OBSTACLES ARE MADE
// BY THOMAS OLAV
	//wallArray1.push(new Obs(x, y, width, height));
// BY THOMAS OLAV

// BY THOMAS OLAV
	// lvl 1 1 walls
// BY THOMAS OLAV
	addTile(0, 14, 0, 0, 1, 1); // top
// BY THOMAS OLAV
	addTile(0, 14, 14, 0, 1, 1); // bottom
// BY THOMAS OLAV
	addTile(0, 0, 0, 14, 1, 1); // left
// BY THOMAS OLAV
	addTile(14, 0, 0, 14, 1, 1); // right
// BY THOMAS OLAV

// BY THOMAS OLAV
	// lvl 1 2 walls
// BY THOMAS OLAV
	addTile(0, 14, 0, 0, 2, 1); // top
// BY THOMAS OLAV
	addTile(0, 14, 14, 0, 2, 1); // bottom
// BY THOMAS OLAV
	addTile(0, 0, 0, 14, 2, 1); // left
// BY THOMAS OLAV
	addTile(14, 0, 0, 14, 2, 1); // right
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	// lvl 2 1 walls
// BY THOMAS OLAV
	addTile(0, 14, 0, 0, 1, 2); // top
// BY THOMAS OLAV
	addTile(0, 14, 14, 0, 1, 2); // bottom
// BY THOMAS OLAV
	addTile(0, 0, 0, 14, 1, 2); // left
// BY THOMAS OLAV
	addTile(14, 0, 0, 14, 1, 2); // right
// BY THOMAS OLAV

// BY THOMAS OLAV
	// lvl 2 2 walls
// BY THOMAS OLAV
	addTile(0, 14, 0, 0, 2, 2); // top
// BY THOMAS OLAV
	addTile(0, 14, 14, 0, 2, 2); // bottom
// BY THOMAS OLAV
	addTile(0, 0, 0, 14, 2, 2); // left
// BY THOMAS OLAV
	addTile(14, 0, 0, 14, 2, 2); // right
// BY THOMAS OLAV

// BY THOMAS OLAV
	// lvl 3 1 walls
// BY THOMAS OLAV
	addTile(0, 14, 0, 0, 1, 3); // top
// BY THOMAS OLAV
	addTile(0, 14, 14, 0, 1, 3); // bottom
// BY THOMAS OLAV
	addTile(0, 0, 0, 14, 1, 3); // left
// BY THOMAS OLAV
	addTile(14, 0, 0, 14, 1, 3); // right
// BY THOMAS OLAV

// BY THOMAS OLAV
	// lvl 3 2 walls
// BY THOMAS OLAV
	addTile(0, 14, 0, 0, 2, 3); // top
// BY THOMAS OLAV
	addTile(0, 14, 14, 0, 2, 3); // bottom
// BY THOMAS OLAV
	addTile(0, 0, 0, 14, 2, 3); // left
// BY THOMAS OLAV
	addTile(14, 0, 0, 14, 2, 3); // right
// BY THOMAS OLAV

// BY THOMAS OLAV
	// this is so I can toggle it on or off because funny
// BY THOMAS OLAV
	if (1 == 1){
// BY THOMAS OLAV

// BY THOMAS OLAV
	//LEVEL 1 1 STUFF
// BY THOMAS OLAV

// BY THOMAS OLAV
	addTile(1, 7, 3, 4, 1, 1); // placeholder level 1 top left block
// BY THOMAS OLAV
	addTile(8, 9, 1, 7, 1, 1); // middle top block
// BY THOMAS OLAV
	addTile(7, 9, 10, 13, 1, 1); // bottom right block
// BY THOMAS OLAV
	addTile(7, 13, 10, 11, 1, 1); // bottom right block2
// BY THOMAS OLAV
	addTile(10, 13, 4, 4, 1, 1); // top right block
// BY THOMAS OLAV
	addTile(11, 13, 7, 7, 1, 1); // top right block 2
// BY THOMAS OLAV
	addTile(2, 2, 6, 12, 1, 1); // bottom left block
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	//LEVEL 1 2 STUFF
// BY THOMAS OLAV

// BY THOMAS OLAV
	addTile(1, 4, 3, 4, 2, 1); // placeholder level 2 top left block
// BY THOMAS OLAV
	addTile(8, 9, 1, 7, 2, 1); // middle top block
// BY THOMAS OLAV
	addTile(6, 9, 10, 11, 2, 1); // bottom right block
// BY THOMAS OLAV
	addTile(10, 13, 7, 7, 2, 1); // middle right block
// BY THOMAS OLAV
	addTile(2, 2, 6, 12, 2, 1); // bottom left block
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	//LEVEL 2 1 STUFF
// BY THOMAS OLAV
	addTile(4, 4, 13, 13, 1, 2); 
// BY THOMAS OLAV
	addTile(3, 6, 10, 10, 1, 2); 
// BY THOMAS OLAV
	addTile(3, 4, 6, 6, 1, 2); 
// BY THOMAS OLAV
	addTile(9, 9, 9, 11, 1, 2); 
// BY THOMAS OLAV
	addTile(9, 11, 9, 9, 1, 2); 
// BY THOMAS OLAV
	addTile(8, 8, 6, 7, 1, 2); 
// BY THOMAS OLAV

// BY THOMAS OLAV
	//LEVEL 2 2 STUFF
// BY THOMAS OLAV
	addTile(9, 13, 9, 13, 2, 2); 
// BY THOMAS OLAV
	addTile(5, 5, 8, 8, 2, 2); 
// BY THOMAS OLAV
	addTile(2, 4, 5, 6, 2, 2); 
// BY THOMAS OLAV
	addTile(3, 4, 10, 10, 2, 2); 
// BY THOMAS OLAV
	addTile(6, 6, 10, 10, 2, 2); 
// BY THOMAS OLAV
	addTile(9, 9, 1, 1, 2, 2); 
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	//LEVEL 3 1 STUFF
// BY THOMAS OLAV
	addTile(10, 10, 1, 7, 1, 3); 
// BY THOMAS OLAV
	addTile(10, 10, 10, 10, 1, 3); 
// BY THOMAS OLAV
	addTile(13, 13, 10, 10, 1, 3); 
// BY THOMAS OLAV
	addTile(10, 10, 13, 13, 1, 3); 
// BY THOMAS OLAV
	addTile(2, 3, 9, 9, 1, 3); 
// BY THOMAS OLAV
	addTile(1, 1, 12, 12, 1, 3);  
// BY THOMAS OLAV
	addTile(11, 11, 5, 5, 1, 3); 
// BY THOMAS OLAV
	addTile(8, 11, 10, 11, 1, 3); 
// BY THOMAS OLAV
	addTile(6, 7, 10, 10, 1, 3); 
// BY THOMAS OLAV
	addTile(3, 5, 5, 7, 1, 3); 
// BY THOMAS OLAV
	addTile(6, 8, 7, 7, 1, 3); 
// BY THOMAS OLAV
	addTile(8, 8, 2, 2, 1, 3); 
// BY THOMAS OLAV
	
// BY THOMAS OLAV

// BY THOMAS OLAV
	//LEVEL 3 2 STUFF
// BY THOMAS OLAV
	addTile(10, 10, 1, 10, 2, 3); 
// BY THOMAS OLAV
	addTile(10, 14, 5, 5, 2, 3); 
// BY THOMAS OLAV
	addTile(10, 10, 13, 13, 2, 3); 
// BY THOMAS OLAV
	addTile(13, 13, 10, 10, 2, 3); 
// BY THOMAS OLAV
	addTile(11, 11, 6, 6, 2, 3); 
// BY THOMAS OLAV
	addTile(9, 9, 5, 9, 2, 3); 
// BY THOMAS OLAV
	addTile(5, 5, 3, 3, 2, 3); 
// BY THOMAS OLAV
	addTile(6, 8, 7, 7, 2, 3); 
// BY THOMAS OLAV
	addTile(3, 3, 5, 5, 2, 3); 
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	hazArray.push(new Haz(460, 100, 80, 40, 1, 0, 1));
// BY THOMAS OLAV
	hazArray.push(new Haz(160, 360, 40, 40, 1, 0, 1));
// BY THOMAS OLAV
	hazArray.push(new Haz(120, 120, 40, 80, 0, 1, 1));
// BY THOMAS OLAV
	hazArray.push(new Haz(40, 40, 40, 40, 1, 0, 1));
// BY THOMAS OLAV

// BY THOMAS OLAV
	hazArray.push(new Haz(120, 400, 40, 40, 0, 1, 2));
// BY THOMAS OLAV
	hazArray.push(new Haz(120, 440, 40, 40, 1, 0, 2));
// BY THOMAS OLAV
	hazArray.push(new Haz(120, 120, 40, 80, 0, 1, 2));
// BY THOMAS OLAV

// BY THOMAS OLAV
	LoadLevel(1);
// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV
function updateCanvas(){
// BY THOMAS OLAV

// BY THOMAS OLAV
	if(won == false)
// BY THOMAS OLAV
			{
// BY THOMAS OLAV
   			//console.log("Update canvas working")
// BY THOMAS OLAV
			//console.log(leftPressed, rightPressed, upPressed, downPressed);
// BY THOMAS OLAV

// BY THOMAS OLAV
			//moveObs();
// BY THOMAS OLAV

// BY THOMAS OLAV
		if(level1Selected){
// BY THOMAS OLAV
			ctx.fillStyle = LVL1BGCOLOR;
// BY THOMAS OLAV
		} else {
// BY THOMAS OLAV
			ctx.fillStyle = LVL2BGCOLOR;
// BY THOMAS OLAV
		}
// BY THOMAS OLAV
		ctx.fillRect(0, 0, WIDTH, HEIGHT);
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
		if(level1Selected){
// BY THOMAS OLAV

// BY THOMAS OLAV
			drawAllLevel2Walls(LVL2DISABLEDOBSCOLOR);
// BY THOMAS OLAV

// BY THOMAS OLAV
				if(stageSelected == 3){
// BY THOMAS OLAV
				for(i = 0; i < hazArray.length; i++){	
// BY THOMAS OLAV
					if(hazArray[i].level == 2)
// BY THOMAS OLAV
					{
// BY THOMAS OLAV

// BY THOMAS OLAV
					renderImage(liamAngry1900Image, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);
// BY THOMAS OLAV
					
// BY THOMAS OLAV
					}
// BY THOMAS OLAV
				}
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			drawAllLevel1Walls(LVL1OBSCOLOR);
// BY THOMAS OLAV

// BY THOMAS OLAV
			if(stageSelected == 3){
// BY THOMAS OLAV
				for(i = 0; i < hazArray.length; i++){	
// BY THOMAS OLAV
					if(hazArray[i].level == 1)
// BY THOMAS OLAV
					{
// BY THOMAS OLAV
					
// BY THOMAS OLAV
					renderImage(liamAngryImage, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);
// BY THOMAS OLAV
					
// BY THOMAS OLAV
					}
// BY THOMAS OLAV
				}
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
		} else {
// BY THOMAS OLAV
			drawAllLevel1Walls(LVL1DISABLEDOBSCOLOR);
// BY THOMAS OLAV

// BY THOMAS OLAV
			if(stageSelected == 3){
// BY THOMAS OLAV
				for(i = 0; i < hazArray.length; i++){
// BY THOMAS OLAV
				
// BY THOMAS OLAV
					if(hazArray[i].level == 1)
// BY THOMAS OLAV
						{
// BY THOMAS OLAV
							renderImage(liamAngry1900Image, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);	
// BY THOMAS OLAV
						}
// BY THOMAS OLAV
					
// BY THOMAS OLAV
				}
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
			drawAllLevel2Walls(LVL2OBSCOLOR);
// BY THOMAS OLAV

// BY THOMAS OLAV
			if(stageSelected == 3){
// BY THOMAS OLAV
				for(i = 0; i < hazArray.length; i++){
// BY THOMAS OLAV
				
// BY THOMAS OLAV
					if(hazArray[i].level == 2)
// BY THOMAS OLAV
						{
// BY THOMAS OLAV
							renderImage(liamAngryImage, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);	
// BY THOMAS OLAV
						}
// BY THOMAS OLAV
					
// BY THOMAS OLAV
				}
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
		movePlayer()
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
   	ctx.fillStyle = playerColor;
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		//ctx.fillRect(playerX, playerY, PLAYER_WIDTH, PLAYER_HEIGHT);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		renderImage(liamHappyImage, playerX - 6, playerY - 8, PLAYER_WIDTH * 1.3, PLAYER_HEIGHT * 1.5, playerX / 100 + playerY / 100);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		renderImage(liamHappyImage, liamEndx - 20, liamEndy - 20, LIAM_END_WIDTH + 40, LIAM_END_HEIGHT + 50, 0);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		// ctx.fillRect(liamEndx, liamEndy, 100, 100);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		//moveHazards();
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		if(stageSelected == 3){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
			moveHazards();
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	} else {
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		renderImage(winScreenImage, 0, 0, 600, 600, 0);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BTW Oli made this
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
function renderImage(img,x,y,w,h,rotation){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.save();
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.translate(x + w/2,y + h/2);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.rotate(rotation);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.translate( - (x + w/2), - (y + h/2));
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.drawImage(img, x, y, w, h);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.restore();
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
window.addEventListener('keydown', keyDownFunction)
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
function keyDownFunction(keyboardEvent){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	// Remember if the movement keys are being pressed
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	var keyDown = keyboardEvent.key
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	if (keyDown=="w" || keyDown=="ArrowUp"){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		upPressed = true
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	} else if (keyDown=="a" || keyDown=="ArrowLeft"){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		leftPressed = true
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	} else if (keyDown=="s" || keyDown=="ArrowDown"){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		downPressed = true
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	} else if (keyDown=="d" || keyDown=="ArrowRight"){
// BY THOMAS OLAV
		rightPressed = true
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	if (keyDown =="r" && gameOver){
// BY THOMAS OLAV
		hazArray = [];
// BY THOMAS OLAV
		gameOver = false;
// BY THOMAS OLAV

// BY THOMAS OLAV
		playerX = (WIDTH - PLAYER_WIDTH) / 2;
// BY THOMAS OLAV
		playerY = (HEIGHT - PLAYER_HEIGHT) / 2;
// BY THOMAS OLAV

// BY THOMAS OLAV
		score = 0;
// BY THOMAS OLAV
		playerHealth = 3;
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
	if (keyDown == " " && !moving){
// BY THOMAS OLAV
		level1Selected = !level1Selected;
// BY THOMAS OLAV
		console.log("space pressed");
// BY THOMAS OLAV
		checkIfStuckInTile();
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
window.addEventListener('keyup', keyUpFunction)
// BY THOMAS OLAV

// BY THOMAS OLAV
function keyUpFunction(keyboardEvent){
// BY THOMAS OLAV
	// Forget movement keys when they are released
// BY THOMAS OLAV
	var keyUp = keyboardEvent.key
// BY THOMAS OLAV
	
// BY THOMAS OLAV
	if (keyUp =="w" || keyUp =="ArrowUp"){
// BY THOMAS OLAV
		upPressed = false
// BY THOMAS OLAV
	} else if (keyUp =="a" || keyUp =="ArrowLeft"){
// BY THOMAS OLAV
		leftPressed = false
// BY THOMAS OLAV
	} else if (keyUp =="s" || keyUp =="ArrowDown"){
// BY THOMAS OLAV
		downPressed = false
// BY THOMAS OLAV
	} else if (keyUp =="d" || keyUp =="ArrowRight"){
// BY THOMAS OLAV
		rightPressed = false
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV
function movePlayer(){
// BY THOMAS OLAV
	// Move the player if the movement keys are being pressed
// BY THOMAS OLAV

// BY THOMAS OLAV
	if(moving){
// BY THOMAS OLAV
		
// BY THOMAS OLAV
		if(movingUp){
// BY THOMAS OLAV
			playerY -= playerSpeed
// BY THOMAS OLAV
			checkCollision("up");
// BY THOMAS OLAV
		} else{
// BY THOMAS OLAV
		if(movingLeft){
// BY THOMAS OLAV
			playerX -= playerSpeed
// BY THOMAS OLAV
			checkCollision("left");
// BY THOMAS OLAV
		} else{
// BY THOMAS OLAV
		if(movingDown){
// BY THOMAS OLAV
			playerY += playerSpeed
// BY THOMAS OLAV
			checkCollision("down");
// BY THOMAS OLAV
		} else{
// BY THOMAS OLAV
		if(movingRight){
// BY THOMAS OLAV
			playerX += playerSpeed
// BY THOMAS OLAV
			checkCollision("right");
// BY THOMAS OLAV
		}
// BY THOMAS OLAV
	}}}
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV
	if (!moving){
// BY THOMAS OLAV

// BY THOMAS OLAV
		if(upPressed){
// BY THOMAS OLAV
			movingUp = true;
// BY THOMAS OLAV
			moving = true;
// BY THOMAS OLAV
		} else{
// BY THOMAS OLAV
		if(leftPressed){
// BY THOMAS OLAV
			movingLeft = true;
// BY THOMAS OLAV
			moving = true;
// BY THOMAS OLAV
		} else{
// BY THOMAS OLAV
		if(downPressed){
// BY THOMAS OLAV
			movingDown = true;
// BY THOMAS OLAV
			moving = true;
// BY THOMAS OLAV
		} else{
// BY THOMAS OLAV
		if(rightPressed){
// BY THOMAS OLAV
			movingRight = true;
// BY THOMAS OLAV
			moving = true;
// BY THOMAS OLAV
		}}}
// BY THOMAS OLAV
	}}
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function checkCollision(dir){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	if(playerY < 0){
// BY THOMAS OLAV
		playerY += playerSpeed
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
	if(playerY + PLAYER_HEIGHT > HEIGHT){
// BY THOMAS OLAV
		playerY -= playerSpeed
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
	if(playerX < 0){
// BY THOMAS OLAV
		playerX += playerSpeed
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
	if(playerX + PLAYER_WIDTH> WIDTH){
// BY THOMAS OLAV
		playerX -= playerSpeed
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	if (level1Selected){
// BY THOMAS OLAV

// BY THOMAS OLAV
		checkLvl1Collision(dir);
// BY THOMAS OLAV

// BY THOMAS OLAV
	} else {
// BY THOMAS OLAV

// BY THOMAS OLAV
		checkLvl2Collision(dir);
// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
	if (playerY + PLAYER_HEIGHT > liamEndy && playerY < liamEndy + LIAM_END_HEIGHT && playerX + PLAYER_WIDTH > liamEndx && playerX < liamEndx + LIAM_END_WIDTH){
// BY THOMAS OLAV
		console.log("YOU WINN!!!!");
// BY THOMAS OLAV
		YOU_WIN();
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
	
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function noMoving(){
// BY THOMAS OLAV

// BY THOMAS OLAV
	moving = false;
// BY THOMAS OLAV
	movingUp = false;
// BY THOMAS OLAV
	movingDown = false;
// BY THOMAS OLAV
	movingLeft = false;
// BY THOMAS OLAV
	movingRight = false;
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function takeDamage(){
// BY THOMAS OLAV
	playerHealth --;
// BY THOMAS OLAV
	if (playerHealth <= 0){
// BY THOMAS OLAV
		gameOver = true;
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
//walltacle class
// BY THOMAS OLAV
class Obs{
// BY THOMAS OLAV
	constructor(x, y, width, height, color = wallColor){
// BY THOMAS OLAV
		this.x = x
// BY THOMAS OLAV
		this.y = y
// BY THOMAS OLAV
		this.width = width
// BY THOMAS OLAV
		this.height = height
// BY THOMAS OLAV
		this.color = color
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV
//hazard class
// BY THOMAS OLAV
class Haz{
// BY THOMAS OLAV
	constructor(x, y, width, height, xSpeed, ySpeed, level, color = hazColor){
// BY THOMAS OLAV
		this.x = x;
// BY THOMAS OLAV
		this.y = y;
// BY THOMAS OLAV
		this.width = width;
// BY THOMAS OLAV
		this.height = height;
// BY THOMAS OLAV
		this.xSpeed = xSpeed;
// BY THOMAS OLAV
		this.ySpeed = ySpeed;
// BY THOMAS OLAV
		this.color = color;
// BY THOMAS OLAV
		this.level = level;
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function easyText(font, color, textX, textY, text){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.font = font;
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.fillStyle = color;
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	ctx.fillText(text, textX, textY);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
function drawAllLevel1Walls(color){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	for(i = 0; i < wallArray1.length; i++){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		ctx.fillStyle = color;
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		ctx.fillRect(wallArray1[i].x, wallArray1[i].y, wallArray1[i].width, wallArray1[i].height);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		// renderImage(liamHappyImage,wallArray1[i].x, wallArray1[i].y, wallArray1[i].width, wallArray1[i].height)
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
function drawAllLevel2Walls(color){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	for(i = 0; i < wallArray2.length; i++){
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		ctx.fillStyle = color;
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
		ctx.fillRect(wallArray2[i].x, wallArray2[i].y, wallArray2[i].width, wallArray2[i].height);
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
}
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
function checkLvl1Collision(dir){
// BY THOMAS OLAV

// BY THOMAS OLAV
	for (i = 0; i < wallArray1.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
		if (playerY + PLAYER_HEIGHT > wallArray1[i].y && playerY < wallArray1[i].y + wallArray1[i].height && playerX + PLAYER_WIDTH > wallArray1[i].x && playerX < wallArray1[i].x + wallArray1[i].width){
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "up"){
// BY THOMAS OLAV
				playerY += playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "left"){
// BY THOMAS OLAV
				playerX += playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "down"){
// BY THOMAS OLAV
				playerY -= playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "right"){
// BY THOMAS OLAV
				playerX -= playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			noMoving()
// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function checkLvl2Collision(dir){
// BY THOMAS OLAV
	
// BY THOMAS OLAV
	for (i = 0; i < wallArray2.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
		if (playerY + PLAYER_HEIGHT > wallArray2[i].y && playerY < wallArray2[i].y + wallArray2[i].height && playerX + PLAYER_WIDTH > wallArray2[i].x && playerX < wallArray2[i].x + wallArray2[i].width){
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "up"){
// BY THOMAS OLAV
				playerY += playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "left"){
// BY THOMAS OLAV
				playerX += playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "down"){
// BY THOMAS OLAV
				playerY -= playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (dir == "right"){
// BY THOMAS OLAV
				playerX -= playerSpeed
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			noMoving()
// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function addTile(x1, x2, y1, y2, levelSelected, actualLevel){
// BY THOMAS OLAV

// BY THOMAS OLAV
	// Canvas is 14x14 tiles
// BY THOMAS OLAV

// BY THOMAS OLAV
	var x = x1; // making a new variable for x so that it can be reset later
// BY THOMAS OLAV

// BY THOMAS OLAV
	while(true){
// BY THOMAS OLAV

// BY THOMAS OLAV
		if(actualLevel == 1){
// BY THOMAS OLAV
			if(levelSelected == 1){
// BY THOMAS OLAV
				wallArrayLevelOne1.push(new Obs(x * 40, y1 * 40, 40, 40));
// BY THOMAS OLAV
			} else {
// BY THOMAS OLAV
				wallArrayLevelOne2.push(new Obs(x * 40, y1 * 40, 40, 40));
// BY THOMAS OLAV
			}
// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV
		if(actualLevel == 2){
// BY THOMAS OLAV
			if(levelSelected == 1){
// BY THOMAS OLAV
				wallArrayLevelTwo1.push(new Obs(x * 40, y1 * 40, 40, 40));
// BY THOMAS OLAV
			} else {
// BY THOMAS OLAV
				wallArrayLevelTwo2.push(new Obs(x * 40, y1 * 40, 40, 40));
// BY THOMAS OLAV
			}
// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV
		if(actualLevel == 3){
// BY THOMAS OLAV
			if(levelSelected == 1){
// BY THOMAS OLAV
				wallArrayLevelThree1.push(new Obs(x * 40, y1 * 40, 40, 40));
// BY THOMAS OLAV
			} else {
// BY THOMAS OLAV
				wallArrayLevelThree2.push(new Obs(x * 40, y1 * 40, 40, 40));
// BY THOMAS OLAV
			}
// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	x++
// BY THOMAS OLAV
	if (x > x2){
// BY THOMAS OLAV
		if (y1 >= y2){
// BY THOMAS OLAV
		return;
// BY THOMAS OLAV
		} else {
// BY THOMAS OLAV
			y1++
// BY THOMAS OLAV
			x = x1;
// BY THOMAS OLAV
		}
// BY THOMAS OLAV
	
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
	}
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function checkIfStuckInTile(){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	if (level1Selected){
// BY THOMAS OLAV

// BY THOMAS OLAV
		for(i = 0; i < wallArray1.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (Math.round(playerX / 40) == wallArray1[i].x / 40 && Math.round(playerY / 40) == wallArray1[i].y / 40){
// BY THOMAS OLAV
				console.log("u die WAAH WAAH WAAH");
// BY THOMAS OLAV
				DIE();
// BY THOMAS OLAV
			}
// BY THOMAS OLAV
			
// BY THOMAS OLAV
		}
// BY THOMAS OLAV
	} else {
// BY THOMAS OLAV

// BY THOMAS OLAV
		for(i = 0; i < wallArray2.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
			if (Math.round(playerX / 40) == wallArray2[i].x / 40 && Math.round(playerY / 40) == wallArray2[i].y / 40){
// BY THOMAS OLAV
				console.log("u die WAAH WAAH WAAH");
// BY THOMAS OLAV
				DIE();
// BY THOMAS OLAV
			}
// BY THOMAS OLAV
			
// BY THOMAS OLAV
		}
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
// You (liam JR) are smelly
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function moveHazards(){
// BY THOMAS OLAV

// BY THOMAS OLAV
	for(i = 0; i < hazArray.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
		hazArray[i].x += hazArray[i].xSpeed;
// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
	checkCollisionForHazards("x");
// BY THOMAS OLAV

// BY THOMAS OLAV
	for(i = 0; i < hazArray.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
		hazArray[i].y += hazArray[i].ySpeed;
// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
	checkCollisionForHazards("y");
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
//if(hazArray[i].x < -hazArray[i].width || hazArray[i].x > WIDTH + hazArray[i].width || hazArray[i].y < -hazArray[i].height || hazArray[i].y > HEIGHT + hazArray[i].height){
// BY THOMAS OLAV
//	hazArray.splice(i, 1);
// BY THOMAS OLAV
//	console.log("Haz died");
// BY THOMAS OLAV
//}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function checkCollisionForHazards(i){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	if (i == "x"){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
		for (hazNum = 0; hazNum < hazArray.length; hazNum++){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
			if (hazArray[hazNum].level == 1)
// BY THOMAS OLAV
			{
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
				for (wallNum = 0; wallNum < wallArray1.length; wallNum++){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray1[wallNum].x && hazArray[hazNum].x < wallArray1[wallNum].x + wallArray1[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray1[wallNum].y && hazArray[hazNum].y < wallArray1[wallNum].y + wallArray1[wallNum].height){
						// BY THOMAS OLAV

// BY THOMAS OLAV
						hazArray[hazNum].xSpeed *= -1;
						// BY THOMAS OLAV

// BY THOMAS OLAV
						hazArray[hazNum].x += hazArray[hazNum].xSpeed;
						// BY THOMAS OLAV

// BY THOMAS OLAV
						//console.log("hazard switch x");

// BY THOMAS OLAV
					}
// BY THOMAS OLAV
				
// BY THOMAS OLAV

// BY THOMAS OLAV
				
// BY THOMAS OLAV
				
// BY THOMAS OLAV
				}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
			} else {
// BY THOMAS OLAV

// BY THOMAS OLAV
				for (wallNum = 0; wallNum < wallArray2.length; wallNum++){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray2[wallNum].x && hazArray[hazNum].x < wallArray2[wallNum].x + wallArray2[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray2[wallNum].y && hazArray[hazNum].y < wallArray2[wallNum].y + wallArray2[wallNum].height){

// BY THOMAS OLAV
						hazArray[hazNum].xSpeed *= -1;
// BY THOMAS OLAV

// BY THOMAS OLAV
						hazArray[hazNum].x += hazArray[hazNum].xSpeed;
// BY THOMAS OLAV

// BY THOMAS OLAV
						//console.log("hazard switch x");
// BY THOMAS OLAV

// BY THOMAS OLAV
					}
// BY THOMAS OLAV
				
// BY THOMAS OLAV

// BY THOMAS OLAV
				
// BY THOMAS OLAV
				
// BY THOMAS OLAV
				}
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	// You play as Liam JR, who has lost his/her parental figure.

// BY THOMAS OLAV
	if (i == "y") {
// BY THOMAS OLAV

// BY THOMAS OLAV
		for (hazNum = 0; hazNum < hazArray.length; hazNum++){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
			if (hazArray[hazNum].level == 1)
// BY THOMAS OLAV
			{
// BY THOMAS OLAV

// BY THOMAS OLAV
				for (wallNum = 0; wallNum < wallArray1.length; wallNum++){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray1[wallNum].x && hazArray[hazNum].x < wallArray1[wallNum].x + wallArray1[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray1[wallNum].y && hazArray[hazNum].y < wallArray1[wallNum].y + wallArray1[wallNum].height){
					
// BY THOMAS OLAV
						hazArray[hazNum].ySpeed *= -1;
// BY THOMAS OLAV

// BY THOMAS OLAV
						hazArray[hazNum].y += hazArray[hazNum].ySpeed;
// BY THOMAS OLAV

// BY THOMAS OLAV
						console.log("hazard switch y");
// BY THOMAS OLAV

// BY THOMAS OLAV
					}
// BY THOMAS OLAV

// BY THOMAS OLAV
				}
// BY THOMAS OLAV

// BY THOMAS OLAV
			} else {
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
				for (wallNum = 0; wallNum < wallArray2.length; wallNum++){
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray2[wallNum].x && hazArray[hazNum].x < wallArray2[wallNum].x + wallArray2[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray2[wallNum].y && hazArray[hazNum].y < wallArray2[wallNum].y + wallArray2[wallNum].height){
					
// BY THOMAS OLAV
						hazArray[hazNum].ySpeed *= -1;
// BY THOMAS OLAV

// BY THOMAS OLAV
						hazArray[hazNum].y += hazArray[hazNum].ySpeed;
// BY THOMAS OLAV

// BY THOMAS OLAV
						console.log("hazard switch y");
// BY THOMAS OLAV

// BY THOMAS OLAV
					}
// BY THOMAS OLAV

// BY THOMAS OLAV
				}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
				
// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
		}
// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
 // BTW Big liam is your father
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	for (hazNum = 0; hazNum < hazArray.length; hazNum++){
// BY THOMAS OLAV

// BY THOMAS OLAV
// BY THOMAS OLAV

// BY THOMAS OLAV
		if (hazArray[hazNum].level == 1)
// BY THOMAS OLAV
		{
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
			if (level1Selected == 1 && hazArray[hazNum].x + hazArray[hazNum].width > playerX && hazArray[hazNum].x < playerX + PLAYER_WIDTH && hazArray[hazNum].y + hazArray[hazNum].height > playerY && hazArray[hazNum].y < playerY + PLAYER_HEIGHT){

// BY THOMAS OLAV
				DIE();
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV
				
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
		} else {
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
			if (!level1Selected == 1 && hazArray[hazNum].x + hazArray[hazNum].width > playerX && hazArray[hazNum].x < playerX + PLAYER_WIDTH && hazArray[hazNum].y + hazArray[hazNum].height > playerY && hazArray[hazNum].y < playerY + PLAYER_HEIGHT){

// BY THOMAS OLAV
				DIE();
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
		}
// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function DIE()
// BY THOMAS OLAV
// BY THOMAS OLAV
{
// BY THOMAS OLAV
// BY THOMAS OLAV
// BY THOMAS OLAV
	console.log("MAJOR L L FOR LIAM!?!?!??");
// BY THOMAS OLAV

// BY THOMAS OLAV
	LoadLevel(stageSelected);
// BY THOMAS OLAV

// BY THOMAS OLAV
	movingRight = false;	
// BY THOMAS OLAV
	movingLeft = false;	
// BY THOMAS OLAV
	movingUp = false;	
// BY THOMAS OLAV
	movingDown = false;
// BY THOMAS OLAV

// BY THOMAS OLAV
	moving = false;
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function LoadLevel(levelNum){
// BY THOMAS OLAV

// BY THOMAS OLAV
	console.log("LOADING LEVEL");
// BY THOMAS OLAV

// BY THOMAS OLAV
	level1Selected = true;
// BY THOMAS OLAV

// BY THOMAS OLAV
	movingRight = false;	
// BY THOMAS OLAV
	movingLeft = false;	
// BY THOMAS OLAV
	movingUp = false;	
// BY THOMAS OLAV
	movingDown = false;
// BY THOMAS OLAV

// BY THOMAS OLAV
	moving = false;
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	wallArray1.splice(0, wallArray1.length);
// BY THOMAS OLAV
	wallArray2.splice(0, wallArray2.length);
// BY THOMAS OLAV

// BY THOMAS OLAV
	switch(levelNum){
// BY THOMAS OLAV
		case (1):
// BY THOMAS OLAV

// BY THOMAS OLAV
			console.log("CASE 1 CALLED");
// BY THOMAS OLAV

// BY THOMAS OLAV
			liamEndx = liamEndx1;
// BY THOMAS OLAV
			liamEndy = liamEndy1;
// BY THOMAS OLAV

// BY THOMAS OLAV
			playerX = startPlayerX1;
// BY THOMAS OLAV
			playerY = startPlayerY1;
// BY THOMAS OLAV

// BY THOMAS OLAV
			for(i = 0; i < wallArrayLevelOne1.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
				wallArray1.push(wallArrayLevelOne1[i]);
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			for(i = 0; i < wallArrayLevelOne2.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
				wallArray2.push(wallArrayLevelOne2[i]);
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
		break;
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
		case (2):
// BY THOMAS OLAV

// BY THOMAS OLAV
			console.log("CASE 2 CALLED");
// BY THOMAS OLAV

// BY THOMAS OLAV
			liamEndx = liamEndx2;
// BY THOMAS OLAV
			liamEndy = liamEndy2;
// BY THOMAS OLAV

// BY THOMAS OLAV
			playerX = startPlayerX2;
// BY THOMAS OLAV
			playerY = startPlayerY2;
// BY THOMAS OLAV

// BY THOMAS OLAV
			for(i = 0; i < wallArrayLevelTwo1.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
				wallArray1.push(wallArrayLevelTwo1[i]);
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			for(i = 0; i < wallArrayLevelTwo2.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
				wallArray2.push(wallArrayLevelTwo2[i]);
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
		break;
// BY THOMAS OLAV

// BY THOMAS OLAV
		case (3):
// BY THOMAS OLAV

// BY THOMAS OLAV
			console.log("CASE 3 CALLED");
// BY THOMAS OLAV

// BY THOMAS OLAV
			liamEndx = liamEndx3;
// BY THOMAS OLAV
			liamEndy = liamEndy3;
// BY THOMAS OLAV

// BY THOMAS OLAV
			playerX = startPlayerX3;
// BY THOMAS OLAV
			playerY = startPlayerY3;
// BY THOMAS OLAV

// BY THOMAS OLAV
			for(i = 0; i < wallArrayLevelThree1.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
				wallArray1.push(wallArrayLevelThree1[i]);
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
			for(i = 0; i < wallArrayLevelThree2.length; i++){
// BY THOMAS OLAV

// BY THOMAS OLAV
				wallArray2.push(wallArrayLevelThree2[i]);
// BY THOMAS OLAV

// BY THOMAS OLAV
			}
// BY THOMAS OLAV

// BY THOMAS OLAV
		break;
// BY THOMAS OLAV

// BY THOMAS OLAV
		case (4):
// BY THOMAS OLAV

// BY THOMAS OLAV
		won = true;
// BY THOMAS OLAV

// BY THOMAS OLAV
		break;
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
	}
// BY THOMAS OLAV

// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV

// BY THOMAS OLAV
function YOU_WIN(){
// BY THOMAS OLAV

// BY THOMAS OLAV
	stageSelected++
// BY THOMAS OLAV
	LoadLevel(stageSelected);
// BY THOMAS OLAV
}
// BY THOMAS OLAV

// BY THOMAS OLAV