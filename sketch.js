var movingrect,fixedrect;

function setup() {
  createCanvas(800,800);
  fixedrect = createSprite(400,200,60,40);
  fixedrect.debug = true;
  fixedrect.shapeColor = "green";
  fixedrect.velocityY = 5;

  movingrect = createSprite(400,600,40,60);
  movingrect.debug = true;
  movingrect.shapeColor = "green";
  movingrect.velocityY = -5;
  
}

function draw() {

  background(255,255,255);  

 bounceOff(movingrect,fixedrect);

 
  drawSprites();
}

