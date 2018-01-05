var boxList = [] ;

function setup() {
    createCanvas(800,500) ;
    for(i = 0 ; i < 100 ; i++) {
        let pad = 20 ;
        let vertPad = pad*0.8 ;
        boxList[i] = new Box(random(width/pad,width-width/pad),random(height/vertPad,height-height/vertPad)) ;
    }
}

function draw() {
    background(0) ;
    for(i = boxList.length-1 ; i >= 0 ; i--) {
        boxList[i].show() ;
        boxList[i].move() ;
        for(j = boxList.length-1 ; j >= 0 ; j--) {
            if(boxList[i].checkIntercept(boxList[j].x,boxList[j].y,boxList[j].size) && i != j) {
                boxList[i].moveAway(boxList[j].x,boxList[j].y) ;
            }
        }
    }
}

function mousePressed() {
    boxList.push(new Box(mouseX,mouseY)) ; 
}

