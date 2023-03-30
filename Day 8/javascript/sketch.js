//Code refrenced - Compform's animation module (https://compform.net/animation/)

function setup() {
  createCanvas(1000, 1000);
  frameRate(60);
}

function draw() {
  background(0);

  const a = map(frameCount, 0, 100, 0, PI);
  let offset = cos(a) * -350;
  //let r = random(75);
  // orriginally I had added let r then bellow made it say offset - r but when I removed it it did this cool thing so I kept it that way
  const y = 700 - offset;
  const x = 550 - offset;

  //I experimented with blend modes since it breaks code in cool ways so I added this due to it's unexpected outcome
  blendMode(DIFFERENCE)
  fill(255, 255, 255);
  rect(x, y, 550, 105);
  rect(x, y +250, 550, 105);
}
