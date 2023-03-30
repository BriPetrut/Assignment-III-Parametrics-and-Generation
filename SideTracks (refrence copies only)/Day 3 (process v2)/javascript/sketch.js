// Where is the circle
let x, y;

function setup() {
  createCanvas(1000, 1000);
  
  // Starts in the middle
  x = width / 4.4;
  y = height;
}

function draw() {
  background(200);
  stroke(0)
  fill(500)
  rect(125, 125, 750, 750)

// refrence rects
  noFill();
  rect(225, 350, 550, 105)
  rect(225, 550, 550, 105)

  // Draw a rectangle
  stroke(0);  
  fill(255, 0, 0);
  rect(x, y, 550, 105);
  // Moving up at a constant speed
  y = y - 3.5;
  // Reset to the bottom
  if (y < 10) {
    y = height;
  }

}


//rect(225, 350, 550, 105)
//rect(225, 550, 550, 105)