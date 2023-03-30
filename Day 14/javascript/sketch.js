
function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  blendMode(MULTIPLY)
  stroke(200, 255, 200)
  strokeWeight(2)
  fill(255)
  background(255);
  translate(0, 0);
  rect(mouseX, mouseY, 500, 105);   
  translate(0, 175);
  rect(mouseX, mouseY, 500, 105); 

  //front area thingie
  blendMode(NORMAL)
  noStroke(0)
  fill(255)
  translate(0, 0);
  rect(225, 200, 550, 105)
  rect(225, 400, 550, 105)

}