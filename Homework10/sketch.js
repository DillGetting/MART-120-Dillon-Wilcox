/*
Dillon Wilcox
Sketch.js
MART 120
Homework 10
 */

//vars for colors
var redColor = 90;
var greenColor = 50;
var blueColor = 120;

//vars for head circle
var x = 400;
var y = 90;
var diameter = 50;

//vars for signature
var x1 = 620;
var y1 = 680;

//vars for Title
var x2 = 50;
var y2 = 50;

//vars for moving 'stick'
var lx1 = 291;
var ly1 = 194;
var lx2 = 304;
var ly2 = 197;

//armwag
var ax1 = 430;
var ay1 = 120;
var ax2 = 510;
var ay2 = 200;

//vars for movement
var headmovement;
var signaturemovement;
var stickmovement;
var stickmovement2;
var armwag;

//values used in title movement
let a = 0.0;
let s = 0.0;

function setup() {
    createCanvas(800, 700);
    headmovement = Math.floor(Math.random() * 10) + 0.5;
    signaturemovement = Math.floor(Math.random() * 10) + -0.5;
    stickmovement = Math.floor(Math.random() * 10) + -1;
    stickmovement2 = Math.floor(Math.random() * 10) + -1;
    armwag = Math.floor(Math.random() * 10) + 1;
}


//Drawing begins here
function draw() {
    background(redColor, greenColor, blueColor);
    stroke(255);

    //Signature
    textSize(20);
    text('DillonJLWilcox', x1, y1);
    fill(redColor, blueColor, greenColor);
    text('DillonJLWilcox', x1 - 3, y1 - 3);

    //broken if statement
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }


    //Head
    circle(x, y, diameter);
    fill(redColor, blueColor, greenColor);
    circle(x, y, 50);


    //head dots
    point(380, 50);
    point(420, 50);


    //Body
    rect(367, 120, 70, 120);


    //Legs
    triangle(360, 300, 400, 180, 400, 350);
    triangle(450, 300, 410, 180, 410, 350);


    //Arms
    line(380, 120, 305, 200);
    line(ax1, ay1, ax2, ay2);


    //stick
    line(lx1, ly1, lx2, ly2);


    //Title
    a = a + 0.04;
    s = cos(a) * 2;
    translate(x2 / 2, y2 / 2);
    scale(s);
    text('Minimalist Personality', x2, y2);
    fill(redColor, blueColor, greenColor);
    translate(x2 + 25, y2 - 49);
    scale(s);
    text('Minimalist Personality', x2 + 1, y2 + .5);


    //Movement of Head
    if (x >= 800 || x <= 0) {
        headmovement *= -1;
    }
    x += headmovement;


    //movement of signature
    if (x1 >= 800 || x1 <= 20) {
        signaturemovement *= -1;
    }
    x1 += signaturemovement;


    //stick movement diagonal on one side
    if (ly1 >= 700 || ly1 <= 20) {
        stickmovement *= -1;
    }
    ly1 += stickmovement;

    if (lx1 >= 700 || lx1 <= 20) {
        stickmovement *= -1;
    }
    lx1 += stickmovement;

    //stick movement up and down and the other side
    if (ly2 >= 500 || ly2 <= 0) {
        stickmovement2 *= -1;
    }
    ly2 += stickmovement2;


    //arm wag up and down
    if (ay2 >= 200 || ay2 <= 0) {
        armwag *= -1;
    }
    ay2 += armwag;
}

//the function below is a recursive circle drawing I tried to add onto the first drawing
/*function drawCircle(x, radius, level) {
    const tt = (126 * level) / 4.0;
    fill(tt);
    ellipse(x, height / 2, radius * 2, radius * 2);
    if (level > 1) {
        level = level - 1;
        drawCircle(x - radius / 2, radius / 2, level);
        drawCircle(x + radius / 2, radius / 2, level);
    }
}*/