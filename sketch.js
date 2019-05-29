
function setup(){
createCanvas(600, 600);


}


function draw() {
  background(255);
  rectMode(CENTER);
  translate(width / 2, height / 2);
  translate(p5.Vector.fromAngle(millis() / 1000, 275));
  fill(random(255),random(255), random(255));
  circle(0, 0, 20);

  for (let i = 0; i < height; i++) {
    for (let j = 0; j < width; j++) {
      
      
      
    }
  }
  //color('#123456');
 // rectMode(CENTER);
  //translate(width / 2, height / 2);
  //translate(p5.Vector.fromAngle(millis() / 1000, 275));
  //fill(random(255),random(255),random(255));
  //circle(0, 0, 50);
  
 updatePixels();
}
  
