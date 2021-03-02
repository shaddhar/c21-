var rec1,rec2; 



function setup() {
  createCanvas(800,400);
  rec1=createSprite(400, 200, 50, 50);
  rec2=createSprite(300,200,70,60);
  rec1.velocityY=5;
 rec1.shapeColor="green"; 
 rec2.shapeColor="red";
}

function draw() {
  background(255,255,255);  
  
 bounceoff(rec1,rec2);
 drawSprites();

}
