// This creates a crazy drawing tool if the background is only loaded in setup(), or a wacky mouse animation if the background is repeatidly drawn in draw().

let squares = [] ;
let mouseMode = true ;

function setup() {
    createCanvas(windowWidth,windowHeight) ;
    rectMode(CENTER) ;
    background(0) ;
}

function draw() {
    if(mouseMode) {
        background(0) ;
    }
    squares.push(new Square(mouseX,mouseY)) ;
    for(i = squares.length-1 ; i >= 0 ; i--) {
        squares[i].show() ;
        squares[i].live() ;
        if(squares[i].isDead()) {
            squares.splice(i,1) ;
        }
    }
}

class Square {
    constructor(x,y) {
        this.x = x ;
        this.y = y ;
        this.life = 10 ;
        this.scale = 7
        this.size = this.life*this.scale ;
    }
    
    show() {
        rect(this.x,this.y,this.size,this.size) ;
    }
    
    live() {
        this.life = this.life-0.5 ;
        this.size = this.life*this.scale ;
    }
    
    isDead() {
        if(this.life <= 0) {
            return true ;
        } else {
            return false
        }
    }
}

function mousePressed() {
    mouseMode = !mouseMode ;
}
