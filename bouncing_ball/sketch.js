var balls = [];

function setup() {
  createCanvas(500,400);
  
  for (i = 0; i < 10; i++) {
    balls[i] = {
      x:(i*20) + 70,
      y:(i*20) + 20,
      vertspeed:0,
      rate:0.1,
      move:0,
      col:255,
      display: function() {
        noStroke();
        this.col = map(this.y,0,500,0,255);
        fill(-this.col,-this.col,this.col);
        ellipse(this.x,this.y,25);
      },
      fall: function() {
        this.y = this.y + this.vertspeed;
        if (this.y >= height) {
          this.vertspeed = this.vertspeed * (-1) ;
        }
        if (this.y >= mouseY && this.y <= mouseY+4 && mouseX > this.x-10 && mouseX < this.x+10) {
          this.vertspeed = this.vertspeed * (-0.9);
          if (mouseX > this.x-10 && mouseX < this.x-3) {
            this.move = (random(0,100)/100);
          }
          if (mouseX > this.x+3 && mouseX < this.x+10) {
            this.move = (random(0,100)/100)*(-1);
          }
        }
      },
      sidemove: function() {
        this.x = this.x + this.move;
      },
      accel: function() {
        this.vertspeed = this.vertspeed+this.rate;
      },
    }
  }
}

function draw() {
  background(0)
  for (i = 0; i < balls.length; i++) {
    balls[i].display();
    balls[i].fall();
    balls[i].accel();
    balls[i].sidemove();
  }
}

function mouseClicked() {
  for (i = 0; i < balls.length; i++) {
    if (balls[i].vertspeed >= 0) {
      balls[i].y = balls[i].y - 10;
      balls[i].vertspeed = -5;
    } else {
      balls[i].vertspeed = 0;
    }
  }
}