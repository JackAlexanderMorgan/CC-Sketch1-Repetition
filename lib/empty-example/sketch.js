let diameter =[];
let rows = 14;
let columns = 14;
let xPos = 50;
let yPos = 50;
let gaps = 60;

function setup() {
  // put setup code here
  createCanvas(900,900);
  background(0);
  for(let y=0; y<columns; y++){
    diameter[y]=[];
    for (let x=0; x<rows; x++){
      diameter[y][x]=30;
    }
  }
  console.log(diameter);
 
}

function draw() {
  // put drawing code here
  noStroke();
  for (let y=0; y<columns; y++){
    for (let x=0; x<rows; x++){
      ellipse(xPos+y*gaps, yPos+x*gaps, diameter[y][x], diameter[y][x]);
      diameter[2][x]=40;
      diameter[3][x]=50;
      diameter[4][x]=40;
    }
  }
 
}
