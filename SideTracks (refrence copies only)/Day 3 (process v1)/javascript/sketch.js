//citations bellow
//https://wixette.github.io/p5.animS/






const FRAME_RATE = 30;
const DURATION = FRAME_RATE * 2;

function setup() {
    createCanvas(1000, 1000);
    colorMode(HSB, 360, 100, 100, 1);
    frameRate(FRAME_RATE);
}

function draw() {
    
  background(0);
    noFill();

  strokeWeight(25);
  
  rect(225, 350, 550, 105)
  rect(225, 550, 550, 105)

    //two lines bellow does the blur effect (tutorial used:https://youtu.be/iIWH3IUYHzM)
    drawingContext.shadowBlur = 25;
    drawingContext.shadowColor = color(255, 255, 255); 
    const C1 = color(255, 50, 50);
    const C2 = color(255, 50, 50);
    const W1 = 5;
    const W2 = 5;

    strokeWeight(W1);
    stroke(C2);

    animS.shape('curve1', DURATION, [
        [255, 0],
        [600, 180],
        [900, 180],
        [600, 0],

    ]);

}

function mouseClicked() {
    animS.reset();
}