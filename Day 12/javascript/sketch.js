//Library file (https://github.com/generative-light/p5.scribble.js/)
//refrenced code to understand (https://editor.p5js.org/shfitz/sketches/0ZJfKzJhi)

let scrib;
let angle = 0;

function setup() {
  createCanvas(1000, 1000);
  scrib = new Scribble();
}

function draw() {
  background(253, 250, 242);
  randomSeed(250);
  scrib.maxOffset = 5;
  strokeWeight(3);

  //top rectangle
  translate(0, 50, 0);
  stroke(248, 219, 11);
  let xCoords = [width / 6, width / 6, width / 1.2 * 1, width / 1.2 * 1];
  let yCoords = [height / 4, 3 * height / 8, 3 * height / 8, height / 4];
  let gap = 7;
  scrib.scribbleFilling(xCoords, yCoords, gap, 45);

  strokeWeight(5);
  stroke(225, 187, 1);
  scrib.scribbleRect(width / 2, height / 3.2, width / 1.5, height / 8, );

  //bottom rectangle
  translate(0, 250, 0);
  stroke(255, 69, 136);
  let xCoords2 = [width / 6, width / 6, width / 1.2 * 1, width / 1.2 * 1];
  let yCoords2 = [height / 4, 3 * height / 8, 3 * height / 8, height / 4];
  let gap2 = 7;
  scrib.scribbleFilling(xCoords2, yCoords2, gap2, 150);

  strokeWeight(5);
  stroke(168, 53, 82);
  scrib.scribbleRect(width / 2, height / 3.2, width / 1.5, height / 8, );

}
