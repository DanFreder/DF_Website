/*****************
df website homepage
minimalist site for interactive a/v duo
******************/

"use strict";

let pressed = 0;

//colour pallete
let red = '#ff192c';
let green = '#06d6a0';
let lightBlue = '#00a1e4';
let navy = '#073b4c';
let orange = '#db5a42';
let turquoise = '#50d8d7';
let pink = '#e83f6f';
let yellow = '#ffbf00';
let white = '#f9fdff';
let purple = '#9d44b5'

let dfLive;

function preload() {
  dfLive = loadImage('assets/images/DF_liveTest.jpg');
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
  imageMode(CENTER);
  image(dfLive, width / 2, height / 2);
}

function draw() {
  background(34, 37, 42);
  if (pressed === 1) {
    for (var i = 0; i < 15; i++) {
      image(dfLive, width / 2, height / 2);
      var scaleX = map(mouseX, 0, windowWidth, -30, 30);
      var scaleY = map(mouseY, 0, windowHeight, -20, 20);
      translate(scaleX, scaleY);
    }
  } else {
    image(dfLive, width / 2, height / 2);
  }
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
  image(dfLive, width / 2, height / 2);
}
