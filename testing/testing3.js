let input1 ;
function setup() {
    createCanvas(520,380) ;
    createP('') ;
    let button1 = createButton('Press') ;
    let button2 = createButton('no me!') ;
    let button3 = createButton('what about I?') ;
    let slider1 = createSlider(0,100,50) ;
    input1 = createInput('fill it up') ;
    background(100) ;
    button1.mousePressed(drawCircle) ;
    button2.mouseOut(drawCircle) ;
    button3.mouseOver(drawCircle) ;
    slider1.changed(drawCircle) ;
//    input1.changed(drawCircle) ;
}

function draw() {
    input1.changed(drawCircle) ;
}

function drawCircle() {
    
    stroke(255,200,50) ;
    fill(200,100,10) ;
    ellipse(random(width),random(height),80,80) ;
    
}