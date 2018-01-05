var start = false;
var timing = 0;
var count = 0;
var time = 0;
var rate = 50;
var hit = [2.9,5.9,8.78,11.78,14.57];
// var hit = {
//   one: 2.9,
//   two: 5.9,
//   three: 8.78,
//   four: 11.78,
//   five: 14.55
// }

var sizeY = 65;

function preload() {
  mySound = loadSound('ModernPromis.mp3')
}


function setup() {
  createCanvas(800,450);
  frameRate(rate);
}

function draw() {
  background(0);
  if (time >= hit[1] && time < hit[2] || time >= hit[3] && time < hit[4]) {
    background(255);
  }
  if (start) {
    frameCounter();
  }
  fill(170);
  text(time,10,20);
  text(timing,50,20);
  if (time >= hit[0]) {
    you();
  }
}

function mouseClicked() {
  mySound.setVolume(0.5);
  mySound.play();
  start = true;
}

function keyPressed() {
  timing = time;
}

function frameCounter() {
  count = count + 1;
  time = count/rate;
}

function you() {
  noStroke();
  fill(255);
  if (time >= hit[1] && time < hit[2] || time >= hit[3] && time < hit[4]) {
    fill(0);
  }
  grow(hit[3],hit[4]);
  ellipse(mouseX,mouseY,sizeY,sizeY);
}

function grow(strt,endg) {
  var n = 1;
  if (time >= strt && time < endg) {
    sizeY = sizeY + n;
  } else {
    sizeY = 65;
  }
}
