//Grain texture img (https://unsplash.com/photos/UAbg0py6GYQ)
//Code refrenced bkr image (https://p5js.org/examples/image-background-image.html)

let canvas 
let bg;
let y = 0;

function setup() {
  createCanvas(1000, 1000);
  bg = loadImage('ernest-karchmit-UAbg0py6GYQ-unsplash.jpg');

}

function draw() {
  blendMode(NORMAL)
  background(239, 231, 222)
  noStroke(0)
  blendMode(NORMAL)

  blendMode(MULTIPLY)
  fill(251, 209, 0)
  rect(150, 225, 550, 150)
  fill(254, 120, 219)
  rect(250, 300, 550, 150)

  translate(25, 25, 25)
  fill(251, 209, 0)
  rect(150, 225, 550, 150)
  fill(254, 120, 219)
  rect(250, 300, 550, 150)

  translate(50, 300, 50)
  fill(254, 120, 219)
  rect(250, 250, 550, 150)
  fill(251, 209, 0)
  rect(150, 325, 550, 150)

  translate(25, 25, 25)  
  fill(254, 120, 219)
  rect(250, 250, 550, 150)
  fill(251, 209, 0)
  rect(150, 325, 550, 150)

  blendMode(SCREEN)
  background(bg);
  blendMode(NORMAL)
  
}

