class Color {
  constructor(_r,_g,_b){
    this.r = _r;
    this.g = _g;
    this.b = _b;
  }
}

let canvas;
let gui;
let color;

let displayState = 0;

function setup() {
  canvas = createCanvas(windowWidth, windowHeight, WEBGL);
  canvas.parent("sketch-container"); //move our canvas inside this HTML element
  
  createEasyCam();

  color = new Color(255,0,0);

  //dat Gui expects an object 1st param, the property name to affect 2nd param, and slider range 3rd & 4th params
  gui = new dat.GUI();
  gui.add(color, 'r', 0, 255);
	gui.add(color, 'g', 0, 255);
	gui.add(color, 'b', 0, 255);

}

function draw() {
  background(color.r,200,250);
  
  noStroke();
  lights();
  ambientMaterial(color.r,color.g,color.b);

  rotateX(frameCount * 0.01);
  rotateY(frameCount * 0.01);
  box(100);
  rotateX(frameCount * -0.01);
  rotateY(frameCount * -0.01);
  box(100);
 
 

}

function keyPressed() {
  switch (key) {
      case 'd':
          dat.GUI.toggleHide();//show / hide for performance mode
          break;
      case 'f':
          let fs = fullscreen();
          fullscreen(!fs);
          break;
  }
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}