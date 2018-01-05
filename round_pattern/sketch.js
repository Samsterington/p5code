var circles = [];


function setup() {
  createCanvas(300,300);
  for (i = 0; i < 4; i++) {
    circles[i] = new Circle();
  }
}

function draw() {
  background(200)
  for (i = 0; i < circles.length; i++) {
    circles[i].display();
  }
}

function mouseClicked() {
  circles.push(new Circle);
  if (circles.length > 4) {
  circles.splice(0,1);
  }
}


function Circle() {
  this.size = random(20,150);
  this.x = random(0+(this.size/2),width-(this.size/2))
  this.y = random(0+(this.size/2),height-(this.size/2))
  
  this.display = function() {
    alp = map(this.size,20,150,100,0)
    fill(0,0,255,alp)
    ellipse(this.x,this.y,this.size)
  }
}