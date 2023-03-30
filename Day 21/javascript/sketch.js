//refrence code: https://p5js.org/examples/interaction-tickle.html
//font link: https://www.1001fonts.com/kg-always-a-good-time-font.html 


let message = '=',
  font,
  bounds,
  fontsize = 1000,
  x,
  y;

function preload() {
  font = loadFont('kg-always-a-good-time.regular.ttf');
}

function setup() {
  createCanvas(1000, 1000);
  textFont(font);
  textSize(fontsize);
  bounds = font.textBounds(message, 0, 0, fontsize);
  x = width / 2.8 - bounds.w / 2;
  y = height / 1.04 - bounds.h / 2;
}

function draw() {
  background(0);
  blendMode(BLEND)
  //strokeWeight(0.5)
  //stroke(255)
  text(message, x, y);
  bounds = font.textBounds(message, x, y, fontsize);
  fill(0);

  if (
    mouseX >= bounds.x &&
    mouseX <= bounds.x + bounds.w &&
    mouseY >= bounds.y &&
    mouseY <= bounds.y + bounds.h
  ) {
    x += random(-20, 20);
    y += random(-20, 20);
    fill(255, 25, 0);
  }
}