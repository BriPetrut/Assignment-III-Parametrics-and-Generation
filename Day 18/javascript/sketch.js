//refrence code: week 10 tutorial

var pot;
var pot2;


function setup() {
    createCanvas(1000, 1000);
    pot = new Pot(255, 350);
    pot2 = new Pot(255, 550);

}

function draw() {
    background(0);

    pot.display();
    pot2.display();

}

class Pot{
    constructor(x, y) {
        this.stemX = x;
        this.stemY = y;
        this.stemH = 105;
        this.stemW = 550;
        this.stemOY = y;
    }

    display() {        
        //main body
        stroke(255, 255, 255);
        strokeWeight(3);
        noFill();
        rect(this.stemX, this.stemY, this.stemW, this.stemH)
        
        //white reflect square
        noStroke();
        fill(255, 255, 255);
        rect(this.stemX +30, this.stemY +70, this.stemW -525, this.stemH -95)

        //white reflect long
        noStroke();
        fill(255, 255, 255);
        rect(this.stemX +75, this.stemY +70, this.stemW -425, this.stemH -95)
 
        //white reflect square 2
        noStroke();
        fill(255, 255, 255);
        rect(this.stemX +500, this.stemY +25, this.stemW -525, this.stemH -95)

        //white reflect long 2
        noStroke();
        fill(255, 255, 255);
        rect(this.stemX +400, this.stemY +25, this.stemW -475, this.stemH -95)
      
        //purple reflect long
        noStroke();
        fill(255, 0, 255);
        rect(this.stemX +10, this.stemY +95, this.stemW -540, this.stemH -175)
      
        //purple reflect short
        noStroke();
        fill(255, 0, 255);
        rect(this.stemX +525, this.stemY +95, this.stemW -540, this.stemH -135)
     
        //teal reflect short
        noStroke();
        fill(0, 255, 255);
        rect(this.stemX +530, this.stemY +70, this.stemW -540, this.stemH -125)
       
        //teal reflect short 2
        noStroke();
        fill(0, 255, 255);
        rect(this.stemX +20, this.stemY +35, this.stemW -540, this.stemH -125)

        //blue reflect mid
        noStroke();
        fill(0, 0, 255);
        rect(this.stemX +275, this.stemY +95, this.stemW -300, this.stemH -115)
        
        //blue reflect short
        noStroke();
        fill(0, 0, 255);
        rect(this.stemX +30, this.stemY +25, this.stemW -475, this.stemH -115)
        
        //yellow reflect small
        noStroke();
        fill(255, 255, 0);
        rect(this.stemX +450, this.stemY +85, this.stemW -500, this.stemH -115)
        
        //yellow reflect small 2
        noStroke();
        fill(255, 255, 0);
        rect(this.stemX +75, this.stemY +35, this.stemW -515, this.stemH -115)
        
    }
}