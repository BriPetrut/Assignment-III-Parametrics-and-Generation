//refrence code: https://editor.p5js.org/jonfroehlich/sketches/MSGdVYUle

let diameter = 25;
const SPACEBAR_KEYCODE = 32;

function setup() {
  createCanvas(1000, 1000);
  background(0);
  colorMode(HSB);
  noStroke();
}

function draw() {
    let hue = map(mouseX, 0, width, 0, 500);
    if(mouseIsPressed == true || keyIsDown(SPACEBAR_KEYCODE)){
        noStroke();
        fill(hue, 70, 80, 0.8);
    }else{
      noStroke();
      noFill(); 
    }
  
  ellipse(mouseX, mouseY, diameter, diameter)

  fill(0)
    rect(225, 350, 550, 105)
    rect(225, 550, 550, 105)
}
