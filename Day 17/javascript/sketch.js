//refrence code: https://p5js.org/examples/3d-geometries.html
//refrence tutorial: https://thecodingtrain.com/challenges/166-image-to-ascii


function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(0);

  ambientLight(46, 54, 55);
  //normalMaterial(255, 255, 255);
  pointLight(255, 255, 255, -100, -50, 100);

  //let locX = mouseX - height / 2;
 // let locY = mouseY - width / 2;

  push();
  translate(0, -50)
  rotateX(60)
  //rotateZ(8)
  rotateY(2.2);
  translate(+25, -200)
  box(75, 125, 600, 5);
  translate(0, 250)
  box(75, 125, 600, 5);
  pop();

  blendMode(SCREEN)
}
