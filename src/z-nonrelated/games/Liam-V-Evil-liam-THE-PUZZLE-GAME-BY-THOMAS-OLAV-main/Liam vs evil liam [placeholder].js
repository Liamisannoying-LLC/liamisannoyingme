/**
* Title: Liam vs evil liam
* Author: Thomas Olav
* Date: 21/03/2024
* Version: -
**/

const HEIGHT = 600;
const WIDTH = 600;
const backGroundColor = "PapayaWhip";

const LVL1BGCOLOR = "PapayaWhip";
const LVL1OBSCOLOR = "NavajoWhite";

const LVL2BGCOLOR = "Black";
const LVL2OBSCOLOR = "Violet";

const LVL1DISABLEDOBSCOLOR = "LightGrey";
const LVL2DISABLEDOBSCOLOR = "White";

const PLAYER_HEIGHT = 40;
const PLAYER_WIDTH = 40;
const playerColor = "pink";

const wallColor = "SkyBlue";

var won = false;

var liamHappyImage = new Image()
liamHappyImage.src = "Liam Happy.png"

var liamAngryImage = new Image()
liamAngryImage.src = "Liam Angry.png"

var liamAngry1900Image = new Image()
liamAngry1900Image.src = "Liam Angry 1900s edition.png"

var winScreenImage = new Image()
winScreenImage.src = "WIN SCREEN.png"

var playerSpeed = 10

var upPressed = false
var downPressed = false
var leftPressed = false
var rightPressed = false

var moving = false

var movingUp = false
var movingDown = false
var movingLeft = false
var movingRight = false

var startPlayerX1 = 40;
var startPlayerY1 = 40;

var startPlayerX2 = 480;
var startPlayerY2 = 480;

var startPlayerX3 = 520;
var startPlayerY3 = 40;

var playerX = 40;
var playerY = 40;

var level1Selected = true;

var wallArray1 = [];
var wallArray2 = [];

var wallArrayLevelOne1 = [];
var wallArrayLevelOne2 = [];

var wallArrayLevelTwo1 = [];
var wallArrayLevelTwo2 = [];

var wallArrayLevelThree1 = [];
var wallArrayLevelThree2 = [];

var stageSelected = 1;

var hazSize = 40;

const LIAM_END_WIDTH = 100;
const LIAM_END_HEIGHT = 100;

var liamEndx = 430;
var liamEndy = 50;

var liamEndx1 = 430;
var liamEndy1 = 50;

var liamEndx2 = 80;
var liamEndy2 = 80;

var liamEndx3 = 250;
var liamEndy3 = 200;

var hazArray = [];
var hazColor = "red";

liamHappyImage.onload=startCanvas

