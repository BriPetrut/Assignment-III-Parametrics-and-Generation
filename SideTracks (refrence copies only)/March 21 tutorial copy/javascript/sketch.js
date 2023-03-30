
var cWidth = 1000;
var cHeight = 1000;
var i = 0;

function setup() {
  createCanvas(cWidth, cHeight);
  background(150, 157, 33);
  frameRate(30);
  angleMode(DEGREES);

}

function draw () {
  push();
  noFill();
  stroke(255);
  elipse(cHeight / 2, cHeight / 2, 300 + (i), 500);
  i++;
  pop();

}