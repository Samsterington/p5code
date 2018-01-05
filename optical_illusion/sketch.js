var numb;
var shape = 1;

function setup() {
  createCanvas(600, 300);
  slider = createSlider(0, 150, 10);
  buttonS = createButton('Square');
  buttonC = createButton('Circle');
  buttonT = createButton('Triangle');
}

function draw() {
  background(0);
  angleMode(DEGREES);
  numb = slider.value();
  buttonS.mousePressed(changeS);
  buttonC.mousePressed(changeC);
  buttonT.mousePressed(changeT);
  for (i = 0; i < numb; i++) {
    var col = map(i, 0, numb, 0, 255);
    var intX = (width / 2) / (numb);
    var intY = (height / 2) / (numb);
    noStroke();
    fill(col);
    if (shape == 1) {
      rect(intX * i, intY * i, width - (2 * intX * i), height - (2 * intY * i));
    } else if (shape == 2) {
      ellipse(width / 2, height / 2, height - (2 * intY * i), height - (2 * intY * i));
    } else if (shape == 3) {
    triangle(width / 2, intY * i, intX * i, height - (intY * i), width - (intX * i), height - (intY * i));
    //   intY = (height - (width/2)*tan(30))/numb;
    //   var tipx = width/2;
    //   var tipy = intY*i;
    //   // gotta go over the hieght of the bottom two points. needs to be controlled by an angle aswell (more trig)
    // triangle(tipx,tipy,tipx-(height*tan(30)),height,tipx+(height*tan(30)),height);
    }
  }
}


function changeS() {
  shape = 1
}

function changeC() {
  shape = 2
}

function changeT() {
  shape = 3
}