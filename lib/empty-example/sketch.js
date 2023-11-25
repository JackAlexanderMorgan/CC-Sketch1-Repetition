//REPETITION
//This code produces a swelling wave effect that repeatedly sweeps accross a canvas of ellipses
//By Jack Morgan (21029119)


//set global variables and arrays
let diameter =[];
let rows = 14;
let columns = 14;
let xPos = 50;
let yPos = 50;
let gaps = 60;
let time = 0;



function setup() {

  // Set the display options

  createCanvas(900,900);
  background(0);
  frameRate(140);
  
  //Set "diameter" as a 2D array by using a nested loop
  //Creates an array, containing 14 arrays, each containing 14 elements 
  //This will be used as a 14x14 table where the index can be used to target whole columns / rows.
  // y = no. of columns, x = no. of rows
  //Set every value to 30
  
  for(let y=0; y<columns; y++){
    diameter[y]=[];
    for (let x=0; x<rows; x++){
      diameter[y][x]=30;
    }
  }
 
 
}

function draw() {

  noStroke();

  //Represent the data from the table as ellipses
  //Set initial coordinates for drawing ellipses
  //include gaps of 30px between each ellipse
  //Gap value = 60px because gap is drawn from centre of each ellipse, meaning +15px per 30px diameter
  //Set ellipse colour to light blue

  for (let y=0; y<columns; y++){
    for (let x=0; x<rows; x++){
      fill(0,190,255);
      ellipse(xPos+y*gaps, yPos+x*gaps, diameter[y][x], diameter[y][x]);

        //At equal intervals of time; redraw the background to hide the previous output
        //Re-draw the table of ellipses 
        //Update table data to move the wave/swell/bulge effect along by one column
        //Repeat for number of columns

       if (time == 0){
          background(0);
          diameter[y][x]=30;
          diameter[13][x]=40;
          diameter[0][x]=50;
          diameter[1][x]=40;
        }
        if (time == 10){
          background(0);
          diameter[y][x]=30;
          diameter[0][x]=40;
          diameter[1][x]=50;
          diameter[2][x]=40;
        }
        if (time == 20){
          background(0);
          diameter[y][x]=30;
          diameter[1][x]=40;
          diameter[2][x]=50;
          diameter[3][x]=40;
        }
        if (time == 30){
          background(0);
          diameter[y][x]=30;
          diameter[2][x]=40;
          diameter[3][x]=50;
          diameter[4][x]=40;
        }
        if (time == 40){
          background(0);
          diameter[y][x]=30;
          diameter[3][x]=40;
          diameter[4][x]=50;
          diameter[5][x]=40;
        }
        if (time == 50){
          background(0);
          diameter[y][x]=30;
          diameter[4][x]=40;
          diameter[5][x]=50;
          diameter[6][x]=40;
        }
        if (time == 60){
          background(0);
          diameter[y][x]=30;
          diameter[5][x]=40;
          diameter[6][x]=50;
          diameter[7][x]=40;
          
        }
        if (time == 70){
          background(0);
          diameter[y][x]=30;
          diameter[6][x]=40;
          diameter[7][x]=50;
          diameter[8][x]=40;
        }
        if (time == 80){
          background(0);
          diameter[y][x]=30;
          diameter[7][x]=40;
          diameter[8][x]=50;
          diameter[9][x]=40;
        }
        if (time == 90){
          background(0);
          diameter[y][x]=30;
          diameter[8][x]=40;
          diameter[9][x]=50;
          diameter[10][x]=40;
        }
        if (time == 100){
          background(0);
          diameter[y][x]=30;
          diameter[9][x]=40;
          diameter[10][x]=50;
          diameter[11][x]=40;
        }
        if (time == 110){
          background(0);
          diameter[y][x]=30;
          diameter[10][x]=40;
          diameter[11][x]=50;
          diameter[12][x]=40;
        }
        if (time == 120){
          background(0);
          diameter[y][x]=30;
          diameter[11][x]=40;
          diameter[12][x]=50;
          diameter[13][x]=40;
        }
        if (time == 130){
          background(0);
          diameter[y][x]=30;
          diameter[12][x]=40;
          diameter[13][x]=50;
          diameter[0][x]=40;
        }
    }
  }
  //Incriment the clock
  time++;
  //Reset the clock to repeat 
  if (time==140){time=0};
  //Print current "time" value and "diameter" array data to console
  console.log(time);
  console.log(diameter);
}
