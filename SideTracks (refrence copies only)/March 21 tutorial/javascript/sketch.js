
var p = 0;
var k = 0;
var myBool = false;
var myBool2 = false;
var string = "name";

function setup() {
  createCanvas(1000, 1000)
  background(100, 157, 33)

}

function draw() {
  if (p <= 100 && myBool == true) {
    push()
      translate(200, 200)
      noFill()
      stroke(0)
      rotate(p);
      rect(0, 0, 100)
      p++;
    pop()
  }

  if (p == 100) {
    myBool2 = true;
  }

  if (k <= 200 && myBool2 == true) {
    push()
    noFill()
    stroke(0)
    rect(100, 100 + k, 100)
    k++
    pop()
  }

}

function mouseClikced() {
    myBool = true;
}

function keypressed() {
  if(key == 's') {
      saveCanvas('sketch', 'png');
  }
}
