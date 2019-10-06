/*****************
df website homepage
******************/

"use strict";

var pressed = 0;
var aX = -400;
var aY = -344;
var bX = 0;
var bY = 348.84;
var cX = 400;
var cY = -344;

var angle = 0;

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
  let wave = (sin(angle));
  angle += 0.015;
  translate(windowWidth / 2, windowHeight / 2);
  push();
  fill(0, 0, 100, 4);
  stroke(220, 20, 60, 60);
  strokeWeight(1);
  var oX = ((aX + bX + cX) / 3);
  var oY = ((aY + bY + cY) / 3);
  if (pressed === 1) {
    var aX = -400;
    var aY = -344;
    var bX = 0;
    var bY = 348.84;
    var cX = 400;
    var cY = -344;
    translate(pmouseX - width / 2, pmouseY - height / 2);
  }
  if (pressed === 0) {
    var aX = -400 * wave;
    var aY = -344;
    var bX = 0;
    var bY = 348.84;
    var cX = 400 * wave;
    var cY = -344;
  }
  rotate(radians(frameCount / 2));
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