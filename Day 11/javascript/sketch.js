//Tutorial base (https://p5js.org/examples/3d-geometries.html)
//Tutorial to understand diffrent textures, materials and lighting avaiable with this 3d stuff (https://p5js.org/learn/getting-started-in-webgl-appearance.html#materials)

function setup() {
  createCanvas(1000, 1000, WEBGL);
}

function draw() {
  background(200, 200, 200);
  noStroke(0)

  ambientLight(128);
  let locX = mouseX - width / 2;
  let locY = mouseY - height / 2;
  pointLight(255, 50, 0, locX, locY, 200);
  
  ambientMaterial(0, 0, 255);
  translate(0, -100, 0);
  push();
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  box(50, 105, 550);
  pop();

  translate(0, 200, 0);
  push();
  rotateX(frameCount * 0.005);
  rotateY(frameCount * 0.01);
  box(50, 105, 550);
  pop();

}
