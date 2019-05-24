function setup(){
createCanvas(600, 600);
}


function draw() {
  background(255);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 550));
  circle(0, 0, 50);
}
  
