//your parameter variables go here!
let centerX = 100;
let centerY = 100;
let tlcX = 0 //top left corner x
let tlcY = 0 //top left corner y 
let trcX = 200 //top left corner x
let trcY = 0 //top left corner y
let blcX = 0 //bottom left corner x
let blcY = 200 //bottom left corner y
let brcX = 200 // bottom right corner x
let brcY = 200 // bottomright corner y
let watermelonX = 120;
let watermelonY = 130;
let darkgreenSize = 70;
let lightgreenSize = 85;
let pinkSize = 70;

function WaterMelon (){
//watermelon body 
strokeWeight(2)
stroke(0,0,0,)//black
fill(21,114,65);//dark green
ellipse(centerX,centerY,darkgreenSize);

strokeWeight(0);
fill(117,184,85);//light green
ellipse(centerX,centerY,lightgreenSize);

fill(219,97,97);//pink
ellipse(centerX,centerY,pinkSize);

//seeds
fill(0,0,0)//black
ellipse(centerX,centerY-15,5,10)//middletop seed
ellipse(centerX-15,centerY,10,5)//left seed
ellipse(centerX+15,centerY,10,5)//right seed
ellipse(centerX,centerY+15,5,10)//bttm seed

}

function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);   ///can switch between this and one below to see all tiles together
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print

  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50; //can change to 0 so they perfectly align like tiles, or 150 to be layed like bricks
}

function wallpaper_background() {
  background(255, 182, 193); //light pink
}                            // change above for different background colour

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//watermelon body 
strokeWeight(2)
stroke(0,0,0,)//black
fill(21,114,65);//dark green
ellipse(centerX,centerY,darkgreenSize);

strokeWeight(0);
fill(117,184,85);//light green
ellipse(centerX,centerY,lightgreenSize);

fill(219,97,97);//pink
ellipse(centerX,centerY,pinkSize);

//seeds
fill(0,0,0)//black
ellipse(centerX,centerY-15,5,10)//middletop seed
ellipse(centerX-15,centerY,10,5)//left seed
ellipse(centerX+15,centerY,10,5)//right seed
ellipse(centerX,centerY+15,5,10)//bttm seed

if(darkgreenSize >80){
fill(219,97,97);
ellipse(0,0,60,60);
fill(219,97,97);
ellipse(200,200,60,60);
}
else{
fill(219,97,97);
ellipse(200,200,160,160);//bttm right circle
fill(0,0,0)
ellipse(brcX,brcY,10,20)
ellipse(brcX,brcY,20,10)

fill(219,97,97);
ellipse(0,0,160,160);//top left circle
fill(0,0,0)
ellipse(centerX-100,centerY-50,10,20)
ellipse(centerX-50,centerY-100,20,10)

}

//WaterMelon(20,20,);
}
