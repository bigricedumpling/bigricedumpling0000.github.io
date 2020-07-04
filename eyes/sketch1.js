fr = 30
let kMax; // maximal value for the parameter "k" of the blobs
let step = 0.01; // difference in time between two consecutive blobs
let n = 100; // total number of blobs
let radius = 0; // radius of the base circle
let inter = 0.05; // difference of base radii of two consecutive blobs
let maxNoise = 200; // maximal value for the parameter "noisiness" for the blobs

function setup(){

     createCanvas(windowWidth,windowHeight,WEBGL);
     var width = windowWidth;
	 var height = windowHeight;
	 colorMode(HSB, 1);
	 //angleMode(DEGREES);
     //noFill();
	 //noLoop();
	 kMax = random(0.6, 1.0);

}

function draw(){
	var r = 50;
    background(0);



    dirY = (mouseY / float(height) - 0.5) * 50;
    dirX = (mouseX / float(width) - 0.5) * 50;
    directionalLight(204, 204, 204, -dirX, -dirY, -1);
    //translate(width / 2, height / 2);
	noFill();
	strokeWeight(0.1);
	stroke(255);
	push();
	rotateY(dirX,dirY);
	sphere(r,8,8);
	pop();
    push();
	strokeWeight(10);
	rotateZ(dirX,dirY)
	ellipse(0,0,r*2,r*2);
	pop();

	strokeWeight(1);


	ellipse(0,0,r*2.5,r*2.5);



	ellipse(dirX,dirY,30,30)

	let t = frameCount/100;
	let alpha = 0 ;
	fill((alpha/5 + 0.75)%1, 1, 1, alpha);
	let size = radius
	let k = kMax
	let noisiness = maxNoise
    blob(size,0,0, k/2, t/2 , noisiness);

	fill(255);
	push();
	rotateZ(millis() / 1000);
	strokeWeight(1);

	ellipse(1.3*r,0,r*0.2,r*0.2);

	ellipse(-1.3*r,0,r*0.2,r*0.2);
	pop();


}

function blob(size, xCenter, yCenter, k, t, noisiness) {
  beginShape();
	let angleStep = 360 / 10;
    for (let theta = 0; theta <= 360 + 2 * angleStep; theta += angleStep) {
        let r1, r2;

		r1 = cos(theta)+1;
		r2 = sin(theta)+1; // +1 because it has to be positive for the function noise
        let r = size + noise(k * r1,  k * r2, t) * noisiness;
        let x = xCenter + r * cos(theta);
        let y = yCenter + r * sin(theta);
        curveVertex(x, y);
  }
  endShape();
}
