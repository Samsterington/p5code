// This program allows you to create walkers that move randomly around the screen. When you click a walker constructer function adds a walker to the array w. In draw w is proccessed and all current walers in it our rendered and behave. Th trail of the walkers is also displayed and slowly fade into the background. Once a trail is white it is spliced from the array trails. All the trails are stored in one away despite being for seperate walkers, this hasn't proven an issue as of yet but doesn't nessicarily make and organisational sense. The trails are not a history of the walker but infact permenent markings left by the walker each tim it moves. These are rendered as slightly less black each frame and thus appear to fade. 


var w = [];
var trails = [];
var sizer = 10;

function setup() {
    canvas = createCanvas(windowWidth,windowHeight);
}

function draw() {
    background(200);
    for(i = 0; i < w.length; i++) {
        var j = trails.length;
        trails[j] = new Trail(w[i].x,w[i].y);
        w[i].move();
        w[i].show();
        w[i].chose();
    }
    for(i = 0; i < trails.length; i++) {
        trails[i].show();
        trails[i].dying();
        if (trails[i].dead() == 1) {
            trails.splice(i,1);
        }
    }
}

function mouseClicked() {
    var j = w.length;
    w[j] = new Walker(mouseX,mouseY);
}


function Walker(x,y) {
    this.x = x ;
    this.y = y ;
    this.pathx = sizer;
    this.pathy = sizer;
    
    this.show = function() {
        fill(0);
        noStroke();
        rect(this.x,this.y,sizer,sizer);
    }

    this.move = function() {
        this.x = this.x + this.pathx;
        this.y = this.y + this.pathy;
    }
    
    this.chose = function() {
        var r = random(0,10) ;
        if (r > 7 || r <= 1) {
            this.pathx = this.pathx ;
            this.pathy = this.pathy ;
        } else if (r > 5 && r <= 7) {
            this.pathy = this.pathy ;
            this.pathx = -this.pathx ;
        } else if (r > 3 && r <= 5) {
            this.pathx = this.pathx ;
            this.pathy = -this.pathy ;
        } else if (r > 1 && r <= 3) {
            this.pathx = -this.pathx ;
            this.pathy = -this.pathy ;
        }
    }
}

function Trail(x,y) {
    this.x = x;
    this.y = y;
    this.life = 0;
        
    this.dying = function() {
        this.life = this.life + 1;
    }
    
    this.show = function() {
        noStroke();
        fill(this.life);
        rect(this.x,this.y,sizer,sizer);
    }
    
    this.dead = function() {
        if (this.life > 255) {
            return 1 ;
        } else {
            return 0 ;
        }
     }
}

