var angle = 0;
var offset = 300;
//how much to scale up from sin:
//this makes the wave bigger or smaller
var scalar = 300;
var speed = 0.05;

var redValue = 0;
var greenValue = 0;
var blueValue = 0;

var x = 0;
var y = 0;

function setup() {
    createCanvas(800, 800);
    background(0);
}

function draw() {
    var y1 = offset + tan(angle) * scalar;
    var y2 = offset + tan(angle + 0.4) * scalar;
    var y3 = offset + tan(angle + 0.8) * scalar;
    var y4 = offset + tan(angle + 1.2) * scalar;
    var y5 = offset + tan(angle + 1.6) * scalar;
    var y6 = offset + tan(angle + 2.0) * scalar;

    redValue = random(255);
    greenValue = random(255);
    blueValue = random(255);

    x = map(mouseX, 0, windowWidth, 50, 150);
    y = map(mouseY, 0, windowHeight, 50, 150);

    if (mouseIsPressed == false) {
      fill(redValue, greenValue, blueValue);
      stroke(greenValue, blueValue, redValue);
      strokeWeight(5);

      ellipse(random(800), y1, y, x);
      ellipse(random(800), y2, y, x);
      ellipse(random(800), y3, y, x);
      ellipse(random(800), y4, y, x);
      ellipse(random(800), y5, y, x);
      ellipse(random(800), y6, y, x);
    }
    else{
      fill(random(255));
      stroke(random(255));
      strokeWeight(5);

      ellipse(y1, random(800), y, x);
      ellipse(y2, random(800), y, x);
      ellipse(y3, random(800), y, x);
      ellipse(y4, random(800), y, x);
      ellipse(y5, random(800), y, x);
      ellipse(y6, random(800), y, x);
    }

    if (mouseIsPressed == false){
      fill(random(255));
      stroke(random(255));
      strokeWeight(5);

      rect(150, 150, 150, 150);
      rect(500, 150, 150, 150);
      rect(150, 550, 50, 50);
      rect(150, 600, 50, 50);
      rect(200, 550, 50, 50);
      rect(200, 600, 50, 50);
      rect(250, 550, 50, 50);
      rect(250, 600, 50, 50);
      rect(300, 550, 50, 50);
      rect(300, 600, 50, 50);
      rect(350, 550, 50, 50);
      rect(350, 600, 50, 50);
      rect(400, 550, 50, 50);
      rect(400, 600, 50, 50);
      rect(450, 550, 50, 50);
      rect(450, 600, 50, 50);
      rect(500, 550, 50, 50);
      rect(500, 600, 50, 50);
      rect(550, 550, 50, 50);
      rect(550, 600, 50, 50);
      rect(600, 550, 50, 50);
      rect(600, 600, 50, 50);

      line(150, 150, 300, 300);
      line(150, 300, 300, 150);
      line(500, 150, 650, 300);
      line(500, 300, 650, 150);
    }
    else{
      fill(redValue, greenValue, blueValue);
      stroke(greenValue, blueValue, redValue);
      strokeWeight(5);

      rect(150, 150, 150, 150);
      rect(500, 150, 150, 150);
      rect(150, 550, 50, 50);
      rect(150, 600, 50, 50);
      rect(200, 550, 50, 50);
      rect(200, 600, 50, 50);
      rect(250, 550, 50, 50);
      rect(250, 600, 50, 50);
      rect(300, 550, 50, 50);
      rect(300, 600, 50, 50);
      rect(350, 550, 50, 50);
      rect(350, 600, 50, 50);
      rect(400, 550, 50, 50);
      rect(400, 600, 50, 50);
      rect(450, 550, 50, 50);
      rect(450, 600, 50, 50);
      rect(500, 550, 50, 50);
      rect(500, 600, 50, 50);
      rect(550, 550, 50, 50);
      rect(550, 600, 50, 50);
      rect(600, 550, 50, 50);
      rect(600, 600, 50, 50);

      line(150, 150, 300, 300);
      line(150, 300, 300, 150);
      line(500, 150, 650, 300);
      line(500, 300, 650, 150);
    }

    angle += speed;
}
