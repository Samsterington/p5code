// this is a joke, need better thinking through 


function setup() {
    createCanvas(500,300) ;
    proto = new Spinner() ;
}

function draw() {
    background(0) ;
    proto.show() ;
    proto.move() ;
}

class Spinner {
    constructor() {
        this.axisX = 100 ;
        this.axisY = 100 ;
        this.radius = 50 ;
        this.x = 0 ;
        this.y = this.radius ;
        this.leftMotion = true ;
        this.upMotion = true ;
    }
    
    show() {
        fill(200) ;
        noStroke() ;
        ellipse(this.x,this.y,20,20) ;
    }
    
    move() {
        if(this.leftMotion) {
            this.x++ ;
        } else {
            this.x-- ;
        }
        
        this.y = (((this.radius^2) - ((this.x - this.axisX)^2))^0.5) + this.axisY ;
        if(this.leftMotion) {
            this.y = (this.y^2)^0.5 ;
        } else {
            this.y = -(this.y^2)^0.5 ;
        }
        
        if(this.x >= this.radius) {
            this.leftMotion = false ;
        } 
        if(this.x <= -this.radius) {
            this.leftMotion = true ;
        }
        if(this.y >= this.radius) {
            this.upMotion = false ;
        } 
        if(this.y <= -this.radius) {
            this.upMotion = true ;
        }
        
    }

} 
