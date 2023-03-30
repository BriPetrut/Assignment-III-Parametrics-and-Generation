//Code refrenced - Compform's animation module (https://compform.net/animation/)
//Variation of day 8's code that I wanted to show

function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

function draw() {
  background(0);

  const a = map(frameCount, 0, 120, 0, PI);
  let offset = tan(a) * 60;
  let r = random(75);
  const y = 300 - offset - r +50;
  const x = 200 - offset - r +50;

  fill(255, 255, 255);
  rect(x, y, 550, 105);
  rect(x, y +200, 550, 105);
}
