//

var pot;
var pot2;
var pot3;
var pot4;
var pot5;

function setup() {
    createCanvas(1000, 1000);
    pot = new Pot(50, 800);
    pot2 = new Pot(250, 600);
    pot3 = new Pot(450, 400);
    pot4 = new Pot(650, 200);
    pot5 = new Pot(850, 100);

}

function draw() {
    //putting background in draw makes it draw on every frame vs once at the begining when in setup
    background(105, 162, 176);
    pot.display();
    pot2.display();
    pot3.display();
    pot4.display();
    pot5.display();

}

function mouseMoved() {
    pot.grow();
    pot2.grow();
    pot3.grow();
    pot4.grow();
    pot5.grow();

}

function mouseClicked() {
    pot.clip();
    pot2.clip();
    pot3.clip();
    pot4.clip();
    pot5.clip();

}

//creating a class 
class Pot{
    constructor(x, y) {
        this.stemX = x;
        this.stemY = y;
        this.stemH = 200;
        this.stemW = 100;
        this.stemOY = y;
    }

    display() {
        noStroke();
        //actual handle
        fill(247, 244, 239);
        ellipse(this.stemX, this.stemY +80, 100)

        //handle fill
        fill(105, 162, 176);
        ellipse(this.stemX, this.stemY +80, 70)

        //spout
        fill(247, 244, 239);
        rect(this.stemX +100, this.stemY +50, +25, -50)

        //sprig
        fill(247, 244, 239);
        rect(this.stemX -0, this.stemY +10, +25, -50)

        //lid
        fill(247, 244, 239);
        ellipse(this.stemX +50, this.stemY +25, 100)

        //body of pot
        fill(220, 220, 220);
        rect(this.stemX, this.stemY, this.stemW, this.stemH)

        //reflectition body of pot
        fill(208, 208, 208);
        rect(this.stemX +0, this.stemY +0, this.stemW -75, this.stemH -0)
        
        //logo on body of pot
        fill(150, 150, 150);
        rect(this.stemX +40, this.stemY +185, +40, -15)
        
    }

    grow() {
        this.stemH = this.stemH + 1;
        this.stemY = this.stemY - 1;
    }

    clip() {
        this.stemH = 200
        this.stemY = this.stemOY
    }
}



