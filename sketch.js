function setup(){

}


function draw() {
  background(200);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 40));
  circle(0, 0, 20, 20);
}
  
