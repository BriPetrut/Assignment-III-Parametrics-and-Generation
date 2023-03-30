// refrence code used: https://editor.p5js.org/mbardin/sketches/-WF_mjFV8
//I was messing around with blend mode and it created this unexpected result so I just rolled with it :)

let d1;
let r1;
let d2;
let r2;
let rect2Y = -105;
let rect3Y = 1000;

function setup() {
  createCanvas(1000, 1000);
  blendMode(DIFFERENCE)
}

function draw() {

//refrence rectangles
noStroke(0)
fill(1)
rect(225, 350, 550, 105)
rect(225, 550, 550, 105)

  //draws the shapes
  fill("tan");
  rect(0, rect2Y, 1000, 105);
  fill("red");
  rect(0, rect3Y, 1000, 105);



//animates the shapes on the screen
  rect2Y++;
  rect3Y--;

  //returns the shapes when they move off screen
  if (rect2Y > 1000) {
    rect2Y = -105;
  } else if (rect3Y < -105) {
    rect3Y = 1000;
  }


function checkRect(objX, objY, leftX, topY, widthX, heightY) {
  if (objX > leftX && objX < leftX + widthX) {
    if (objY > topY && objY < topY + heightY) {
      return true
    }
  } else {
    return false;
  }
}

}