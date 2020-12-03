//Create two variables - car and wall - outside the setup function.
var car,wall;

//Create two variables - speed and weight - outside the setup functions.
var speed,weight;

function setup() {
  createCanvas(3400,400);

  //Set these to random values
  speed=random(55,90);
  weight=random(400,1500);

 //Create a rectangle sprite which represents a car 
  car=createSprite(50,200,50,50);

  //Assign the velocityX property of the car sprite to the speed variable
  car.velocityX=speed;
  car.shapeColor=color(255);

  //Create a Wall which is half the height of the canvas and whose width is 60 pixels
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
}


function draw() {
  background(0);  
//Detect the collision of the car with the wall.
//Calculate the deformation for the car when it collides with the wall
//When collision happens, based on deformation calculations determine the color of the car as red, yellow or green
 if(wall.x=car.x < (car.width+wall.width)/2)
  {
  car.velocityX=0;
  var deformation=0.5*weight*speed*speed/22509;
  if (deformation>180)
  {
  car.shapeColor=color(255,0,0);
  }

  if (deformation<180 && deformation>100)
  {
  car.shapeColor=color(230,230,0);
  }

  if (deformation=100)
  {
  car.shapeColor=color(0,255,0 );
  }
  }

  drawSprites();
}