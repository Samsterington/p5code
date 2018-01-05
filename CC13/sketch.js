// Making a 2D array
let grid = [];
let next;

let dA = 1;
let dB = 0.5;
let feed = 0.055;
let k = 0.062;

function setup() {
    createCanvas(200,200);
    pixelDensity(1);
    for(let x = 0; x < width; x++){
        grid[x] = [];
        for(let y = 0; y < height; y++){
            grid[x][y] = { a: 1, b: 0 };
        }
    }
    next = grid;
    for(let i = width/2; i < width/1.8; i++) {
        for(let j = height/2; j < height/1.8; j++) {
            grid[i][j].b = 1;
        }
    }
    for(let i = floor(width/2.2); i < width/2; i++) {
        for(let j = floor(height/2.2); j < height/2; j++) {
            grid[i][j].b = 1;
        }
    }
}

function draw() {
    background(190);
    
    
   for(let x = 1; x < width-1; x++){
        for(let y = 1; y < height-1; y++){
            let a = grid[x][y].a;
            let b = grid[x][y].b;
            next[x][y].a = a + ((dA * laplaceA(x,y)) - (a * b * b) + (feed * (1 - a)))*0.6;
            next[x][y].b = b + ((dB * laplaceB(x,y)) + (a * b * b) - ((k + feed)*b))*0.6;                  

        }
    }
    
    
    loadPixels();
    for(let x = 0; x < width; x++){
        for(let y = 0; y < height; y++){
            let pix = (x + y * width)*4;
            pixels[pix + 0] = 0;
            pixels[pix + 1] = floor(grid[x][y].b*255);
            pixels[pix + 2] = floor(grid[x][y].a*255);
            pixels[pix + 3] = 255;
        }
    }
    updatePixels();
    
    grid = next;
}

function laplaceA(x,y) {
    let sumA = 0;
    sumA += grid[x][y].a *-1
    sumA += grid[x-1][y].a *0.2;
    sumA += grid[x+1][y].a *0.2;
    sumA += grid[x][y-1].a *0.2;
    sumA += grid[x][y+1].a *0.2;
    sumA += grid[x-1][y-1].a *0.05;
    sumA += grid[x+1][y+1].a *0.05;
    sumA += grid[x+1][y-1].a *0.05;
    sumA += grid[x-1][y+1].a *0.05;
    
    return sumA;
}

function laplaceB(x,y) {
    let sumB = 0;
    sumB += grid[x][y].b *-1
    sumB += grid[x-1][y].b *0.2;
    sumB += grid[x+1][y].b *0.2;
    sumB += grid[x][y-1].b *0.2;
    sumB += grid[x][y+1].b *0.2;
    sumB += grid[x-1][y-1].b *0.05;
    sumB += grid[x+1][y+1].b *0.05;
    sumB += grid[x+1][y-1].b *0.05;
    sumB += grid[x-1][y+1].b *0.05;
    
    return sumB;
}
