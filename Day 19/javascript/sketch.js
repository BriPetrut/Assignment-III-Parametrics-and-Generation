//refrence code: https://p5js.org/reference/#/p5/noise

let noiseScale=0.01;

function setup() {
    createCanvas(1000, 1000);
}

function draw() {
    background(245);
    for (let x=0; x < width; x++) {
        let noiseVal = noise(x*noiseScale, mouseY*noiseScale);
        stroke(noiseVal*225, 255, 255);
        line(x, mouseY+noiseVal*30, x, height);
      }

    noStroke()
    fill(245)
    rect(0, 0, 1000, 350)
    rect(0, 655, 1000, 350)
    rect(225, 457, 550, 90)
    rect(0, 340, 225, 325)
    rect(775, 340, 225, 325) 
}
