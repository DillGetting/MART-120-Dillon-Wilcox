/*
Dillon Wilcox
Homework 12
MART 120
Functions
 */

//character ellipse small green circle
let xc = 300;
let yc = 250;
let diameterc = 29;

//variables for one of the ellipse objects
let ox = 650;
let oy = 400;
let odiameter = 35;

//mouse click variable start location
let mousex = 100;
let mousey = 100;

//jittery object variables
let bug1;
let bug2;
let bug3;

//setup
function setup() {
    createCanvas(950, 900);
    strokeWeight(2);
    stroke(2);

    //Jitter object calls
    bug1 = new Jitter();
    bug2 = new Jitter();
    bug3 = new Jitter();
}

//Calls to functions
function draw() {
    background(0, 0, 255);
    player();
    keyPressed();
    //mousePressed();
    clickEllipse();
    boardRect(10);
    obstacles(ox, oy, odiameter);
    obstacles(595, 95, 50);
    endgoal();
    jitterbugs();
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
    ellipse(xc, yc, diameterc);
}

//key press event to move the character player green circle
function keyPressed() {
    if (key === 'd')
    {
        xc += 3;
    }
    else if (key === 'a')
    {
        xc -= 3;
    }
    if (key === 's')
    {
        yc += 3;
    }
    else if (key === 'w')
    {
        yc -= 3;
    }
}

//mouse press event
function mousePressed() {
    mousex = mouseX;
    mousey = mouseY;
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

//function to store the calls to all moving objects at once
function jitterbugs() {
    c = color(180, 40, 58);
    fill(c);
    bug1.move();
    bug1.display();
    c = color(10, 255, 200);
    fill(c);
    bug2.move();
    bug2.display();
    c = color(100, 150, 255);
    fill(c);
    bug3.move();
    bug3.display();
}


//jittery ellipse class with random
class Jitter {
    constructor() {
        //location the objects start at
        this.x = random(width);
        this.y = random(height);
        //how large the objects can be
        this.diameter = random(50, 100);
        //the speed the objects move at
        this.speed = 25;
    }

    //magnitude of the level of movement
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

    //display jittery ellipses
    display() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }
}