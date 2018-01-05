var canvasY = 400;
var canvasX = 700;
// var start = random(0,400);

var player = {
  x: 20,
  y: 150,
  wide: 20,
  long: 150,
  speed: 2,

  display: function() {
    fill(255);
    rect(this.x, this.y, this.wide, this.long);
  },

  move: function() {
    if (mouseY > this.y + (this.long / 2)) {
      this.y = this.y + this.speed;
    } else if (mouseY < this.y + (this.long / 2)) {
      this.y = this.y - this.speed;
    }
  },

  edge: function() {
    if (this.y < 0) {
      this.y = 0
    }
    if (this.y > canvasY - this.long)
      this.y = canvasY - this.long;
  },
  
  smaller: function() {
    this.long = this.long - 10;
  }
}


var opponent = {
  x: canvasX - 40,
  y: 150,
  wide: 20,
  long: 150,
  speed: 2,

  display: function() {
    fill(255);
    rect(this.x, this.y, this.wide, this.long);
  },

  edge: function() {
    if (this.y < 0) {
      this.y = 0
    }
    if (this.y > canvasY - this.long)
      this.y = canvasY - this.long;
  },

  aI: function(y) {
    if (this.y + (this.long / 2) > y) {
      this.y = this.y - this.speed;
    } else if (this.y + (this.long / 2) < y) {
      this.y = this.y + this.speed;
    }
  }
}

var ball = {
  x: canvasX / 2,
  y: 100,
  size: 20,
  speedY: 3,
  speedX: 3,

  display: function() {
    fill(255);
    ellipse(this.x, this.y, this.size);
  },

  move: function() {
    this.x = this.x + this.speedX;
    this.y = this.y + this.speedY;
  },

  edge: function() {
    if (this.y <= (this.size / 2) || this.y >= canvasY - (this.size / 2)) {
      this.speedY = this.speedY * (-1);
    }
  },

  bounce: function() {
    this.speedX = this.speedX * (-1);
//    this.speedY = this.speedY * (random(0,2))  This was an aim to vary the game
    player.smaller();
  }
}





function setup() {
  createCanvas(canvasX, canvasY);
}

function draw() {
  background(0);
  player.display();
  player.move();
  player.edge();
  opponent.display();
  opponent.edge();
  ball.display();
  ball.move();
  ball.edge();
  opponent.aI(ball.y);
  if (collisionPlayer(ball.x, ball.y, ball.size, player.x, player.y, player.wide, player.long)) {
    ball.bounce();
  };
  if (collisionOpponent(ball.x, ball.y, ball.size, opponent.x, opponent.y, opponent.wide, opponent.long)) {
    ball.bounce();
  }
  end(ball.x);
}

function collisionPlayer(x1, y1, size, x2, y2, wide, long) {
  if (x1 - (size / 2) <= x2 + wide && x1 >= x2) {
    if (y1 >= y2 && y1 <= y2 + long) {
      return true;
    } else {
      return false;
    }
  }
}

function collisionOpponent(x1, y1, size, x2, y2, wide, long) {
  if (x1 >= x2 - (size / 2) && x1 <= x2 + wide) {
    if (y1 >= y2 && y1 <= y2 + long) {
      return true;
    } else {
      return false;
    }
  }
}

function end(x1) {
  fill(255);
  textSize(50)
  if (x1 < 0) {
    text("YOU LOSE",canvasX/3,canvasY/2);
  } else if (x1 > canvasX) {
    text("YOU WIN",canvasX/3,canvasY/2);
  }
}