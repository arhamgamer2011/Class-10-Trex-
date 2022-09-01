var trex ,trex_running;
var ground,groundImage;

var edges;

function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  groundImage = loadImage("ground2.png");

}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  ground = createSprite(300,180,600,20);
  ground.addImage("ground", groundImage)
  ground.x = ground.width / 2;

  edges = createEdgeSprites();
 
}

function draw(){
  background("white");

  ground.velocityX = -8;
  console.log(ground.x);

  if(ground.x < 0){
    ground.x = ground.width / 2;
  }

  if (keyDown("space")) {
    trex.velocityY = -10;    
  }
  trex.velocityY = trex.velocityY + 0.8;
  trex.collide(ground);

  drawSprites();
}
