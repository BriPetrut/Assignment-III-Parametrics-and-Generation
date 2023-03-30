//Grain texture img (https://unsplash.com/photos/qi-H70ga93s)
//Code refrenced bkr image (https://p5js.org/examples/image-background-image.html)
let canvas 
let bg;
let y = 0;

function setup() {
  canvas = createCanvas(1000, 1000);
  bg = loadImage('bernard-hermant-qi-H70ga93s-unsplash.jpg');

}

function draw() {
  background(231, 222, 205);
  noStroke()

  fill(198, 23, 6)
  rect(300, 350, 550, 105)
  rect(300, 550, 550, 105)

  fill(216, 97, 22)
  quad(175, 300, 700, 300, 850, 350, 300, 350);
  quad(175, 500, 700, 500, 850, 550, 300, 550);

  fill(230, 128, 9)
  quad(175, 500, 300, 550, 300, 655, 175, 600);
  quad(175, 400, 300, 455, 300, 350, 175, 300);
  
  
  fill(203, 195, 180)
  quad(175, 670, 700, 670, 850, 700, 300, 700);
  quad(175, 700, 300, 740, 300, 700, 175, 670);
  rect(300, 700, 550, 40)


  blendMode(SOFT_LIGHT)
  background(bg);
  blendMode(NORMAL)

}
