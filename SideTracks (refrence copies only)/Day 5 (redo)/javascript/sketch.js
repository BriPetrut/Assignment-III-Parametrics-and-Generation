//I used the base code from the exercise and twisted it a little bit

var rtgl;
var rtgl2;
var rtgl3;
var rtgl4;
var rtgl5;
var rtgl6;

function setup() {
    createCanvas(1000, 1000);
    rtgl = new Base(250, 600);
    rtgl2 = new Base(250, 600);
    rtgl3 = new Base(450, 400);
    rtgl4 = new Base(650, 200);
    rtgl5 = new Base(850, 100);
    rtgl6 = new Base(100, 100);
}

function draw() {
    //putting background in draw makes it draw on every frame vs once at the begining when in setup
    background(105, 162, 176);
    rtgl.display();
    rtgl2.display();
    rtgl3.display();
    rtgl4.display();
    rtgl5.display();
    rtgl6.display();

}

//creating a class 
class Base{
    constructor(x, y) {
        this.stemX = x;
        this.stemY = y;
        this.stemH = 225;
        this.stemW = 350;
        this.stemOY = y;
    }

    display() {
        noStroke();
        //body of pot
        //fill(220, 220, 220);
        //rect(this.stemX, this.stemY, this.stemW, this.stemH)

        //reflectition body of pot
        //fill(208, 208, 208);
        //rect(this.stemX +0, this.stemY +0, this.stemW -75, this.stemH -0)
                
    }

}


//rect(225, 350, 550, 105)
//rect(225, 550, 550, 105)


