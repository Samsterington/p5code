
function setup() {
  createCanvas(200, 200);
}

function draw() {
  background(220);
  for (let i = 0; i < width; i++) {
    for (let j = 0; j < height; j++) {
      drawCircle(i*30,j*30,20);
    }
  }
}

function drawCircle(x, y, size) {
  let R = map(mouseX*x,0,width*width,0,255);
  let G = 0;
  let B = map(mouseY*y,0,height*height,0,255);
  fill(R, G, B);
  noStroke();
  ellipse(x, y, size);
}