/*
Dillon Wilcox
MART 120
Homework Week 11
sketch.js
 */

//character ellipse
var xc = 300;
var yc = 250;
var diameterc = 29;

//mouse click
var mousex = 0;
var mousey = 0;

//declare jittery object
let bug1;
let bug2;
let bug3;
let bug4;
let bug5;


function setup() {
    createCanvas(750, 900);

    //Jitter object calls
    bug1 = new Jitter();
    bug2 = new Jitter();
    bug3 = new Jitter();
    bug4 = new Jitter();
    bug5 = new Jitter();
}


function draw() {
    background(0);

    //movable object
    let c = color(255, 204, 2);
    fill(c);
    ellipse(xc, yc, diameterc);

    //click object
    c = color(100, 255, 75);
    fill(c);
    ellipse(mousex, mousey, 38);


    c = color(15, 250, 25);
    fill(c);
    rect(730, 180, 30, 110);


    //jittery objects
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
    c = color(150, 200, 200);
    fill(c);
    bug4.move();
    bug4.display();
    c = color(225, 200, 0);
    fill(c);
    bug5.move();
    bug5.display();


    if(xc > width) //&& yc > width-10)
    {
        fill(10, 150, 255);
        stroke(5);
        textSize(26);
        text("GREEN RECTANGLE WIN", width/2-50, height/2-50);
    }
}

//mouse press event
function mousePressed() {
    mousex = mouseX;
    mousey = mouseY;
}


//key press event
function keyPressed() {
    if (key === 'd')
    {
        xc += 15;
    }
    else if (key === 'a')
    {
        xc -= 15;
    }
    if (key === 's')
    {
        yc += 15;
    }
    else if (key === 'w')
    {
        yc -= 15;
    }
}


//jittery ellipse class
class Jitter {
   constructor() {
       this.x = random(width);
       this.y = random(height);
       this.diameter = random(50, 100);
       this.speed = 1;
   }

   //amount of jitter
   move() {
       this.x += random(-this.speed, this.speed);
       this.y += random(-this.speed, this.speed);
   }

   //display jittery ellipse
   display() {
       ellipse(this.x, this.y, this.diameter, this.diameter);
   }
}

