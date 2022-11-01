function setup() {
    createCanvas(800, 700);
    background(90);
}

function draw() {
    stroke(255);
    textSize(20);
    //An if statement to allow clicking and drawing on the canvas
    text('DillonJLWilcox', 620, 680);
    text('Minimalist Personality', 50, 50);
    if (mouseIsPressed === true) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
    //The Portrait
    circle(400, 90, 50);
    rect(367, 120, 70, 120);
    triangle(360, 300, 400, 180, 400, 350);
    triangle(450, 300, 410, 180, 410, 350);
    point(380, 50);
    point(420, 50);
    line(380, 120, 305, 200);
    line(430, 120, 510, 200);
    line(291, 194, 304, 197);

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