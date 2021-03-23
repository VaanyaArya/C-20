function preload() {
  //load the images here
  gardenImg = loadImage("images/garden.png");
  tomImg1= loadAnimation("images/cat1.png");
  tomImg2=loadAnimation("images/cat2.png","images/cat3.png");
  tomImg3= loadAnimation("images/cat4.png");
  jerryImg1=loadAnimation("images/mouse1.png");
  jerryImg2= loadAnimation("images/mouse2.png","images/mouse3.png");
  jerryImg3=loadAnimation("images/mouse4.png");

}

function setup(){
  createCanvas(1000,800);
  //create tom and jerry sprites here
  garden = createSprite(500,400,1000,800);
  garden.addImage(gardenImg);
  garden.scale = 1;

  tom = createSprite(800,650,10,10);
  tom.addAnimation("tom1",tomImg1)
  tom.scale = 0.18;

  jerry = createSprite(100,650,10,10);
  jerry.addAnimation("jerry1",jerryImg1);
  jerry.scale = 0.15;

}

function draw() {

  background(255);
  //Write condition here to evalute if tom and jerry collide
  if(tom.x - jerry.x< (tom.width - jerry.width)/2){
      tom.velocityX = 0;
      tom.addAnimation("tom3",tomImg3);
      tom.changeAnimation("tom3");
      tom.scale = 0.2;

      jerry.addAnimation("jerry3",jerryImg3);
      jerry.changeAnimation("jerry3");
      
  }
  drawSprites();
}


function keyPressed(){

//For moving and changing animation write code here
if(keyCode === LEFT_ARROW){
    tom.velocityX = -2;
    tom.addAnimation("tom2",tomImg2);
    tom.changeAnimation("tom2");
    tom.scale = 0.25;

    jerry.addAnimation("jerry2",jerryImg2);
    jerry.changeAnimation("jerry2");
    jerry.scale = 0.15;
}

}
