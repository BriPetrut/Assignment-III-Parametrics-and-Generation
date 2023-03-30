function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(0)
  blendMode(ADD)

  noStroke()
  fill(255, 0, 0)
  rect(350, 325, 300, 75)
  rect(465, 325, 75, 400)

  translate(50, 50)  
  fill(0, 255, 0)
  rect(350, 325, 300, 75)
  rect(465, 325, 75, 400)

  translate(-100, -100)  
  fill(0, 0, 255)
  rect(350, 325, 300, 75)
  rect(465, 325, 75, 400)
  
  blendMode(NORMAL)

}
