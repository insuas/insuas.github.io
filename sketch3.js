
function setup(){
  createCanvas(600, 600);
  
  
  }
  
  
  function draw() {
    background(255);
  
   

 
  
    for (let i = 10; i < height; i+=4) {
       
        line(1,i,1+600,i );
     
        
        
      
    }
    translate(width / 2, height / 2);
    translate(p5.Vector.fromAngle(millis() / 1000, 275));
    fill(random(255),random(255), random(255));
    circle(0, 0, 20);
    //color('#123456');
   // rectMode(CENTER);
    //translate(width / 2, height / 2);
    //translate(p5.Vector.fromAngle(millis() / 1000, 275));
    //fill(random(255),random(255),random(255));
    //circle(0, 0, 50);
    

  }
    
  