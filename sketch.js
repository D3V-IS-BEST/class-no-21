var wall
var pointer
var wall2,wall3;






function setup() {
  createCanvas(800,400);
wall=createSprite(400,100,200,40);
pointer=createSprite(100,100,30,50);
wall2  = createSprite(550,180,150,30)
wall3  = createSprite(250,180,150,30)




wall.debug=false;

//pointer.debug=true;





}

function draw() {
  background(12,255,255);  
 
pointer.x = mouseX;
pointer.y = mouseY;
 console.log(pointer.x-wall.x)
 

   
 
if (  touching(pointer,wall2) )  {  
  wall2.shapeColor = "pink"
  
}
else {
wall2.shapeColor = "blue"
pointer.shapeColor = "green "


}



if (  touching(pointer,wall) )  {  
  wall.velocityX = 3
  
}
else {
wall.shapeColor = "blue"
pointer.shapeColor = "green "
wall.x = 400
}

if (  touching(pointer,wall3) )  {  
  wall3.width += 1
  
}
else {
wall3.shapeColor = "blue"
pointer.shapeColor = "green "
wall3.width = 30

}








  
  drawSprites();
}


