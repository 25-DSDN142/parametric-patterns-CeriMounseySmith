//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;

let centerX = 100;
let centerY = 100;
let watermelonX = 120;
let watermelonY = 130;
let darkgreenSize = 100;
let lightgreenSize = 90;
let pinkSize = 80;
let bigseedSize = 10;

//let darkGreen = 21,114,65


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
  background(255, 182, 193); //light honeydew green colour
}                            // change above for different background colour

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 
//rect(40 ,40, rect_width, rect_height);

//watermelon body ////ORIGINAL/////
strokeWeight(1.5)
fill(21,114,65);//dark green
ellipse(centerX+20,centerY+30,darkgreenSize);

strokeWeight(0);
fill(117,184,85);//light green
ellipse(watermelonX,watermelonY,lightgreenSize);

strokeWeight(0);
fill(219,97,97);//pink
ellipse(watermelonX,watermelonY,pinkSize);


//watermelon bigger
strokeWeight(1.5)
fill(21,114,65);//dark green
ellipse(centerX+20,centerY+30,darkgreenSize+50);

strokeWeight(0);
fill(117,184,85);//light green
ellipse(watermelonX,watermelonY,lightgreenSize);

strokeWeight(0);
fill(219,97,97);//pink
ellipse(watermelonX,watermelonY,pinkSize-40);





//testing if this updates on folder





// //seeds
// fill(0,0,0)//blACK
// ellipse(watermelonX,watermelonY-20,5)//middletop seed
// fill(0,0,0)
// beginShape();
// vertex(117.5,110)
// vertex(120,118)
// vertex(122.5,110)
// endShape(CLOSE);

// fill(0,0,0)//blACK
// ellipse(watermelonX,watermelonY+20,5)//middle btm seed ellipse
// fill(0,0,0)                         //middle btm seed triangle
// beginShape();
// vertex(117.5,150)
// vertex(120,142)
// vertex(122.5,150)
// endShape(CLOSE);


// fill(0,0,0)//blACK
// ellipse(watermelonX+20,watermelonY,5) // right seed ellipse
// // fill(255)                         //right seed triangle
// // beginShape();
// // vertex(117.5,150)
// // vertex(120,140)
// // vertex(122.5,150)
// // endShape(CLOSE);



// fill(0,0,0)//blACK
// ellipse(watermelonX-20,watermelonY,5) //left seed


}
