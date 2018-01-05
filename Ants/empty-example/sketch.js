// This is a good start but to make the ants actually leave a trail the ground needs to be set into a grid and steps on that grid must increase the likely hood of moving onto it 


let determination = 0.1; // Closer to zero the more targetted, the closer to one the more random 
let directDetermination = 0.5;
let ants = [];
let apple;

function setup() {
    createCanvas(500,300);
    ants.push(new Ant());
    apple = new Food();
}

function draw() {
    background(220);
    
    for(let i = 0; i < ants.length; i++) {
        ants[i].show();
        if(ants[i].search) {
            ants[i].move();
            ants[i].remember();
        } else {
            ants[i].showPath();
            ants[i].retrace();
        }
        if(ants[i].onFood(apple.x,apple.y,apple.size)) {
            ants[i].change();
        }
    }
    
    apple.show();
}
    

class Ant {
    constructor() {
        this.x = width/2;
        this.y = height/2;
//        this.lastXMove = random(-1,1);  For some reason having random here meant that it would only start occasionally.
//        this.lastXMove = random(-1,1);  Though hardset values of either 0,1 or -1 all work fine (confusing)
        this.lastXMove = 0;
        this.lastYMove = 0;
        this.path = [];
        this.search = true;
        this.count = 0;
    }
    
    move() {
        let a = random(0,1);
        if (a < determination) {
            this.lastXMove = random(-1,1);
            this.lastYMove = random(-1,1);
        } 
        this.x += this.lastXMove;
        this.y += this.lastYMove;  
    }
    
    remember() {
        this.path.push([this.x,this.y]);
    }
    
    show() {
        fill(0);
        stroke(0);
        ellipse(this.x,this.y,3);
    }
    
    change() {
        this.search = false;
        this.count = 2;
    }
    
    showPath() {
        for(let i = 0; i < this.path.length; i++) {
            stroke(100,255,0);
            point(this.path[i][0],this.path[i][1]);
        }
    }
    
    retrace() {
        let pathPos = this.path.length - this.count;
        
        if(pathPos < 0) {
            this.search = true;
            this.count = 1;
            this.path = [];
        } else {
            this.x = this.path[pathPos][0];
            this.y = this.path[pathPos][1];
            this.count++;
        }
    }
    
    onFood(foodX,foodY,size) {
        let distance = dist(this.x,this.y,foodX,foodY);
        let radius = size/2;
        if (distance < radius) {
            return true;
        } else {
            return false;
        }
    }
}

class Food {
    constructor() {
        this.x = random(100,width-100);
        this.y = random(100,height-100);
        this.size = 35;
    }
    
    show() {
        fill(255,0,0);
        stroke(0);
        ellipse(this.x,this.y,this.size);
    }
}

function mousePressed() {
    ants.push(new Ant());
}
