/*****************
df website homepage
******************/

"use strict";

let pressed = 0;
var aX = -400;
var aY = -344;
var bX = 0;
var bY = 348.84;
var cX = 400;
var cY = -344;

function preload() {
  // dfLive = loadImage('assets/images/DF_liveTest.jpg');
}

function setup() {
  // Create a canvas the size of the window
  canvas = createCanvas(windowWidth, windowHeight);
  // Canvas stays fixed behind HTML & ignores scrolling
  canvas.style("display:block");
  canvas.style("position:fixed");
  canvas.style("top:0");
  canvas.style("left:0");
  canvas.style("z-index:-100");
  background(0);
}

function draw() {
  push();
  translate(windowWidth / 2, windowHeight / 2);
  fill(0, 0, 0, 5);
  stroke(255, 0, 0, 60);
  strokeWeight(1);
  var oX = ((aX + bX + cX) / 3);
  var oY = ((aY + bY + cY) / 3);
  if (pressed === 1) {
    translate(pmouseX - width / 2, pmouseY - height / 2);
  }
  rotate(radians(frameCount));
  triangle(aX, aY, bX, bY, cX, cY);
  pop();
}

function mousePressed() {
  if (pressed === 0) {
    pressed = 1;
  } else {
    pressed = 0;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  background(0);
}