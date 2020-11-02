
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage;
var ground, groundImage;
var bananaGroup, obstacleGroup
var score = 0;
var survivalTime = 0;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  monkey = createSprite(80, 315, 20, 20);
  monkey.addAnimation("monkey_running", monkey_running);
  monkey.scale = 0.1;

  ground = createSprite(400, 390, 900, 10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  console.log(ground.x);

  bananaGroup = new Group();
  obstacleGroup = new Group();
  
}


function draw() {
  background("white");
if (keyDown("space")){
  monkey.velocityY = -7;
  }
  monkey.velocityY = monkey.velocityY + 0.8; 
  ground.x = ground.width/2;
  monkey.collide(ground);
  
  if (monkey.isTouching(bananaGroup)){
    score = score + 1;
    bananaGroup.destroyEach();
  }
  
  stroke("black");
  fill("black");
  textSize(20);
  text("score " + score, 300, 50);
  
  stroke("black");
  fill("black");
  textSize(20);
  survivalTime = Math.ceil(frameCount/frameRate());
  text("survival time " + survivalTime, 100, 50)
food();
  obstacles();
  drawSprites();
}

function food(){
  if(frameCount % 80 === 0){
    banana = createSprite(200,200,20,20);
    banana.addImage("bananaImage", bananaImage);
    banana.scale = 0.1;
    banana.y = Math.round(random(120,200));
    banana.velocityX = -2;
    banana.lifetime = 200;
    bananaGroup.add(banana);
  }
}

function obstacles(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(200, 180, 20, 20);
    obstacle.addImage ("obstacleImage", obstacleImage);
    obstacle.scale = 0.1;
    obstacle.velocityX = -2;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);
  }
}






