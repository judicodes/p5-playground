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
}

function draw() {
  colorMode(RGB);
  noStroke();
  animateEclipse();
}

function animateEclipse() {
  background(0);
  drawMoon(500, canvasCenterX, canvasCenterY);
  drawSun(450, x, canvasCenterY + 50);
  x += 2;
  if (x >= xEnd) {
    x = xStart;
  }
}

function sleep(durationInMs) {
  return new Promise((resolve) => {
    setTimeout(resolve, durationInMs);
  });
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
