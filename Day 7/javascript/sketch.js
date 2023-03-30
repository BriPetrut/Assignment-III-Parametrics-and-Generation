//Concept inspiration: https://youtu.be/U_8NgyDROYs
//base code to understand how to move shapes: https://editor.p5js.org/mbardin/sketches/-WF_mjFV8

let bgColor = "white";
let d1;
let r1;
let d2;
let r2;
let rect1X = -100;

function setup() {
  createCanvas(1000, 1000);
}

function draw() {
  background(bgColor);

  //draws the shapes
  fill("black");
  rect(rect1X, 0, 30, 1000);
  rect(rect1X -40, 0, 30, 1000);
  rect(rect1X -80, 0, 30, 1000);
  rect(rect1X -120, 0, 30, 1000);
  rect(rect1X -160, 0, 30, 1000);
  rect(rect1X -200, 0, 30, 1000);
  rect(rect1X -240, 0, 30, 1000);
  rect(rect1X -280, 0, 30, 1000);
  rect(rect1X -320, 0, 30, 1000);
  rect(rect1X -360, 0, 30, 1000);
  rect(rect1X -400, 0, 30, 1000);
  rect(rect1X -440, 0, 30, 1000);
  rect(rect1X -480, 0, 30, 1000);
  rect(rect1X -520, 0, 30, 1000);
  rect(rect1X -560, 0, 30, 1000);
  rect(rect1X -600, 0, 30, 1000);
  rect(rect1X -640, 0, 30, 1000);
  rect(rect1X -680, 0, 30, 1000);
  rect(rect1X -720, 0, 30, 1000);
  rect(rect1X -760, 0, 30, 1000);
  rect(rect1X -800, 0, 30, 1000);
  rect(rect1X -840, 0, 30, 1000);
  rect(rect1X -880, 0, 30, 1000);

//animates the shapes on the screen
  rect1X++;

  //returns the shapes when they move off screen
  if (rect1X > 1880) {
    rect1X = -50;
  }

//Bellow zone (illusion 1)
  fill("black");
  rect(200, 350, 9, 105);
  rect(240, 350, 9, 105);
  rect(280, 350, 9, 105);
  rect(320, 350, 9, 105);
  rect(360, 350, 9, 105);
  rect(400, 350, 9, 105);
  rect(440, 350, 9, 105);
  rect(480, 350, 9, 105);
  rect(520, 350, 9, 105);
  rect(560, 350, 9, 105);
  rect(600, 350, 9, 105);
  rect(640, 350, 9, 105);
  rect(680, 350, 9, 105);
  rect(720, 350, 9, 105);
  rect(760, 350, 9, 105);
  rect(800, 350, 9, 105);

  rect(200, 550, 9, 105);
  rect(240, 550, 9, 105);
  rect(280, 550, 9, 105);
  rect(320, 550, 9, 105);
  rect(360, 550, 9, 105);
  rect(400, 550, 9, 105);
  rect(440, 550, 9, 105);
  rect(480, 550, 9, 105);
  rect(520, 550, 9, 105);
  rect(560, 550, 9, 105);
  rect(600, 550, 9, 105);
  rect(640, 550, 9, 105);
  rect(680, 550, 9, 105);
  rect(720, 550, 9, 105);
  rect(760, 550, 9, 105);
  rect(800, 550, 9, 105);

//Bellow zone (illusion 2)
  fill("black");
  rect(207.5, 300, 9, 105);
  rect(247.5, 300, 9, 105);
  rect(287.5, 300, 9, 105);
  rect(327.5, 300, 9, 105);
  rect(367.5, 300, 9, 105);
  rect(407.5, 300, 9, 105);
  rect(447.5, 300, 9, 105);
  rect(487.5, 300, 9, 105);
  rect(527.5, 300, 9, 105);
  rect(567.5, 300, 9, 105);
  rect(607.5, 300, 9, 105);
  rect(647.5, 300, 9, 105);
  rect(687.5, 300, 9, 105);
  rect(727.5, 300, 9, 105);
  rect(767.5, 300, 9, 105);
  rect(807.5, 300, 9, 105);

  rect(207.5, 600, 9, 105);
  rect(247.5, 600, 9, 105);
  rect(287.5, 600, 9, 105);
  rect(327.5, 600, 9, 105);
  rect(367.5, 600, 9, 105);
  rect(407.5, 600, 9, 105);
  rect(447.5, 600, 9, 105);
  rect(487.5, 600, 9, 105);
  rect(527.5, 600, 9, 105);
  rect(567.5, 600, 9, 105);
  rect(607.5, 600, 9, 105);
  rect(647.5, 600, 9, 105);
  rect(687.5, 600, 9, 105);
  rect(727.5, 600, 9, 105);
  rect(767.5, 600, 9, 105);
  rect(807.5, 600, 9, 105);

//Bellow zone (illusion 3)
  fill("black");
  rect(215, 350, 9, 105);
  rect(255, 350, 9, 105);
  rect(295, 350, 9, 105);
  rect(335, 350, 9, 105);
  rect(375, 350, 9, 105);
  rect(415, 350, 9, 105);
  rect(455, 350, 9, 105);
  rect(495, 350, 9, 105);
  rect(535, 350, 9, 105);
  rect(575, 350, 9, 105);
  rect(615, 350, 9, 105);
  rect(655, 350, 9, 105);
  rect(695, 350, 9, 105);
  rect(735, 350, 9, 105);
  rect(775, 350, 9, 105);
  rect(815, 350, 9, 105);

  rect(215, 550, 9, 105);
  rect(255, 550, 9, 105);
  rect(295, 550, 9, 105);
  rect(335, 550, 9, 105);
  rect(375, 550, 9, 105);
  rect(415, 550, 9, 105);
  rect(455, 550, 9, 105);
  rect(495, 550, 9, 105);
  rect(535, 550, 9, 105);
  rect(575, 550, 9, 105);
  rect(615, 550, 9, 105);
  rect(655, 550, 9, 105);
  rect(695, 550, 9, 105);
  rect(735, 550, 9, 105);
  rect(775, 550, 9, 105);
  rect(815, 550, 9, 105);

//Bellow zone (illusion 4)
  fill("black");
  rect(222.5, 300, 9, 105);
  rect(262.5, 300, 9, 105);
  rect(302.5, 300, 9, 105);
  rect(342.5, 300, 9, 105);
  rect(382.5, 300, 9, 105);
  rect(422.5, 300, 9, 105);
  rect(462.5, 300, 9, 105);
  rect(502.5, 300, 9, 105);
  rect(542.5, 300, 9, 105);
  rect(582.5, 300, 9, 105);
  rect(622.5, 300, 9, 105);
  rect(662.5, 300, 9, 105);
  rect(702.5, 300, 9, 105);
  rect(742.5, 300, 9, 105);
  rect(782.5, 300, 9, 105);
  rect(822.5, 300, 9, 105);

  rect(222.5, 600, 9, 105);
  rect(262.5, 600, 9, 105);
  rect(302.5, 600, 9, 105);
  rect(342.5, 600, 9, 105);
  rect(382.5, 600, 9, 105);
  rect(422.5, 600, 9, 105);
  rect(462.5, 600, 9, 105);
  rect(502.5, 600, 9, 105);
  rect(542.5, 600, 9, 105);
  rect(582.5, 600, 9, 105);
  rect(622.5, 600, 9, 105);
  rect(662.5, 600, 9, 105);
  rect(702.5, 600, 9, 105);
  rect(742.5, 600, 9, 105);
  rect(782.5, 600, 9, 105);
  rect(822.5, 600, 9, 105);

//Bellow zone (illusion 5)
  fill("black");
  rect(230, 350, 9, 105);
  rect(270, 350, 9, 105);
  rect(310, 350, 9, 105);
  rect(350, 350, 9, 105);
  rect(390, 350, 9, 105);
  rect(430, 350, 9, 105);
  rect(470, 350, 9, 105);
  rect(510, 350, 9, 105);
  rect(591, 350, 9, 105);
  rect(550, 350, 9, 105);
  rect(630, 350, 9, 105);
  rect(670, 350, 9, 105);
  rect(710, 350, 9, 105);
  rect(750, 350, 9, 105);
  rect(790, 350, 9, 105);
  rect(830, 350, 9, 105);

  rect(231, 550, 9, 105);
  rect(270, 550, 9, 105);
  rect(310, 550, 9, 105);
  rect(350, 550, 9, 105);
  rect(390, 550, 9, 105);
  rect(430, 550, 9, 105);
  rect(470, 550, 9, 105);
  rect(510, 550, 9, 105);
  rect(592, 550, 9, 105);
  rect(550, 550, 9, 105);
  rect(630, 550, 9, 105);
  rect(670, 550, 9, 105);
  rect(710, 550, 9, 105);
  rect(750, 550, 9, 105);
  rect(790, 550, 9, 105);
  rect(830, 550, 9, 105);



//refrence rectangles
  //noFill()
  //rect(225, 350, 550, 105)
  //(225, 550, 550, 105)

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