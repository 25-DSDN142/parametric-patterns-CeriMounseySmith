//your parameter variables go here!
let centerX = 10; //location for watermelon x axis
let centerY = 10; //location for watermelon y axis

let brcX = 10;// bottom right corner x location  ///change this to change big pink circle location
let brcY = 13; // bottom right corner y location

let seedtopX=100; ///*center watermelon seed locations
let seedtopY=85; ///*
let seedleftX=25; ///*
let seedleftY=100; ///*
let seeddownX=100; ///*
let seeddownY=115; ///*
let seedrightX=165; ///*
let seedrightY=100; //*

let darkgreenSize = 61; //change this above 80 or under 80 for diff pattern
let lightgreenSize = 145; //change this to above 90 or below 90 for diff pattern
let pinkSize = 41; //change this to above or below 50 for diff pattern

function setup_wallpaper(pWallpaper) {
  //pWallpaper.output_mode(DEVELOP_GLYPH);   ///can switch between this and one below to see all tiles together
  pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(NINE_LANDSCAPE);
  pWallpaper.show_guide(false); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 150; //can change to 0 so they perfectly align like tiles, or 150 to be layed like bricks
}

function wallpaper_background() {
  background(255, 182, 193); //light pink
}                            // change above for different background colour

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//watermelon body 
strokeWeight(2)
stroke(0,0,0,)//black
fill(21,114,65);//dark green
ellipse(centerX,centerY,darkgreenSize); // dark green watermelon circle

strokeWeight(0);
fill(117,184,85);//light green
ellipse(centerX,centerY,lightgreenSize); //light green watermelon circle

fill(219,97,97);//pink
ellipse(centerX,centerY,pinkSize); //pink watermelon circle

//seeds
fill(0,0,0)//black
ellipse(seedtopX,seedtopY,5,10)//middletop seed
ellipse(seedleftX,seedleftY,10,5)//left seed
ellipse(seedrightX,seedrightY,10,5)//right seed
ellipse(seeddownX,seeddownY,5,10)//bttm seed


//IF STATEMENTS 
if(darkgreenSize >80){
fill(219,97,97);
ellipse(0,0,60,60);
fill(219,97,97);
ellipse(200,200,60,60);
}
else{
fill(21,114,65)
ellipse(200,200,180,180)//big dark green circle

fill(219,97,97);
ellipse(200,200,160,160);//big pink circle
fill(0,0,0)
ellipse(brcX,brcY,10,50);//seed
ellipse(brcX,brcY,50,10);//seed
ellipse(brcX,brcY,10,50);//seed
ellipse(brcX,brcY,50,10);//seed
}

if(lightgreenSize >90){
  fill(117,184,85);
ellipse(50,50,30,30);
ellipse(50,50,10,10);
}
else{
fill(21,114,65);
ellipse(50,50,30,10);
ellipse(50,50,10,30);
}

if(pinkSize <50){
fill(21,114,65);
ellipse(160,160,170,170);
}
else{
fill(0,0,0);
ellipse(180,150,10,20);
}
}







