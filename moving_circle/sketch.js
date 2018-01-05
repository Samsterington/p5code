var circ = 21;
var direction = 1; // 1 is outwards, 0 is inwards
var wid = 300;
var maxsize = wid - 20;
var speed = 2;
function setup() {
  createCanvas(wid,wid);
  background(0);
  frameRate(30);
}

function draw() {
  if ( direction == 1) {
  fill(100,100,100)
  rect(10,10,wid-20,wid-20);
  speed = speed + 1;
  circ = circ + speed;
  fill(10,10,10);
  ellipse(wid/2,wid/2,circ);
  } else if (direction === 0) {
    fill(100,100,100)
  rect(10,10,wid-20,wid-20);
  speed = speed - 1;
  circ = circ - speed;
  fill(255,0,0);
  ellipse(wid/2,wid/2,circ);
  } 
  if (circ >= maxsize-10) {
  direction = direction - 1;
  } else if (circ <= 2) {
    direction = direction + 1;
  }

}
