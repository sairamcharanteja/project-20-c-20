var car,wall;
var speed,weigth;
var deformation;





function setup() {
  createCanvas(1600,400);
 
  car = createSprite(50,200,50,50);
  car.velocityX = 10;
  wall=createSprite(1500,200,60,height/2);
  speed=random(50,90);
  weight=random(1000,1500);

  

}

function draw() {
  background(255,255,255);  
if(car.isTouching(wall)){
  car.shapeColor = "orange";
  car.velocityX = 0;
  car.deformation =  (0.2 * weigth * speed * speed)/2250;
  if(car.deformation < 100){
    car.shapeColor = "green";
  }
  else {
  car.shapeColor = "black";
  }
 
  }


  
  drawSprites();
}