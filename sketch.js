var bgImg
var cat
var mouse

function preload() {
    //load the images here
    bgImg = loadImage ("garden.png")
    catImg1= loadImage("cat1.png")
    catImg2= loadImage("cat2.png")
    mouseImg1= loadImage("mouse1.png")
    mouseImg2= loadImage("mouse2.png")
    catImg3= loadImage("cat3.png")
    mouseImg3=loadImage("mouse3.png")

}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat = createSprite(870, 700);
    cat.addAnimation("catSitting", catImg1);
    cat.scale= 0.2

    mouse= createSprite(200,700);
    mouse.addAnimation("cheese", mouseImg1)
    mouse.scale = 0.2
}

function draw() {

    background(bgImg);
    //Write condition here to evalute if tom and jerry collide
    if(cat.x - mouse.x < (cat.width - mouse.width)/2) { 
        cat.velocityX=0; 
        cat.addAnimation("tomLastImage", catImg3);
        cat.x =300; 
        cat.scale=0.2; 
        cat.changeAnimation("tomLastImage");
         mouse.addAnimation("jerryLastImage", mouseImg3);
          mouse.scale=0.15;
           mouse.changeAnimation("jerryLastImage"); }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here

  if(keyCode === LEFT_ARROW){
       cat.velocityX = -5;
        cat.addAnimation("tomRunning", catImg2);
        cat.changeAnimation("tomRunning"); 
         mouse.addAnimation("jerryTeasing", mouseImg2); 
         mouse.frameDelay = 25;
          mouse.changeAnimation("jerryTeasing"); }
}
