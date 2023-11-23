function setup() {
  // Create background
  createCanvas(900,900);
  background(0);

}

function draw() {
  // Draw repeating ellipses
  fill(244);
  //Using for loop to repeat accross the width
  for(let x = 30; x < width; x = x+60) {
    ellipse (x,30,30,30);
  //using nested for loop to repeat accross the height
    for(let y = 30; y < height; y = y+60){
      ellipse(x,y,30,30);
      //for(let h = 30; height; h = h+30){
        //ellipse(x,y,h,30);
      //}
    }
  }
 

}
