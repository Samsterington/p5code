let pary ;

function setup() {
    createCanvas(400,400) ;
    background(20) ;
    pary = createP("hello") ;
    pary.mouseOver(doIt) ;
    createSlider(30,100,30) ;
}

function draw() {
    pary.mouseOver(doIt) ;
}   

function doIt() {
    pary.html('' + frameCount) ;
    pary.style('background-color : aqua') ;
}
