let balls = [] ;

function setup() {
    createCanvas(windowWidth,windowHeight) ;
}

function mouseDragged() {
    b = new Ball(mouseX,mouseY) ;
    balls.push(b) ;
}

function draw() { 
    background(0) ;
    for(i = 0 ; i < balls.length ; i++) {
        balls[i].show() ;
        balls[i].fall() ;
    }
}



