var guitarCube, axe, enemy, cannon, sword, platform1, fakePlatform, platform2, platform3, platform4, platform5, platform6, platform7, platform8;
var cubeImg, axeImg, swordImg, gameOverImg;
var lava;
var gameOvertxt;

var PLAY = 1;
var WIN = 2;
var END = 3;
var gameState = PLAY;
var winTxt;
var winningDoor;

function preload () {

cubeImg = loadImage("images/guitar.png");
bgImg = loadImage("images/bg2.jpg");
winImg = loadImage("images/win.jpg");
gameOverImg = loadImage("images/gamoover.png")
}

function setup() {
  createCanvas(1200,400);
   platform1 = createSprite(0 ,300 , 300, 15);
  platform2 = createSprite(220, 280, 100 ,15);
  platform3 = createSprite(350,260,100,15);
  platform4 = createSprite(470,240,100,15);
  platform5 = createSprite(590,220,100,15);

  platform6 = createSprite(690,280,100,15);
  platform7 = createSprite(850,260,100,15);
  platform8 = createSprite(1050,220,100,15);
 winningDoor = createSprite(1050,200,50,50);
  winningDoor.shapeColor = "brown";
  fakePlatform = createSprite(740,200,100,15);
  lava = createSprite(400,375,1600,50);

gameOvertxt = createSprite(600,200,50,50);
gameOvertxt.addImage("gamoover", gameOverImg);
gameOvertxt.scale = 0.2;

winTxt = createSprite(600,200,50,50);
winTxt.addImage("win", winImg) ;
winTxt.scale = 0.2;

  guitarCube = createSprite(40, 270, 15, 15);
  guitarCube.addImage(cubeImg);
  guitarCube.scale = 0.2
  
  
}

function draw() {
  background("bg2");

 if(gameState = PLAY) {
 


platform6.visible = false;
platform7.visible = false;


 winTxt.visible = false;
gameOvertxt.visible = false;


  if(keyIsDown(UP_ARROW))  {
    guitarCube.x += 2;
  }

  
  if(keyIsDown(DOWN_ARROW))  {
    guitarCube.x -= 2;
  }



  if(keyDown("space")&& guitarCube.y >= 50) {
    guitarCube.velocityY = -5;
    
  }
  guitarCube.velocityY = guitarCube.velocityY + 0.8
 }

if(guitarCube.collide(platform6)) {
   platform6.visible = true;
 }
  
 if(guitarCube.collide(platform7)) {
  platform7.visible = true;
}


  if(gameState = END) {
    if(guitarCube.y >= 350) {

      guitarCube.velocityY = 0;
      gameOvertxt.visible = true;
      }
  }

  

  if(gameState = WIN) {
    if(guitarCube.isTouching(winningDoor)) {
      winTxt.visible = true;
      guitarCube.velocityY = 0;
    }
  }

  guitarCube.collide(platform1);
  guitarCube.collide(platform2);
  guitarCube.collide(platform3);
  guitarCube.collide(platform4);
  guitarCube.collide(platform5);
  guitarCube.collide(platform8);
  
  
 

  lava.shapeColor = "orange";
  drawSprites();
}

