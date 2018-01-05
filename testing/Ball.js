class Ball {
    constructor(x,y) {
        this.x = x ;
        this.y = y ;
//        this.speed = random(-map(x,0,width,1,3),map(x,0,width,1,3)) ;
        this.speed = random(-1,1) ;
    }
    
    show() {
        noStroke() ;
        fill(255,180,0) ;
        ellipse(this.x, this.y, 20) ;
    }
    
    fall() {
        this.y = this.y + this.speed ;
    }
    
    offScreen() {
        if(this.y < 0 || this.y > height) {
            return true ;
        } else {
            return false ;
        }
    }
}
