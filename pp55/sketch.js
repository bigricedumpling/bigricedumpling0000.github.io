//import processing.video.*;
let capture;
var cellsize = 20; // Dimensions of each cell in the grid
var cols, rows;

function setup() {
	var width = 1024;
  var height = 768;
  
  createCanvas(windowWidth, windowHeight,WEBGL);
  background(0);
  //frameRate(600);
  
  video = createCapture(VIDEO);
	video.hide();
  video.size(windowWidth, windowHeight);
  
}


function draw() {
  scale(-1,1);
  background(255);
  //noStroke();
  //fill(0);
  cols = windowWidth/cellsize;             // Calculate # of columns
  rows = windowHeight/cellsize;
  if (video.width > 0) {
    let img = video.get(0, 0, video.width, video.height);
    img.loadPixels();
    //image(img,0,0);
    for ( var i = 0; i < cols;i++) {
      // Begin loop for rows
      for ( var j = 0; j < rows;j++) {
        var x = i*cellsize + cellsize/2; // x position
        var y = j*cellsize + cellsize/2; // y position
        var loc = x + y*width;           // Pixel array location
        let c = img.get(x,y);    // Grab the color
        // Calculate a z position as a function of mouseX and pixel brightness
        var z = (mouseX/width)* brightness(c)*2 ;
        // Translate to the location, set fill and stroke, and draw the rect
        push();
        translate(x-785,y-350,z);
        noStroke();
			
				
        fill(red(c),green(c),blue(c));
        //rectMode(CENTER);
        
        rect(0,0,cellsize,cellsize);
        pop();
    //int step = 15;
    //for (int y = step; y < img.height; y += step) {
      //for (int x = step; x < img.width; x += step) {
       // float darkness = getPixelDarknessAtPosition(img, x, y);
        //float radius = 10 * darkness;
        //float sX = x * width / img.width;
        //float sY = y * height / img.height;
        //circle(sX, sY, radius);
        
      }
    }
  }
}

//ignore this, initially
//int getPixelDarknessAtPosition(PImage img,int x,int y) {
 // Boolean mirroring = true;
  //int i = y * img.width +  (mirroring ? (img.width - x - 1) : x);
  //return (255 - img.pixels[i]) / 255;
//}
function keyPressed() {
 if (keyCode === UP_ARROW) {
    cellsize = cellsize+3;
  } else if (keyCode === DOWN_ARROW) {
    cellsize = cellsize-3;
  }
  
}