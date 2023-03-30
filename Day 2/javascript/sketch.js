//citations bellow
//background load refrence = https://editor.p5js.org/claesjohnson/sketches/QTNArizfo
//mouse circle interaction refrence = https://p5js.org/learn/interactivity.html
//blend mode refrence = https://p5js.org/reference/#/p5/blendMode




// !!! IMPORTANT !!!
//Side note: I was inspired by those "secret message" things you get in kid spy books. So that's what I was trying to re-create :)
//I made the background myself in figma by using the pen tool and scribble-ing

let bg;
let y = 0;

function draw() {
    background(255, 255, 255);
    stroke(255, 0, 0);
    fill(255, 0, 0);
    ellipse(mouseX, mouseY, 700, 700);    
    blendMode(SUBTRACT)

    stroke(217, 232, 245);
    noFill ()
    //strokeWeight(25);
    //fill(217, 232, 245)
    fill(210, 255, 255)
    blendMode(MULTIPLY)
    rect(225, 350, 550, 105)
    rect(225, 550, 550, 105)

    blendMode(NORMAL)
    blendMode(SUBTRACT)
    background(bg);
    y++;
    if (y > height) {
      y = 0;
    }

}

function setup() {
    bg = loadImage('Background.png');
    createCanvas(1000, 1000);
    noFill ()
}
