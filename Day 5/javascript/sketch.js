//refrenced source: https://p5js.org/reference/#/p5/blendMode
//refrenced code for colour background: https://codepen.io/clydelobo/pen/zwBRbY

var r = 100, g = 100, b = 100;
var dr = 3, dg = 3, db = 3;

function setup() {
    createCanvas(1000, 1000);
    //background(255, 0, 0)
}

function draw() {
    blendMode(NORMAL);
    background(r,g,b);
      r += dr;
      g += dg;
      b += db;
      if (r < random(0, 25) || r > random(225, 255)) {
        dr = -dr;
      }
      if (g < random(0, 25) || g > random(225, 255)) {
        dg = -dg;
      }
      if (b < random(0, 25) || b > random(225, 255)) {
        db = -db;
      }
blendMode(NORMAL);

//Bri's side note, this also looks cool with the following blendmodes: DIFFERENCE, EXCLUSION, OVERLAY, SOFT_LIGHT
blendMode(DIFFERENCE);
    noStroke()
    fill(255, 0, 0);
    rect(225, 325, 550, 105)
    rect(275, 575, 550, 105)
  
    fill(0, 255, 0);
    rect(200, 375, 550, 105)
    rect(250, 550, 550, 105)
  
    fill(0, 0, 255);
    rect(250, 350, 550, 105)
    rect(225, 575, 550, 105)
blendMode(NORMAL);
    
}
