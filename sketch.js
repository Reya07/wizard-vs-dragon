var wizard, wizardImg;
var dragon, dragon1, dragonImg1, dragonImg;
var background, bgImg;
var fire, fireImg;

var dragonGroup;
var fireGroup;

var gameState = "PLAY";

var score = 0;

var restart, restartImg;



function preload() {
wizardImg = loadImage("wizard.png");
fireImg = loadImage("fire.png");

dragonImg = loadImage("dragon.gif");
dragonImg1 = loadImage("greendragon.png");

bgImg = loadImage("castlebg.jpg");

restartImg = loadImage("restart.png");


}



function setup() {
  createCanvas(windowWidth, windowHeight);

  wizard = createSprite(100, 50, 25, 25);
  wizard.addImage(wizardImg);
  wizard.scale = 0.3;


  dragonGroup = createGroup();
  dragon1Group = createGroup();
  fireGroup = createGroup();


}

function draw() {
background(bgImg);

fill("black");
textSize(20);
text("score = " + score, 50, 50);

if (gameState === "PLAY") {

  wizard.velocityX = 0;
  wizard.y = mouseY;

  if(mousePressedOver(wizard)) {

    fire = createSprite(wizard.x, wizard.y, 25, 25);
    fire.addImage(fireImg);
    fire.scale = 0.1;

    fire.velocityX = 3;
    fireGroup.add(fire);
  }

  if(fireGroup.isTouching(dragon)) {

    score = score + 5;
  }
  else if(fireGroup.isTouching(dragon1)) {
  
  score = score - 5;

  }



}



dragonsGroup();
dragons1Group();
drawSprites();
}

function dragonsGroup() {

  if(frameCount % 50 === 0) {
    dragon = createSprite(width, 100, 25, 25);
    dragon.addImage(dragonImg);
    dragon.scale = 0.5;
    dragon.velocityX = -4;
    dragon.y = Math.round(random(100, height-100));
  

  }

}

function dragons1Group() {

  if(frameCount % 50 === 0) {
  dragon1 = createSprite(width, 350, 25, 25);
  dragon1.addImage(dragonImg1);
  dragon1.scale = 0.2;
  dragon1.velocityX = -4;
  dragon1.y = Math.round(random(100, height-100));
  }


}

