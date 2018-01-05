var ball = {
  x:250,
  col:0
}
var displ = 0;
var start = 0;

function setup() {
  createCanvas(500,200);
}

function draw() {
  
  // Setup of screen
  background(0)
  stroke(255);
  line((width/2)-150,height/2,(width/2)+150,height/2);
  
  // Producing and moving the ball
  stroke(255);
  fill(0);
  ellipse(ball.x,height/2,50);
  if ( mouseX > (ball.x)-25 && mouseX < (ball.x)+25 && mouseY > (height/2)-25 && mouseY < (height/2)+25 ) {
    if (mouseIsPressed) {
      col = map(mouseX,0,width,0,255);
      fill(col,-col,-col);
      ellipse(ball.x,height/2,50);
      ball.x = mouseX;
      if (ball.x > (width/2)+150) {
        ball.x = (width/2)+150;
      }
      if (ball.x < (width/2)-150) {
        ball.x = (width/2)-150;
      }
    }
  }
}

function mousePressed() {
}

