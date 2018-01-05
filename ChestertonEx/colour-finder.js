var slider = [];
var header;
var button;
var colSaves = [];
var n = -1;


function setup() {
  header = createElement("H2","< Program to create colours in 255 RGB >");
  createCanvas(550, 500);
  for (i = 0; i < 4; i++) {
    slider[i] = createSlider(0, 255, 130);
  }
  button = createButton("Save");
  button.position(500,70);
  // button.mousePressed(saveIt(slider[0].value(),slider[1].value(),this.b = slider[2].value()));
}

function draw() {
  background(slider[3].value());
  fill(slider[0].value(), slider[1].value(), slider[2].value());
  ellipse(width / 2, height / 2 - 20, 400, 400);
  fill(255, 0, 0);
  text("Red: " + slider[0].value(), 50, height - 20);
  fill(0, 255, 0);
  text("Green: " + slider[1].value(), 175, height - 20);
  fill(0, 0, 255);
  text("Blue: " + slider[2].value(), 300, height - 20);
  if (slider[3].value() < 50) {
    fill(255);
  } else {
    fill(0);
  }
  text("Background: " + slider[3].value(), 425, height - 20);
}

// function saveIt() {
//   n = n + 1;
//   colSaves[n] = new Colouring();
//   for (i = 0; i < n+1; i++) {
//     fill(colSaves[i].r,colSaves[i].g,colSaves[i].b);
//     ellipse(20,(i+1)*30,20,20);
//   }
// }

// function Colouring(r,g,b) {
//   this.r = r;
//   this.g = g;
//   this.b = b;
// }
