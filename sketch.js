
function preload(){
  //pre-load images
  pathImg = loadImage("path.png");
  runnerImg = loadAnimation("Runner-1.png", "Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  path = createSprite(200,200);
  path.addImage(pathImg);
  path.velocityY = 4;
  path.scale = 1.2;

  runner = createSprite(200,300);
  runner.addAnimation("TomRunning", runnerImg);
  runner.scale = 0.1;

  leftBoundary = createSprite(20,10,10,800);
  leftBoundary.visible = false;
  rightBoundary = createSprite(380,10,10,800);
  rightBoundary.visible = false;




  
}

function draw() {
  background(0);

  if(path.y > 400){
    path.y = height/2;
  }

  runner.x = mouseX;

  runner.collide(leftBoundary);
  runner.collide(rightBoundary);

  


  drawSprites();

}
