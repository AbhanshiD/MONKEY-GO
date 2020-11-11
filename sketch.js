var bananaImage , obstacleImage , obstacleGroup , backgrounds , score , monkey , survivalTime , ground , monkeyAnimation,banana , stoneImage; 

function preload() {
  
  bananaImage = loadImage ("banana.png");
  
  backgroundImage = loadImage ("jungle.jpg");
  monkeyAnimation=loadAnimation("Monkey_01.png", "Monkey_02.png", 
"Monkey_03.png", "Monkey_04.png", "Monkey_05.png", "Monkey_06.png", "Monkey_07.png", "Monkey_08.png", "Monkey_09.png", "Monkey_10.png");
  stoneImage=loadImage("stone.png");
  
}

function setup() {
  createCanvas(400, 400);
  
  backgrounds = createSprite(400,350,800,10);
  backgrounds.addImage(backgroundImage);
  backgrounds.velocityX = -4;
  backgrounds.x = width/2;
  
  ground = createSprite(400,350,800,10);
  ground.velocityX = -4;
  ground.x = ground.width/2;
  ground.visible = false ;
  
  monkey = createSprite(62,325,2,8);
  monkey.addAnimation("monkeyRunning",monkeyAnimation);
  monkey.scale = 0.1;
    
  obstacleGroup = new Group();
  bananaGroup = new Group();
  
  survivalTime =0;
}

function draw() {
  background(220);
  
   textSize(20);
   text("score:" + score,305,28);
    
    if (ground.x < 0) {
  ground.x = ground.width/2; 
  } 
  
  if (backgrounds.x < 0) {
  backgrounds.x = backgrounds.width/2; 
  } 
  
  if (keyDown('space') ) {
  monkey.velocityY = -20;
  } 
  
  monkey.velocityY = monkey.velocityY+1;
  
  monkey.collide( ground);

  if (bananaGroup.isTouching(monkey)){
      bananaGroup.destroyEach();
      score = score+2;
  
  switch (score){
     
    case  10 : monkey.scale = 0.12;
         break;
    case  20 : monkey.scale = 0.14;
         break;
    case  30 : monkey.scale = 0.16;
         break;
    case  40 : monkey.scale = 0.18;
         break;
    default : break ;
  }
  }
  
  if (obstacleGroup.isTouching(monkey)){
      obstacleGroup.destroyEach();
      score = score-2;
  }
  
    
  switch (score){
     
    case  10 : monkey.scale = 0.12;
         break;
    case  20 : monkey.scale = 0.12;
         break;
    case  30 : monkey.scale = 0.12;
         break;
    case  40 : monkey.scale = 0.12;
         break; 
    default : break ;
  }
    
    spawnstone();
    spawnbanana();
    
   drawSprites();
}

function spawnstone() {
if (frameCount % 300 == 0) {
var stone = createSprite(400,325,2,2);
stone.addImage(stoneImage);
stone.scale = 0.15;
stone.velocityX = -3;
stone.lifetime = 200;
  stone.debug = true; 
obstacleGroup.add(stone);
  stone.setCollider("circle",0,0,80);
}
}   

function spawnbanana() {
if (frameCount % 80 == 0) {
var banana = createSprite(400,random(120,200),2,2);
banana.addImage(bananaImage);
banana.scale = 0.05;
banana.velocityX = -3;
banana.lifetime = 200;
bananaGroup.add(banana);
}
}   
