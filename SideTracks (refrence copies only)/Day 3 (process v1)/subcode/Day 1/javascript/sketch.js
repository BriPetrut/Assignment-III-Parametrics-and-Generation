function setup() {
    createCanvas(1000, 1000);
    background(0, 0, 0);
    strokeWeight(0);

    //white rectangles bellow
    fill(255, 255, 255)
    
    rect(225, 350, 550, 55)
    rect(275, 405, 550, 55)

    rect(225, 550, 550, 55)
    rect(200, 600, 550, 55)




    //pink rectangles bellow
    fill(255, 39, 255)
        //two lines bellow does the blur effect (tutorial used:https://youtu.be/iIWH3IUYHzM)
        drawingContext.shadowBlur = 50;
        drawingContext.shadowColor = color(255, 39, 255);    
    rect(200, 350, 25, 55)
    rect(800, 405, 25, 55)

    rect(200, 550, 25, 55)
    rect(750, 605, 25, 55)
    rect(200, 325, 500, 25)
    rect(225, 525, 50, 25)
    rect(625, 650, 150, 25)
    rect(550, 450, 250, 25)

    rect(150, 365, 125, 12.5)
    rect(700, 625, 125, 12.5)
    rect(750, 425, 125, 12.5)







    //blue rectangles bellow
    fill(0, 208, 255)
        //two lines bellow does the blur effect (tutorial used:https://youtu.be/iIWH3IUYHzM)
        drawingContext.shadowBlur = 50;
        drawingContext.shadowColor = color(0, 208, 255);    
    rect(750, 350, 25, 55)
    rect(250, 405, 25, 55)

    rect(775, 550, 25, 55)
    rect(175, 605, 25, 55)

    rect(350, 525, 450, 25)
    rect(200, 650, 150, 25)
    rect(250, 450, 150, 25)

    rect(125, 625, 125, 12.5)

}
