var dotcol = {
  r:255,
  b:255,
  g:50
};
var dottran = 0;
var dotsize = 0;
var mousesize = 200;

var dotpos = {
  x:0,
  y:0
}


function setup() {
  createCanvas(windowWidth,windowHeight);
  background(0);
  frameRate(25)
}

function draw() {
  dottran = random(100,200);
  dotsize = random (25,50);
  dotpos.x = random(0,width);
  dotpos.y = random(0,height);
  dotcol.r = random(100,255);
  dotcol.b = random(100,255);
  dotcol.g = 0;
  noStroke();
  fill(dotcol.r,dotcol.g,dotcol.b,dottran);
  ellipse(dotpos.x,dotpos.y,dotsize);
// Generating the faded errasor 
  for(i = 0; i < 20; i++) {
    fill(0,0,0,(i)); // Each ellipse is more opaque in the middle 
    mousesize = mousesize - 5;
    ellipse(mouseX,mouseY,mousesize); // Every 5 pixels in a new ellipse is drawn over the top 
  }
  mousesize = 200;
}