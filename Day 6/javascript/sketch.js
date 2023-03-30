//Refrenced code: https://p5js.org/examples/input-mouse-functions.html
//refrenced code: https://p5js.org/reference/#/p5/blendMode
let bx;
let by;
let boxSize = 50;
let overBox = false;
let locked = false;
let xOffset = 0.0;
let yOffset = 0.0;

function setup() {
  createCanvas(1000, 1000);
  bx = width / 2.0;
  by = height / 2.0;
  rectMode(RADIUS);
  strokeWeight(5);
}

function draw() {
  background(237, 34, 93);
  blendMode(NORMAL);

  // Test if the cursor is over the box
  if (
    mouseX > bx - boxSize &&
    mouseX < bx + boxSize &&
    mouseY > by - boxSize &&
    mouseY < by + boxSize
  ) {
    overBox = true;
    if (!locked) {
      stroke(1000);
      fill(0, 0, 0);
    }
  } else {
    stroke(255, 255, 255);
    fill(0, 0, 0);
    overBox = false;
  }

  // Draw the box
  rect(bx, by +115, boxSize +250, boxSize +15);
  rect(bx, by -115, boxSize +250, boxSize +15);
  //Bri's side note, I was messing around with blend modes again and it created this cool thing when placed in this part of the code (i tried a bunch of other areas before) and I liked it so I kept it :)
  blendMode(MULTIPLY);

}

function mousePressed() {
  if (overBox) {
    locked = true;
    fill(255, 255, 255);
  } else {
    locked = false;
  }
  xOffset = mouseX - bx;
  yOffset = mouseY - by;
}

function mouseDragged() {
  if (locked) {
    bx = mouseX - xOffset;
    by = mouseY - yOffset;
  }
}

function mouseReleased() {
  locked = false;
}