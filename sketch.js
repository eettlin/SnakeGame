var scl;
var cols, rows;
var food, snake;
var gameOver = false;

function setup() {
   var cnv  = createCanvas(800, 800);
   cnv.position((windowWidth-width)/2, 50);
   frameRate(12);
   food = createVector(0,0);
   scl = 20;
   cols = floor(width/scl);
   rows = floor(height/scl);
   snake = new Snake(5*scl, 5*scl);
   pickFoodLocation();
 }

 function draw() {
   background(255, 220, 150);

   // draw food
   if(!gameOver){
     fill(220, 50, 20);
     if(snake.eatFood())pickFoodLocation()
     rect(food.x, food.y, scl, scl)
     snake.eatFood();
     snake.update();
   } else{
     endScreen();
   }

 }

 function endScreen(){
   fill(2);
   rect(5*scl, 5*scl, 5*scl+500, 5*scl+150);
   textSize(32);
   fill(200, 150, 50);
   text("You Loose", 5*scl+50, 5*scl+50);

 }

function pickFoodLocation(){
   food = createVector(floor(random(cols)), floor(random(rows)));
   food.mult(scl);
   return food;
}
function keyPressed(){
  if(keyCode === UP_ARROW){
     snake.vel = createVector(0,-1);
  }else if(keyCode === DOWN_ARROW){
     snake.vel = createVector(0,1);
  }else if(keyCode === RIGHT_ARROW){
     snake.vel = createVector(1, 0);
  }else if(keyCode === LEFT_ARROW){
     snake.vel = createVector(-1, 0);

  }
}
function getPosition(){


}
