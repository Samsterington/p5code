let cells = [];
let cellDim = 2;

function setup() {
    createCanvas(500,500);
    createGrid();
    rectMode(CENTER);
    
    ant = new Ant(50,50);
}

function draw() {
    background(255,0,100);
    
    showTred();
    ant.show();
    if (ant.search) {
        ant.move();
        ant.trackPath();
    } else {
        ant.retrace();
    }
    ant.markCell();
    
    print(ant.path.length)
}

class Ant {
    constructor(i,j) {
        this.currentCell = cells[i][j];
        this.i = i;
        this.j = j;
        this.lastMoveX = 1;
        this.lastMoveY = 1;
        this.x = this.currentCell.x;
        this.y = this.currentCell.y;
        this.size = cellDim
        this.path = [];
        this.counter = 0;
        this.search = true;
    }
    
    show() {
        fill(255,200,0);
        noStroke();
        ellipse(this.x,this.y,this.size);
    }
    
    move() {
        if (random() < 0.5) { // the closer the number is to zero the more likely the ant will repeat instruction 
            this.lastMoveX = floor(random(-1,2));
            this.lastMoveY = floor(random(-1,2));
        } 
        this.i += this.lastMoveX;
        this.j += this.lastMoveY;
        
        this.currentCell = cells[this.i][this.j];
        this.x = this.currentCell.x;
        this.y = this.currentCell.y;
    }
    
    markCell() {
        this.currentCell.tred++;
    }
    
    trackPath() {
        this.path.push([this.i,this.j]);
        print(this.path);
    }
    
    retrace() {
        let place = this.path.length - this.counter - 1;
        if (place >= 0) {
            this.i = this.path[place][0];
            this.j = this.path[place][1];
            this.counter++;
        } else {
            this.path.splice(0,this.path.length-1);
            this.search = true;
        }
        
        this.currentCell = cells[this.i][this.j];
        this.x = this.currentCell.x;
        this.y = this.currentCell.y;
    }
}

function createGrid() {
    for(let i = 0; i < width/cellDim; i++) {
        cells[i] = [];
        for(let j = 0; j < height/cellDim; j++) {
            cells[i][j] = {
                tred:0,
                x:i*cellDim + cellDim/2,
                y:j*cellDim + cellDim/2
            };
        }
    }
}

function showTred() {
    for(let i = 0; i < cells.length; i++) {
        for(let j = 0; j < cells[i].length; j++) {
            let shade = 100 + cells[i][j].tred*30;
            fill(255,0,shade);
            rect(cells[i][j].x,cells[i][j].y,cellDim,cellDim);
        }
    }
}

function mousePressed() {
    ant.search = false;
    ant.count = 0;
}