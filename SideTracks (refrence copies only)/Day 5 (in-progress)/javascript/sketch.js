//refrence code: https://p5js.org/examples/color-linear-gradient.html

// Constants
const Y_AXIS = 1;
const Y_AXISv2 = 2;
let b1, b2, c1, c2, k1, k2;


function draw() {
  background(200);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 250));
  rect(150, 150, 60, 20);

  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 10, 10));
  rect(15, 15, 10, 10);
}


function setup() {
    createCanvas(1000, 1000);
    background(22, 6, 57)
}
