/*
Dillon Wilcox
Homework 14
MART 120
Arrays
 */

//character ellipse small green circle arrays
let xc = [];
let yc = [];
let diameterc = [];

//arrays for one of the ellipse objects
let ox = [];
let oy = [];
let odiameter = [];

//mouse click array start location
let mousex = [];
let mousey = [];

//jittery object array
let bugs = [];

//The color inventory is 8
let colors = [7];

//setup
function setup() {
    createCanvas(950, 900);

    //character circle
    xc[0] = 300;
    yc[0] = 250;
    diameterc[0] = 25;

    //obsticles
    ox[0] = 650;
    oy[0] = 400;
    odiameter[0] = 35;

    //Not the best way to store colors probably
    colors[0] = color(15, 150, 250);
    colors[1] = color(150, 15, 25);
    colors[2] = color(1, 20, 30);
    colors[3] = color(250, 10, 200);
    colors[4] = color(50, 100, 199);
    colors[5] = color(6, 80, 90);
    colors[6] = color(90, 200, 99);
    colors[7] = color(80, 2, 225);

    //black border of shapes
    strokeWeight(2);
    stroke(2);

    //moving object calls
    for (let j = 0; j < 8; ++j) {
        bugs.push(new Jitter());
    }
}

//Calls to functions
function draw() {
    background(0, 0, 255);
    player();
    keyPressed();
    clickEllipse();
    boardRect(10);
    obstacles(ox[0], oy[0], odiameter[0]);
    obstacles(595, 95, 50);
    endgoal();

    //for statement to draw each moving object incremented down in size
    for (let j = 0; j < bugs.length; ++j) {
        bugs[j].move();
        bugs[j].display();
        bugs[j].shade();
    }
}

//winning message
function endgoal() {
    if(xc > width)
    {
        fill(10, 150, 255);
        stroke(5);
        textSize(26);
        text("WINNING", 350, 850);
    }
}


//player or character also the small green circle
function player() {
    let c = color(20, 255, 20);
    fill(c);
    ellipse(xc[0], yc[0], diameterc[0]);
}

//key press event to move the character player green circle
function keyPressed() {
    if (key === 'd')
    {
        xc[0] += 3;
    }
    else if (key === 'a')
    {
        xc[0] -= 3;
    }
    if (key === 's')
    {
        yc[0] += 3;
    }
    else if (key === 'w')
    {
        yc[0] -= 3;
    }
}

//mouse press event
function mousePressed() {
    mousex[0] = mouseX;
    mousey[0] = mouseY;
}

//When you click and the circle stays function
function clickEllipse() {
    c = color(200, 2, 75);
    fill(c);
    ellipse(mousex, mousey, 38);
}

//Border
function boardRect(girth) {
    c = color(80);
    fill(c);
    rect(0, 0, width, girth);
    rect(0, 0, girth, height);
    rect(0, height - girth, width, girth - 80);
    rect(width - girth, 0, girth, height);
}

//objects that are not moving
function obstacles(ox, oy, odiameter) {

    //circle objects
    c = color(0, 255, 255);
    fill(c);
    ellipse(ox, oy, odiameter);

    //black rectangle object
    c = color(15, 0, 25);
    fill(c);
    rect(730, 180, 30, 110);

    //exit rectangle
    c = color(15, 250, 25);
    fill(c);
    rect(900, 120, 130, 120);
}



//moving ellipses class with random fast random color changes
class Jitter {
    constructor() {
        //location the objects start at
        this.x = random(width);
        this.y = random(height);
        //how large the objects can be
        this.diameter = random(50, 100);

        //the speed the objects move at.
        this.speed = 14;
    }

    //magnitude of the level of movement method
    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        if(this.x > width) {
            this.x = 0;
        }
        if(this.x < 0) {
            this.x = width;
        }
        if(this.y > height) {
            this.y = 0;
        }
        if(this.y < 0) {
            this.y = height;
        }
    }

    //display method
    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    //color change method
    shade() {
        this.SelCol = random(colors);
        fill(this.SelCol);
    }
}