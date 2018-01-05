// Creates a ball object that tests is it bounces against walls

function Ball(x, y, vx, vy, diam) {
  this.x = x;
  this.y = y;
  this.speed = [vx, vy];
  this.size = diam;

  this.display = function() {
    fill(255, 200, 0);
    ellipse(this.x, this.y, this.size, this.size);
  };

  this.move = function() {
    this.x = this.x + this.speed[0];
    this.y = this.y + this.speed[1];
    // This was an attempted solution to stop wall sticking (it did not work)
    // if (this.speed[0] <= 1.1 && this.speed[0] >= -1.1) {
    //   this.speed[0] = 1.1;
    //   if (this.speed[0] < 0) {
    //     this.speed[0] = -1.1;
    //   } else if (this.speed[0] > 0) {
    //     this.speed[0] = 1.1;
    //   }
    // }
    // if (this.speed[1] <= 1.1 && this.speed[1] >= -1.1) {
    //   if (this.speed[1] < 0) {
    //     this.speed[1] = -1.1;
    //   } else if (this.speed[1] > 0) {
    //     this.speed[1] = 1.1;
    //   }
    // }
  }

  this.wallBounce = function() {
    if (this.x < borderWidth + (this.size / 2) || this.x > width - (borderWidth + (this.size / 2))) {
      this.speed[0] = this.speed[0] * (-1);
    }
    if (this.y < borderWidth + (this.size / 2) || this.y > height - (borderWidth + (this.size / 2))) {
      this.speed[1] = this.speed[1] * (-1);
    }
  }

  this.friction = function() {
    this.speed[0] = (this.speed[0]) * 0.9999;
    this.speed[1] = (this.speed[1]) * 0.9999;
  }
}