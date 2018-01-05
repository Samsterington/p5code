class Box {
    constructor(x,y,setting) {
        this.x = x ;
        this.y = y ;
        this.size = 35 ;
        this.setting = setting ;
    }
    
    show() {
        stroke(255) ;
        fill(120,100) ;
        ellipse(this.x,this.y,this.size) ;
    }
    
    move() {
        this.x = this.x + random(-1,1) ;
        this.y = this.y + random(-1,1) ;
    }
    
    moveAway(a,b) {
        let sepX = this.x - a ;
        let sepY = this.y - b ;
        if(setting) {
            if(sepX < 0) { // change sign for alternate 
                this.x = this.x + 1 ; 
            } else {
                this.x = this.x - 1 ;
            }
            if(sepY < 0) {
                this.y = this.y + 1 ;
            } else {
                this.y = this.y - 1 ;
            }
        } else {
            if(sepX > 0) { // change sign for alternate 
                this.x = this.x + 1 ; 
            } else {
                this.x = this.x - 1 ;
            }
            if(sepY > 0) {
                this.y = this.y + 1 ;
            } else {
                this.y = this.y - 1 ;
            }
        }
    }
    
    checkIntercept(oX,oY,oSize) {
        let d = dist(this.x,this.y,oX,oY) ;
        let combSize = (oSize/2) + (this.size/2) ;
        if(d < combSize) {
            return true ;
        } else {
            return false ;
        }
    }
}