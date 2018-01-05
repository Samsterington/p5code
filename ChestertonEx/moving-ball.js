var ball = {
  x:150,
  y:300,
  speed:1,
  col:180,
  accel:-1,
  move: function() {
    this.x = this.x + this.speed*random(-1,2);
    this.y = this.y + this.speed*random(-2,1);
  },
  accelerate: function() {
    this.speed = this.speed + 0.01; 
    if (this.speed > 2) {
      this.speed = this.speed*this.accel; 
      } 
  },
  display: function() {
    noStroke();
    fill(this.col,200,20);
    ellipse(this.x,this.y,25);
  }
}

function setup() {
  createCanvas(700,450);
}

function draw() {
  background(0);
  ball.move();
  ball.display(); 
  if (mouseIsPressed) {
    ball.col = 255;
    ball.accelerate();
  } else {
    ball.col = 180;
  }
}