function startCanvas(){
	ctx=document.getElementById("myCanvas").getContext("2d")
	timer = setInterval(updateCanvas, 10);

	addTile(0, 14, 0, 0, 1, 1); 
	addTile(0, 14, 14, 0, 1, 1); 
	addTile(0, 0, 0, 14, 1, 1); 
	addTile(14, 0, 0, 14, 1, 1); 

	addTile(0, 14, 0, 0, 2, 1); 
	addTile(0, 14, 14, 0, 2, 1); 
	addTile(0, 0, 0, 14, 2, 1); 
	addTile(14, 0, 0, 14, 2, 1); 

	addTile(0, 14, 0, 0, 1, 2); 
	addTile(0, 14, 14, 0, 1, 2); 
	addTile(0, 0, 0, 14, 1, 2); 
	addTile(14, 0, 0, 14, 1, 2); 

	addTile(0, 14, 0, 0, 2, 2); 
	addTile(0, 14, 14, 0, 2, 2); 
	addTile(0, 0, 0, 14, 2, 2); 
	addTile(14, 0, 0, 14, 2, 2); 

	addTile(0, 14, 0, 0, 1, 3); 
	addTile(0, 14, 14, 0, 1, 3); 
	addTile(0, 0, 0, 14, 1, 3); 
	addTile(14, 0, 0, 14, 1, 3); 

	addTile(0, 14, 0, 0, 2, 3); 
	addTile(0, 14, 14, 0, 2, 3); 
	addTile(0, 0, 0, 14, 2, 3); 
	addTile(14, 0, 0, 14, 2, 3); 

	if (1 == 1){
		addTile(1, 7, 3, 4, 1, 1); 
		addTile(8, 9, 1, 7, 1, 1); 
		addTile(7, 9, 10, 13, 1, 1); 
		addTile(7, 13, 10, 11, 1, 1); 
		addTile(10, 13, 4, 4, 1, 1); 
		addTile(11, 13, 7, 7, 1, 1); 
		addTile(2, 2, 6, 12, 1, 1); 

		addTile(1, 4, 3, 4, 2, 1); 
		addTile(8, 9, 1, 7, 2, 1); 
		addTile(6, 9, 10, 11, 2, 1); 
		addTile(10, 13, 7, 7, 2, 1); 
		addTile(2, 2, 6, 12, 2, 1); 

		addTile(4, 4, 13, 13, 1, 2); 
		addTile(3, 6, 10, 10, 1, 2); 
		addTile(3, 4, 6, 6, 1, 2); 
		addTile(9, 9, 9, 11, 1, 2); 
		addTile(9, 11, 9, 9, 1, 2); 
		addTile(8, 8, 6, 7, 1, 2); 

		addTile(9, 13, 9, 13, 2, 2); 
		addTile(5, 5, 8, 8, 2, 2); 
		addTile(2, 4, 5, 6, 2, 2); 
		addTile(3, 4, 10, 10, 2, 2); 
		addTile(6, 6, 10, 10, 2, 2); 
		addTile(9, 9, 1, 1, 2, 2); 

		addTile(10, 10, 1, 7, 1, 3); 
		addTile(10, 10, 10, 10, 1, 3); 
		addTile(13, 13, 10, 10, 1, 3); 
		addTile(10, 10, 13, 13, 1, 3); 
	addTile(2, 3, 9, 9, 1, 3); 
	addTile(1, 1, 12, 12, 1, 3);  
	addTile(11, 11, 5, 5, 1, 3); 
	addTile(8, 11, 10, 11, 1, 3); 
	addTile(6, 7, 10, 10, 1, 3); 
	addTile(3, 5, 5, 7, 1, 3); 
	addTile(6, 8, 7, 7, 1, 3); 
	addTile(8, 8, 2, 2, 1, 3); 
	
	addTile(10, 10, 1, 10, 2, 3); 
	addTile(10, 14, 5, 5, 2, 3); 
	addTile(10, 10, 13, 13, 2, 3); 
	addTile(13, 13, 10, 10, 2, 3); 
	addTile(11, 11, 6, 6, 2, 3); 
	addTile(9, 9, 5, 9, 2, 3); 
	addTile(5, 5, 3, 3, 2, 3); 
	addTile(6, 8, 7, 7, 2, 3); 
	addTile(3, 3, 5, 5, 2, 3); 

	hazArray.push(new Haz(460, 100, 80, 40, 1, 0, 1));
	hazArray.push(new Haz(160, 360, 40, 40, 1, 0, 1));
	hazArray.push(new Haz(120, 120, 40, 80, 0, 1, 1));
	hazArray.push(new Haz(40, 40, 40, 40, 1, 0, 1));

	hazArray.push(new Haz(120, 400, 40, 40, 0, 1, 2));
	hazArray.push(new Haz(120, 440, 40, 40, 1, 0, 2));
	hazArray.push(new Haz(120, 120, 40, 80, 0, 1, 2));

	LoadLevel(1);

}

function updateCanvas(){

	if(won == false)
			{
		moveObs();

		if(level1Selected){
			ctx.fillStyle = LVL1BGCOLOR;
		} else {
			ctx.fillStyle = LVL2BGCOLOR;
		}
		ctx.fillRect(0, 0, WIDTH, HEIGHT);

		if(level1Selected){
			drawAllLevel2Walls(LVL2DISABLEDOBSCOLOR);

				if(stageSelected == 3){
				for(i = 0; i < hazArray.length; i++){	
					if(hazArray[i].level == 2)
					{
					renderImage(liamAngry1900Image, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);
					}
				}
			}
		} else {
			drawAllLevel1Walls(LVL1DISABLEDOBSCOLOR);

				if(stageSelected == 3){
				for(i = 0; i < hazArray.length; i++){	
					if(hazArray[i].level == 1)
					{
					renderImage(liamAngry1900Image, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);	
					}
			}
			renderImage(liamAngry1900Image, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);
			renderImage(liamHappyImage, playerX - 6, playerY - 8, PLAYER_WIDTH * 1.3, PLAYER_HEIGHT * 1.5, playerX / 100 + playerY / 100);
			renderImage(liamHappyImage, liamEndx - 20, liamEndy - 20, LIAM_END_WIDTH + 40, LIAM_END_HEIGHT + 50, 0);
			if(stageSelected == 3){
				moveHazards();
			}
		} else {
			drawAllLevel1Walls(LVL1DISABLEDOBSCOLOR);
			if(stageSelected == 3){
				for(i = 0; i < hazArray.length; i++){
					if(hazArray[i].level == 1)
						renderImage(liamAngry1900Image, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);	
				}
			}
			drawAllLevel2Walls(LVL2OBSCOLOR);
			if(stageSelected == 3){
				for(i = 0; i < hazArray.length; i++){
					if(hazArray[i].level == 2)
						renderImage(liamHappyImage, hazArray[i].x - hazArray[i].width / 1.1, hazArray[i].y - hazArray[i].height / .9, hazArray[i].width * 3, hazArray[i].height * 3);	
				}
			}
		}
	} else {
		renderImage(winScreenImage, 0, 0, 600, 600, 0);
	}
	ctx.fillStyle = playerColor;
	renderImage(liamHappyImage, liamEndx - 20, liamEndy - 20, LIAM_END_WIDTH + 40, LIAM_END_HEIGHT + 50, 0);
	if (keyDown =="r" && gameOver){
		hazArray = [];
		gameOver = false;
		playerX = (WIDTH - PLAYER_WIDTH) / 2;
		playerY = (HEIGHT - PLAYER_HEIGHT) / 2;
		score = 0;
		playerHealth = 3;
	}
	if (keyDown == " " && !moving){
		level1Selected = !level1Selected;
		checkIfStuckInTile();
	}
	if (keyUp =="w" || keyUp =="ArrowUp"){
		upPressed = false
	} else if (keyUp =="a" || keyUp =="ArrowLeft"){
		leftPressed = false
	} else if (keyUp =="s" || keyUp =="ArrowDown"){
		downPressed = false
	} else if (keyUp =="d" || keyUp =="ArrowRight"){
		rightPressed = false
	}
	if(moving){
		if(movingUp){
			playerY -= playerSpeed
			checkCollision("up");
		} else{
		if(movingLeft){
			playerX -= playerSpeed
			checkCollision("left");
		} else{
		if(movingDown){
			playerY += playerSpeed
			checkCollision("down");
		} else{
	if(movingRight){
		playerX += playerSpeed
		checkLvl2Collision("right");
	}
}}
if (!moving){
	if(upPressed){
		movingUp = true;
		moving = true;
	} else{
		if(leftPressed){
			movingLeft = true;
			moving = true;
		} else{
			if(downPressed){
				movingDown = true;
				moving = true;
			} else{
				if(rightPressed){
					movingRight = true;
					moving = true;
				}
			}
		}
	}
}}
}}
if (playerY + PLAYER_HEIGHT > liamEndy && playerY < liamEndy + LIAM_END_HEIGHT && playerX + PLAYER_WIDTH > liamEndx && playerX < liamEndx + LIAM_END_WIDTH){
	console.log("YOU WINN!!!!");
	YOU_WIN();
}

if (level1Selected){
	checkLvl1Collision(dir);
} else {
	checkLvl2Collision(dir);
}

function noMoving(){
	moving = false;
	movingUp = false;
	movingDown = false;
	movingLeft = false;
	movingRight = false;
}

function takeDamage(){
	playerHealth --;
	if (playerHealth <= 0){
		gameOver = true;
	}
}

class Obs{
	constructor(x, y, width, height, color = wallColor){
		this.x = x
		this.y = y
		this.width = width
		this.height = height
		this.color = color
	}
}

class Haz{
	constructor(x, y, width, height, xSpeed, ySpeed, level, color = hazColor){
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.xSpeed = xSpeed;
		this.ySpeed = ySpeed;
		this.color = color;
		this.level = level;
	}
}

function easyText(font, color, textX, textY, text){
	ctx.font = font;
	ctx.fillStyle = color;
	ctx.fillText(text, textX, textY);
}
function easyText(font, color, textX, textY, text){
	ctx.font = font;
	ctx.fillStyle = color;
	ctx.fillText(text, textX, textY);
}

function drawAllLevel1Walls(color){
	for(i = 0; i < wallArray1.length; i++){
		ctx.fillStyle = color;
		ctx.fillRect(wallArray1[i].x, wallArray1[i].y, wallArray1[i].width, wallArray1[i].height);
	}
}

function drawAllLevel2Walls(color){
	for(i = 0; i < wallArray2.length; i++){
		ctx.fillStyle = color;
		ctx.fillRect(wallArray2[i].x, wallArray2[i].y, wallArray2[i].width, wallArray2[i].height);
	}
}

function checkLvl1Collision(dir){
	for (i = 0; i < wallArray1.length; i++){
		if (playerY + PLAYER_HEIGHT > wallArray1[i].y && playerY < wallArray1[i].y + wallArray1[i].height && playerX + PLAYER_WIDTH > wallArray1[i].x && playerX < wallArray1[i].x + wallArray1[i].width){
			if (dir == "up"){
				playerY += playerSpeed
			}
			if (dir == "left"){
				playerX += playerSpeed
			}
			if (dir == "down"){
				playerY -= playerSpeed
			}
			if (dir == "right"){
				playerX -= playerSpeed
			}
			noMoving()
		}
	}
}

function checkLvl2Collision(dir){
	for (i = 0; i < wallArray2.length; i++){
		if (playerY + PLAYER_HEIGHT > wallArray2[i].y && playerY < wallArray2[i].y + wallArray2[i].height && playerX + PLAYER_WIDTH > wallArray2[i].x && playerX < wallArray2[i].x + wallArray2[i].width){
			if (dir == "up"){
				playerY += playerSpeed
			}
			if (dir == "left"){
				playerX += playerSpeed
			}
			if (dir == "down"){
				playerY -= playerSpeed
			}
			if (dir == "right"){
				playerX -= playerSpeed
			}
			noMoving()
		}
	}
}
function addTile(x1, x2, y1, y2, levelSelected, actualLevel){
	var x = x1; 
	while(true){
		if(actualLevel == 1){
			if(levelSelected == 1){
				wallArrayLevelOne1.push(new Obs(x * 40, y1 * 40, 40, 40));
			} else {
				wallArrayLevelOne2.push(new Obs(x * 40, y1 * 40, 40, 40));
			}
		}
		if(actualLevel == 2){
			if(levelSelected == 1){
				wallArrayLevelTwo1.push(new Obs(x * 40, y1 * 40, 40, 40));
			} else {
				wallArrayLevelTwo2.push(new Obs(x * 40, y1 * 40, 40, 40));
			}
		}
		if(actualLevel == 3){
			if(levelSelected == 1){
				wallArrayLevelThree1.push(new Obs(x * 40, y1 * 40, 40, 40));
			} else {
				wallArrayLevelThree2.push(new Obs(x * 40, y1 * 40, 40, 40));
			}
		}
		x++
		if (x > x2){
			if (y1 >= y2){
				return;
			} else {
				y1++
				x = x1;
			}
		}
	}
}
function checkIfStuckInTile(){
	if (level1Selected){
		for(i = 0; i < wallArray1.length; i++){
			if (Math.round(playerX / 40) == wallArray1[i].x / 40 && Math.round(playerY / 40) == wallArray1[i].y / 40){
				DIE();
			}
		}
	} else {
		for(i = 0; i < wallArray2.length; i++){
			if (Math.round(playerX / 40) == wallArray2[i].x / 40 && Math.round(playerY / 40) == wallArray2[i].y / 40){
				DIE();
			}
		}
	}
}
function moveHazards(){
	for(i = 0; i < hazArray.length; i++){
		hazArray[i].x += hazArray[i].xSpeed;
	}
	checkCollisionForHazards("x");
	for(i = 0; i < hazArray.length; i++){
		hazArray[i].y += hazArray[i].ySpeed;
	}
	checkCollisionForHazards("y");
}
function checkCollisionForHazards(i){
	if (i == "x"){
		for (hazNum = 0; hazNum < hazArray.length; hazNum++){
			if (hazArray[hazNum].level == 1)
			{
				for (wallNum = 0; wallNum < wallArray1.length; wallNum++){
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray1[wallNum].x && hazArray[hazNum].x < wallArray1[wallNum].x + wallArray1[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray1[wallNum].y && hazArray[hazNum].y < wallArray1[wallNum].y + wallArray1[wallNum].height){
						hazArray[hazNum].xSpeed *= -1;
						hazArray[hazNum].x += hazArray[hazNum].xSpeed;
					}
				}
			}
		}
	}
}
			if (hazArray[hazNum].level == 1)
			{
				for (wallNum = 0; wallNum < wallArray1.length; wallNum++){
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray1[wallNum].x && hazArray[hazNum].x < wallArray1[wallNum].x + wallArray1[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray1[wallNum].y && hazArray[hazNum].y < wallArray1[wallNum].y + wallArray1[wallNum].height){
						hazArray[hazNum].xSpeed *= -1;
						hazArray[hazNum].x += hazArray[hazNum].xSpeed;
					}
				}
			} else {
				for (wallNum = 0; wallNum < wallArray2.length; wallNum++){
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray2[wallNum].x && hazArray[hazNum].x < wallArray2[wallNum].x + wallArray2[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray2[wallNum].y && hazArray[hazNum].y < wallArray2[wallNum].y + wallArray2[wallNum].height){
						hazArray[hazNum].xSpeed *= -1;
						hazArray[hazNum].x += hazArray[hazNum].xSpeed;
					}
				}
			}
		}
	}
	if (i == "y") {
		for (hazNum = 0; hazNum < hazArray.length; hazNum++){
			if (hazArray[hazNum].level == 1)
			{
				for (wallNum = 0; wallNum < wallArray1.length; wallNum++){
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray1[wallNum].x && hazArray[hazNum].x < wallArray1[wallNum].x + wallArray1[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray1[wallNum].y && hazArray[hazNum].y < wallArray1[wallNum].y + wallArray1[wallNum].height){
						hazArray[hazNum].ySpeed *= -1;
						hazArray[hazNum].y += hazArray[hazNum].ySpeed;
					}
				}
			} else {
				for (wallNum = 0; wallNum < wallArray2.length; wallNum++){
					if (hazArray[hazNum].x + hazArray[hazNum].width > wallArray2[wallNum].x && hazArray[hazNum].x < wallArray2[wallNum].x + wallArray2[wallNum].width && hazArray[hazNum].y + hazArray[hazNum].height > wallArray2[wallNum].y && hazArray[hazNum].y < wallArray2[wallNum].y + wallArray2[wallNum].height){
						hazArray[hazNum].ySpeed *= -1;
						hazArray[hazNum].y += hazArray[hazNum].ySpeed;
					}
				}
			}
		}
	}
	for (hazNum = 0; hazNum < hazArray.length; hazNum++){
		if (hazArray[hazNum].level == 1)
		{
			if (level1Selected == 1 && hazArray[hazNum].x + hazArray[hazNum].width > playerX && hazArray[hazNum].x < playerX + PLAYER_WIDTH && hazArray[hazNum].y + hazArray[hazNum].height > playerY && hazArray[hazNum].y < playerY + PLAYER_HEIGHT){
				DIE();
			}
				
		} else {
			if (!level1Selected == 1 && hazArray[hazNum].x + hazArray[hazNum].width > playerX && hazArray[hazNum].x < playerX + PLAYER_WIDTH && hazArray[hazNum].y + hazArray[hazNum].height > playerY && hazArray[hazNum].y < playerY + PLAYER_HEIGHT){
				DIE();
			}
		}
	}
	LoadLevel(stageSelected);
	movingRight = false;	
	movingLeft = false;	
	movingUp = false;	
	movingDown = false;
	moving = false;
	wallArray1.splice(0, wallArray1.length);
	wallArray2.splice(0, wallArray2.length);
	switch(levelNum){
		case (1):
			liamEndx = liamEndx1;
			liamEndy = liamEndy1;
			playerX = startPlayerX1;
			playerY = startPlayerY1;
			for(i = 0; i < wallArrayLevelOne1.length; i++){
				wallArray1.push(wallArrayLevelOne1[i]);
			}
			for(i = 0; i < wallArrayLevelOne2.length; i++){
				wallArray2.push(wallArrayLevelOne2[i]);
			}
		break;
		case (2):
			liamEndx = liamEndx2;
			liamEndy = liamEndy2;
			playerX = startPlayerX2;
			playerY = startPlayerY2;
			for(i = 0; i < wallArrayLevelTwo1.length; i++){
				wallArray1.push(wallArrayLevelTwo1[i]);
			}
			for(i = 0; i < wallArrayLevelTwo2.length; i++){
				wallArray2.push(wallArrayLevelTwo2[i]);
			}
		break;
		case (3):
			liamEndx = liamEndx3;
			liamEndy = liamEndy3;
			playerX = startPlayerX3;
			playerY = startPlayerY3;
			for(i = 0; i < wallArrayLevelThree1.length; i++){
				wallArray1.push(wallArrayLevelThree1[i]);
			}
			for(i = 0; i < wallArrayLevelThree2.length; i++){
				wallArray2.push(wallArrayLevelThree2[i]);
			}
		break;
		case (4):
		won = true;
		break;
	}
}
function DIE()
{
	LoadLevel(stageSelected);
	movingRight = false;	
	movingLeft = false;	
	movingUp = false;	
	movingDown = false;
	moving = false;
}
function LoadLevel(levelNum){
	level1Selected = true;
	movingRight = false;	
	movingLeft = false;	
	movingUp = false;	
	movingDown = false;
	moving = false;
	wallArray1.splice(0, wallArray1.length);
	wallArray2.splice(0, wallArray2.length);
	switch(levelNum){
		case (1):
			
