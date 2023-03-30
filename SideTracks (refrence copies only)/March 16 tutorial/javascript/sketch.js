//

var myFont1;
var p = 0;
var k = 0;
var l = 0;
var m = 0;


function preload() {
    myFont1 = loadFont('UnZippedFontFile/Balode Demo.ttf');
}

function setup() {
    blendMode(NORMAL);
    createCanvas(1000, 1000);
    background(93, 135, 103);
    textFont(myFont1);
    angleMode(DEGREES);

    frameRate(30);
    createLoop({duration:3, gif:true})
    blendMode(NORMAL);
}

function draw() {
    translate(0, 0)
    //fill (0, 0, 0);
        textSize(600);
        //text("W", 0, 0);

    // include this if you dont have rotating thingrotate(45)
        //fill (0, 153, 153);
        //text("W", 0, 0);

    //while loop
    //var i = 0
    //while (i <100) {
        /*do this*/
        //i++;
    //}

    //for (var i= 0; i <360; i = i + 45) {
        //rotate(i)
        //fill (0, 153, 153);
        //text("W", 0, 0);
    //}

    //for (var i= 0; i <100; i++) {
        //rotate(i)
        //fill (255, 250, 225);
        //text("W", 0, 0);
    //}


    //cool looking effects
    //OVERLAY (sometimes)
    //DIFFERENCE
    //SCREEN
    //MULTIPLY

    blendMode(DIFFERENCE);
    if (p < 360) {
        push();
        translate(500, 500);
        rotate(p);
        fill (255, 50, 25);
        text("z", 0, 0);
        p = p + 15
        pop();
    }

    blendMode(SCREEN);
    if (k < 360) {
        push();
        textSize(300);
        translate(500, 500);
        rotate(p);
        fill (255, 150, 50);
        text("Z", 0, 0);
        k = k + 15
        pop();
    }

}