let canvasCenterX;
let canvasCenterY;
let x;
let xStart;
let xEnd;

function setup() {
  createCanvas(windowWidth, windowHeight);
  canvasCenterX = windowWidth / 2;
  canvasCenterY = windowHeight / 2;
  xStart = 0 - 450 / 2;
  xEnd = windowWidth + 450 / 2;
  x = xStart;
  noLoop();
}

function draw() {
  colorMode(RGB);
  noStroke();
  background(0);
  texturedBackground();
  drawMoon(500, canvasCenterX, canvasCenterY);
  drawSun(450, canvasCenterX - 200, canvasCenterY + 50);
}

function texturedBackground() {
  fill(color(`rgba(191, 179, 143, 0.15)`));
  strokeWeight(1);
  const numPoints = 100000;

  let minX = 0;
  let minY = 0;
  let maxX = Math.floor(windowWidth);
  let maxY = Math.floor(windowHeight);
  let x;
  let y;
  for (let i = 0; i < numPoints; i++) {
    x = Math.floor(Math.random() * (maxX - minX)) + minX;
    y = Math.floor(Math.random() * (maxY - minY)) + minY;
    d = Math.floor(Math.random() * 3);
    circle(x, y, d);
  }
}

function drawSun(diameter, centerX, centerY) {
  const orange = color(120, 65, 0);
  const purple = color(80, 0, 255);

  const steps = 100;
  const decrement = diameter / steps;

  for (let d = diameter; d > 0; d -= decrement) {
    const interpolAmount = map(d, 0, diameter, 0.25, 0.85);
    colorInterpol = lerpColor(purple, orange, interpolAmount);
    fill(colorInterpol);
    circle(centerX, centerY, d);
  }
}

function drawMoon(diameter, centerX, centerY) {
  const black = color(0, 0, 0);
  const white = color(255, 255, 255);

  const steps = 1000;
  const decrement = diameter / steps;

  for (let d = diameter; d > 0; d -= decrement) {
    const interpolAmount = map(d, 0, diameter, 0.6, 0.2);
    colorInterpol = lerpColor(black, white, interpolAmount);
    fill(colorInterpol);
    circle(centerX, centerY, d);
  }
}