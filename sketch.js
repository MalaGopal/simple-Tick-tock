var hours,minutes,seconds;
var hrAngle,minAngle,secAngle;
function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
 
  
}

function draw() {
  background(255,255,255);  

  translate(200,200)
  rotate(-90)
  hours = hour();
  seconds = second();
  minutes = minute(); 
  text(hours+"-"+minutes+"-"+seconds, 200,200)

  hrAngle = map(hours%12,0,12,0,360);
  minAngle = map(minutes,0,60,0,360);
  secAngle = map(seconds,0,60,0,360)

  //drawSprites();

  
  //drawing the hour hands
  push()
  rotate(hrAngle);
  strokeWeight(2)
  stroke("black")
    line(0,0,50,0)
pop()
  //drawing the minutes hands
  push()
  rotate(minAngle);
  strokeWeight(2)
  stroke("red")
  line(0,0,75,0)
  pop()
  
  push()
  rotate(secAngle);
  strokeWeight(2)
  stroke("orange")
  line(0,0,100,0)
  pop()
  //drawing the arcs
  stroke("brown")
  point(0,0)
  noFill()
  arc(0,0,300,300,0,360)
  
}