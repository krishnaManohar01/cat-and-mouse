var bgImage,cat,mouse,catImage,mouseImage,catImage2,mouseImage2,catImage3,mouseImage3

function preload() {
    //load the images here
    bgImage=loadImage("images/garden.png")
    catImage=loadAnimation("images/cat1.png")
    mouseImage=loadAnimation("images/mouse1.png")
    catImage2=loadAnimation("images/cat2.png","images/cat3.png")
    mouseImage2=loadAnimation("images/mouse2.png","images/mouse3.png")
    catImage3=loadAnimation("images/cat3.png")
    mouseImage3=loadAnimation("images/mouse3.png")
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
    cat=createSprite(870,600)
    cat.addAnimation("catsleeping",catImage)
    cat.scale=0.2

    mouse=createSprite(200,600)
    mouse.addAnimation("mousestanding",mouseImage)
    mouse.scale=0.1
}

function draw() {

    background(bgImage);

    //Write condition here to evalute if tom and jerry collide
    if(cat.x-mouse.x<(cat.width-mouse.width)/2){
        cat.velocityX=0
        cat.addAnimation("catImage",catImage3)
        cat.x=300
        cat.scale=0.2
        cat.changeAnimation("catImage")
        mouse.addAnimation("mouseImage",mouseImage3)
        mouse.scale=0.15
        mouse.changeAnimation("mouseImage")
    }
    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here
  if(keyCode===LEFT_ARROW){
      cat.velocityX=-5
      cat.addAnimation("catrunning",catImage2)
      cat.changeAnimation("catrunning")

      mouse.addAnimation("mouseteasing",mouseImage2)
      mouse.changeAnimation("mouseteasing")
      mouse.frameDelay=25
  }


}
