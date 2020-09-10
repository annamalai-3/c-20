var sprite1,sprite2;


function setup() {
  createCanvas(800,400);
  sprite1 = createSprite(200,200,50,50);
  sprite2 = createSprite(123,230,50,50);
  sprite2.shapeColor = "yellow";
  sprite1.shapeColor = "yellow";
}

function draw() {
  background("black");
  sprite2.x = mouseX;
  sprite2.y = mouseY;

if(sprite2.isTouching(sprite1)){
 sprite1.shapeColor = "red";
 sprite2.shapeColor = "red";
}
else {
  sprite2.shapeColor = "yellow";
  sprite1.shapeColor = "yellow";

}


  drawSprites();
}