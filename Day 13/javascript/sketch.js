//where I understood how to do for loops = https://happycoding.io/tutorials/p5js/for-loops
//where I understood how to do mouseClicked() = https://p5js.org/reference/#/p5/mouseClicked


let value = 0;
let randomColour;

function setup() {
  createCanvas(1000, 1000);
  randomColour = color(150)

}

function draw() {
  background(randomColour);
  fill(randomColour +1);
  stroke(randomColour);
  strokeWeight(50)
  for (let rectY = 350; rectY <= 600; rectY += 200) {
    rect(250, rectY, 550, 150);
  }

}

function mouseClicked() {
  if (value === 0) {
    value = 255;
  } else {
    value = 0;
  }
}

function mousePressed(){
  //I was experimenting with blend modes again to see how it would change stuff and it creates this cool transition so I kept it
  blendMode(HARD_LIGHT)
  randomColour = color(random(250), random(250), random(250) );
}