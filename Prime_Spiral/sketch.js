var block = 100; // This is the dimensions of each square. 
var colsN;
var rowsN;
var colS;
var rowS;
var numb = 1;
var moveX = 1;
var mXhist;
var moveY = 0;
var mYhist = -1;
var numb = 1; // The number in question
var countC = 1;
var setC = 2;

// Works out how many rows and columns there will be for a given block size.
function scale() {
    colsN = width / block;
    rowN = height / block;
}

// This function will calculate if n is a prime. If it is it returns true, if it isn't it reyturns false. 
function isPrime(n) {
    var remi;
    var tru = 1; //
    for (i = n - 1; i > 1; i - 1) {
        remi = n%i;
        if (remi === 0) {
            tru = 0;
        }
    }
    if (n === 1) {
        tru = 0;
    }
    if (n === 2) {
        tru = 1;
    }
    if (tru === 1) {
        return true 
    } else {
        return false 
    }
}

// Defines the starting columns and rows of the spiral.
function defStart() {
    colS = floor((width / block) / 2);
    rowS = floor((height / block) / 2);
}

// Draws a rectangle at a given location, for a given number. If the number is prime the fill is black if not the fill is white.
function drawNum(col, row, n) {
    var x;
    var y;
    x = col * block;
    y = row * block;
    if (isPrime(n)) {
        fill(0);
    } else {
        fill(255);
    }
    noStroke();
    rect(x, y, block, block);
}

function newNum() {
    colS = colS - 1;
}

function changeD() {
    if (moveX === 1) {
        moveX = 0;
        mXhist = -1;
    } else if (moveX === -1) {
        moveX = 0;
        mXhist = 1;
    } else {
        moveX = moveX + mXhist;
    }
    if (moveY === 1) {
        moveY = 0;
        mYhist = -1;
    } else if (moveY === -1) {
        moveY = 0;
        mYhist = 1;
    } else { 
        moveY = moveY + mYhist;
    }
}


function setup() {
    createCanvas(500,500);
    defStart();
    scale();
}

function draw() {
    background(200);
    var amnt = colsN * rowN;
    var col = colS;
    var row = rowS;
    drawNum(col, row, 1);
//    for (i = 1; i <= amnt; i + 1) {
//        drawNum(col, row, i);
//        // To work out whether you change 
//        if (countC === setC) {
//            changeD()
//        }
//        // ----------
//        col = col + moveX;
//        row = row + moveY;
//    }
}
