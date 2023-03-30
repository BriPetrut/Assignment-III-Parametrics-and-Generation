//Code refrenced bkr image (https://happycoding.io/tutorials/p5js/input/mouse-ripple)

let positionX;
let positionY;
let rectangleSize;

function setup() {
  createCanvas(1000, 1000);
  noFill();
  strokeWeight(2);
  positionX = width / 2;
  positionY = height / 2;
  rectangleSize = 0;
  frameRate(120)

}

function draw() {
  background(0, 128, 255);

  noFill()
  blendMode(HARD_LIGHT)
  rectangleSize += 2;

  stroke(0, 0, 255);
  translate(-500, -450)
  rect(rectangleSize, rectangleSize, 550, 150)
  translate(0, 250)
  rect(rectangleSize, rectangleSize, 550, 150)


}

function mousePressed(){
  positionX = mouseX;
  positionY = mouseY;
  rectangleSize = 0;
}