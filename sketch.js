function setup() {
  createCanvas(800,400);
fixrect =  createSprite(400, 200, 50, 50);
movingrect = createSprite(100,100,100,100);
rect1 = createSprite(50,50)
rect2 = createSprite(750, 50)
rect1.velocityX = 3
rect2.velocityX = -3
rect1.shapeColor = "blue"
rect2.shapeColor = "yellow"
}

function draw() {
  background(0);  
  movingrect.x = mouseX
  movingrect.y = mouseY
  if(movingrect.x-fixrect.x<=movingrect.width/2+fixrect.width/2 &&
    fixrect.x-movingrect.x<=movingrect.width/2+fixrect.width/2 &&
    movingrect.y-fixrect.y<=movingrect.height/2+fixrect.height/2 &&
    fixrect.y-movingrect.y<=movingrect.height/2+fixrect.height/2 

    ){
movingrect.shapeColor = "magenta"
fixrect.shapeColor = "orange"

  }
  else{
    movingrect.shapeColor = "green"
    fixrect.shapeColor = "red"
   
  }
  if(rect1.x-rect2.x<=rect1.width/2+rect2.width/2 &&
    rect2.x-rect1.x<=rect1.width/2+rect2.width/2 
    ){
rect1.velocityX *=(-1)
rect2.velocityX *=(-1)




    }
    drawSprites();
}