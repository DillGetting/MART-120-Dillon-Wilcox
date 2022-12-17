/*
Dillon Wilcox
MART 120
FINAL PROJECT
Visual Snow
*/

//blib/gobs
let gobs = [];

//quadrangles
let quads = [];

//place store selected colors
let colors = [3];

//the values needed for rect() but as arrays
let xr = [];
let yr = [];
let wr = [];
let hr = [];

//starecircle
let xc = [];
let yc = [];
let dc = [];


function setup() {
    createCanvas(850, 900);

    //rectangles indexing
    xr[0] = 146;
    yr[0] = 100;
    wr[0] = 89;
    hr[0] = 45;

    xr[4] = 600;
    yr[4] = 655;
    wr[4] = 150;
    hr[4] = 80;

    //middle starecircle
    xc[0] = 420;
    yc[0] = 420;
    dc[0] = 25;


    //colors that are available to shapes
    colors[0] = color(15, 150, 250);
    colors[1] = color(150, 15, 25);
    colors[2] = color(1, 20, 30);
    colors[3] = color(250, 10, 200);

    //border on objects
    strokeWeight(1);
    stroke(1);

    //spawn circles
    for (let j = 0; j < 27; j++) {
        gobs.push(new Blips());
    }

    //spawn quads
    for (let i = 0; i < 17; i++) {
        quads.push(new Angulars());
    }
}


function draw() {
    background(200, 200, 250);

    //placing some rectangles
    rectangles(xr[0], yr[0], wr[0], hr[0]);
    rectangles(xr[4], yr[4], wr[4], hr[4]);

    //makes your mouse be a circle that changes colors on a click
    if (mouseIsPressed) {
        fill(0, 255, 100);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 20, 20);

    //stareCircle call
    stareCircle(xc[0], yc[0], dc[0]);

    //mouse coordinates
    /*
    textSize(20);
    text("X: " + mouseX, 100, 200);
    text("Y: " + mouseY, 100, 220);
     */

    //using the gobs with Blips methods
    for (let j = 0; j < gobs.length; j++) {
        gobs[j].move();
        gobs[j].show();
        gobs[j].shade();
    }

    //using quads with Angulars methods
    for (let i = 0; i < quads.length; i++) {
        quads[i].placement();
    }
}

//function to make rectangles
function rectangles(xr, yr, wr, hr) {
    rect(xr, yr, wr, hr);
}

//funtion to make the circle in the center to look at
function stareCircle(xc, yx, dc) {
    ellipse(xc, yc, dc);
}



class Blips {
    constructor() {
        //places blips randomly
        this.x = random(width);
        this.y = random(height);
        //available diameter sizes
        this.diameter = random(5, 15);
        //speed of blips
        this.speed = 1;
    }

    //moves blips diagonally across and to opposite sides
    move() {
        //moves the blip across x and y axis at different speeds
        this.x += (this.speed);
        this.y += (this.speed + this.speed);
        //if x or y max on canvas is reached start over on the opposite side
        if (this.x > width) {
            this.x = 0;
        }
        if (this.x < 0) {
            this.x = width;
        }
        if (this.y > height) {
            this.y = 0;
        }
        if (this.y < 0) {
            this.y = height;
        }
    }

    //display the blips
    show() {
        ellipse(this.x, this.y, this.diameter, this.diameter);
    }

    //makes things change to colors from the array
    shade() {
        this.SelCol = random(colors);
        fill(this.SelCol);
    }
}

//rect(x, y, width, height)
class Angulars {
    constructor() {
        //only places quads on left side at random
        this.x = random(width / 2);
        this.y = random(height);
        //picks random width and height
        this.width = random(5, 20);
        this.height = random(5, 21);
    }

    //method to display the quads
    placement() {
        rect(this.x, this.y, this.width, this.height);
    }
}