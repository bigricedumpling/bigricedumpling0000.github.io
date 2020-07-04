//import processing.video.*;
let capture;
var cellsize = 20; // Dimensions of each cell in the grid
var cols, rows;
var w = 1240;
var h =1240;
//let myFont;

//function preload() {
  //myFont = loadFont('FontAwesome.otf');
//}
function setup() {
	//textFont(myFont);
	//textSize(36);
	var width = 1024;
  var height = 600;
  var w = windowWidth;
	var h =windowHeight;
  createCanvas(1240, 1240,WEBGL);
  background(0);
  //frameRate(600);
  
  video = createCapture(VIDEO);
	video.hide();
  video.size(width, height);
  
}


function draw() {
	//translate(500,300);
  scale(-1,1);
  background(0);
	
  //noStroke();
  //fill(0);
  cols = width/cellsize;             // Calculate # of columns
  rows = height/cellsize;
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
        translate(x-500,y-300,z);
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
	scale(-1,1);
  button();
  scale(-1,1)
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


function button() {
	//textFont(myFont);
	//textSize(24);	
  //text("UP",4*w/10, 3*h/10);
	//text("DOWN",4*w/10, 3.5*h/10);
	//rect(9*width/10, 8*height/10, 60, 20,2,2);
	//rect(9*width/10, 8.5*height/10, 60, 20,2,2);
	if((mouseX >9*w/10) && (mouseX<9*w/10+60) && (mouseY > 8*h/10) && (mouseY < 8*h/10+20)){
    fill(255);
	  rect(4*w/10, 3*h/10, 60, 20,2,2);
	}
	else{
		fill(100);
		rect(4*w/10, 3*h/10, 60, 20,2,2);
  }
	if((mouseX >9*w/10) && (mouseX<9*w/10+60) && (mouseY > 8.5*h/10) && (mouseY < 8.5*h/10+20)){
    fill(255);
	  rect(4*w/10, 3.5*h/10, 60, 20,2,2);
		}
	else{
		fill(100);
		rect(4*w/10, 3.5*h/10, 60, 20,2,2);
  }
	//fill(255);
	
	
}
function mousePressed() {
 if((mouseX >9*width/10) && (mouseX<9*width/10+60) && (mouseY > 8*height/10) && (mouseY < 8*height/10+20)){
    cellsize = cellsize+3;
	}
	
	if((mouseX >9*width/10) && (mouseX<9*width/10+60) && (mouseY > 8.5*height/10) && (mouseY < 8.5*height/10+20)){
    cellsize = cellsize-3;
		}
	
	//fill(255);
	
	
}