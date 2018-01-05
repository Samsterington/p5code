// Aim to create a 2D space of balls that interact when collidding into each other 
// Things to continue with: better physics behind collsions, 
// make balls random size, make size acount for weight 


// Variable list 
var balls = [];
var borderWidth = 10;

function setup() {
  createCanvas(630, 400);
}

function draw() {
  background(0);
  drawBorder(borderWidth);
  for (i = (balls.length) - 1; i >= 0; i--) {
    balls[i].display();
    balls[i].move();
    balls[i].wallBounce();
//    balls[i].friction();
    for (j = (balls.length) - 1; j >= 0; j--) {
      if (i != j){
        collisionTest(balls[i], balls[j]);
      }
    }
    // The idea works but i need to think about how this will change the array as we run through it. The numbers get confused.
    // for (j = (balls.length) - 1; j >= 0; j--) {
    //   if (i != j) {
    //     if (postCollision(balls[i], balls[j])) {
    //       var xAv = (balls[i].x+balls[j].x)/2;
    //       var yAv = (balls[i].y+balls[j].y)/2;
    //       var xspeedAv = (balls[i].speed[0]+balls[j].speed[0])/2;
    //       var yspeedAv = (balls[i].speed[1]+balls[j].speed[1])/2;
    //       var growth = balls[i].size + balls[j].size;
    //       balls.push(new Ball(xAv,yAv,xspeedAv,yspeedAv,growth));
    //       balls.splice(i,1);
    //       balls.splice(j,1);
    //     }
    //   }
    // }
  }
}

function mousePressed() {
  balls.push(new Ball(mouseX, mouseY, random(1, 3), random(1, 3), random(20, 70))); // Don't put an equals sign 
}

function collisionTest(ob1, ob2) {
  var r = dist(ob1.x, ob1.y, ob2.x, ob2.y);
  var ratio = ob1.size / ob2.size;
  if (r <= (ob1.size / 2) + (ob2.size / 2)) {
    var speedSaveX = ob1.speed[0];
    ob1.speed[0] = ob2.speed[0] * (1 / ratio);
    ob2.speed[0] = speedSaveX * (ratio);
    var speedSaveY = ob1.speed[1];
    ob1.speed[1] = ob2.speed[1] * (1 / ratio);
    ob2.speed[1] = speedSaveY * (ratio);
  }
}

function postCollision(ob1,ob2) {
  var r = dist(ob1.x, ob1.y, ob2.x, ob2.y);
  if (r < (ob1.size / 2) + (ob2.size / 2)) {
    return true;
  } else {
    return false;
  }
}