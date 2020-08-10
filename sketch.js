var car,wall;
var speed,wiegth;
function setup() {
  createCanvas(1800,400);
  car = createSprite(50, 200, 50, 50);
  wall = createSprite(1500,200,60,heigth/2);
  speed = random(55,90);
  wiegth = random(400,1500);
}

function draw() {
  background(255,255,255); 
  car.velocityX = speed;
  if(wall.x-car.x < (car.width+wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * wiegth * speed * speed/22509;
    if(deformation>180){
car.shapeColor(255,0,0);
    }
    if(deformation<180 && deformation>100){
      car.shapeColor(230,230,0);
          }
          if(deformation<180){
            car.shapeColor(0,255,0);
                }
  }
  drawSprites();
}