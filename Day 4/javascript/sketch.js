//refrence code: https://p5js.org/examples/color-linear-gradient.html

// Constants
const Y_AXIS = 1;
const Y_AXISv2 = 2;
let b1, b2, c1, c2, k1, k2;


function draw() {
  noStroke()

  fill(255, 255, 255);
  //left outline
  rect(200, 350, 25, 105);
  rect(200, 550, 25, 105);
  //right outline
  rect(775, 350, 25, 105);
  rect(775, 550, 25, 105);
  //top outline
  rect(225, 325, 550, 25);
  rect(225, 525, 550, 25);
  //bottom outline
  rect(225, 455, 550, 25);
  rect(225, 655, 550, 25);
  //full boiis
  rect(225, 350, 550, 105);
  rect(225, 550, 550, 105);

  //gradient layering 1 top
  fill(93, 187, 253);
  rect(800, 375, 15, 105);
  rect(250, 480, 550, 15);
  rect(775, 455, 25, 25);
  //gradient layering 1 bottom
  fill(255, 0, 179);
  rect(800, 575, 15, 105);
  rect(250, 680, 550, 15);
  rect(775, 655, 25, 25);

  //gradient layering 2 top
  fill(50, 88, 186);
  rect(815, 395, 8, 85);
  rect(270, 495, 530, 8);
  rect(795, 475, 20, 20);
  //gradient layering 2 bottom
  fill(176, 12, 78);
  rect(815, 595, 8, 85);
  rect(270, 695, 530, 8);
  rect(795, 675, 20, 20);


  //bkr fun arcade confeti paths
    //https://p5js.org/reference/#/p5/arc
    //https://p5js.org/reference/#/p5/triangle
    //https://p5js.org/reference/#/p5/line
    stroke(24, 22, 75);
    noFill();
    strokeWeight(15)
    arc(800, 200, 100, 100, 0, PI + QUARTER_PI, OPEN);
    arc(150, 800, 180, 180, HALF_PI, PI);
    triangle(75, 75, 75, 170, 165, 105);
    triangle(800, 800, 850, 900, 900, 800);
    triangle(150, 200, 300, 200, 275, 250);
    triangle(200, 750, 250, 850, 350, 800);
    triangle(875, 675, 980, 725, 1100, 500);
    triangle(500, 250, 600, 50, 750, 100);
    circle(500, 75, 20);
    circle(125, 700, 20);
    circle(425, 925, 20);
    circle(675, 800, 20);
    circle(150, 350, 20);
    circle(5, 500, 20);
    circle(950, 45, 20);
    circle(15, 975, 20);
    circle(890, 500, 20);
    circle(10, 325, 125);
    circle(630, 985, 250);
    circle(400, 280, 15);
    circle(999, 325, 150);

    line(350, 900, 225, 975);
    line(125, 525, 25, 650);
    line(220, 145, 400, 5);

    strokeWeight(1)


  //gradient code continues here:
  noStroke()
  setGradient(225, 350, 550, 105, c1, c2, Y_AXIS);
  setGradient(225, 550, 550, 105, k2, k1, Y_AXISv2);
}

function setGradient(x, y, w, h, c1, c2, axis) {
  noFill();

  if (axis === Y_AXIS) {
    // Top to bottom gradient
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(c1, c2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  } else if (axis === Y_AXISv2) {
    // reversing code above to make opposite
    for (let i = y; i <= y + h; i++) {
      let inter = map(i, y, y + h, 0, 1);
      let c = lerpColor(k1, k2, inter);
      stroke(c);
      line(x, i, x + w, i);
    }
  }
}

function setup() {
    createCanvas(1000, 1000);
    background(22, 6, 57)

    b1 = color(255);
    b2 = color(0);
    c1 = color(50, 88, 186);
    c2 = color(93, 187, 253);
    k1 = color(176, 12, 78);
    k2 = color(255, 0, 179);
  
    noLoop();
}
