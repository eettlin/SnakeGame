
//  This is my first change

function Snake(x, y){
  this.loc = createVector(x, y);
  this.vel = createVector(0,0);
  this.tail = [];
  this.tail.push(createVector(this.loc.x, this.loc.y));


  this.update = function(){
    //move head
    this.vel.normalize();
    this.vel.mult(scl);
    this.loc.add(this.vel);
    this.checkGameOver();
   //update all tail segments
    for(var i = 0; i < this.tail.length-1; i++){
      this.tail[i].x = this.tail[i+1].x;
      this.tail[i].y = this.tail[i+1].y;
    }
    //set last segment equal to head
    this.tail[this.tail.length-1] = createVector(this.loc.x, this.loc.y);
    this.render();
  }

  this.render = function(){
    fill(255);
    rect(this.loc.x, this.loc.y, scl, scl);
    for(var i = 0; i < this.tail.length-1; i++){
      ellipse(this.tail[i].x+scl/2, this.tail[i].y+scl/2, scl, scl);
    }
  }
  this.checkGameOver = function(){
   if( this.loc.x < 0 ||
       this.loc.x > width - 2 ||
       this.loc.y < 0 ||
       this.loc.y > height ) {
         gameOver = true;
       }
    for(var i = 1; i < this.tail.length; i++){
      if(this.loc.dist(this.tail[i]) < 5){
        gameOver = true;
      }
    }

  }

  this.eatFood = function(){

    if(this.loc.dist(food) < 5){
      let tailX = this.tail[this.tail.length-1].x;
      let tailY = this.tail[this.tail.length-1].y;
      this.tail.push(createVector(tailX, tailY));
      print(this.tail.length);
      return true;
    }else{
      return false;
    }
  }


}
