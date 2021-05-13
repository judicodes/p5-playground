let centerX;
let centerY;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  centerX = windowWidth / 2;
  centerY = windowHeight / 2;
}

function draw() {
  colorMode(RGB);
  noStroke();
  drawMoon(500);
  drawSun(450);
  
}

function drawSun(diameter) {
  const orange = color(120, 65, 0);
  const purple = color(80, 0, 255);

  const steps = 1000;
  const decrement = diameter / steps;

  for (let d = diameter; d > 0; d -= decrement) {
    const interpolAmount = map(d, 0, diameter, 0.25, 0.85);
    colorInterpol = lerpColor(purple, orange, interpolAmount);
    fill(colorInterpol);
    circle(centerX-100, centerY+50, d);
  }
}

function drawMoon(diameter) {
  const black = color(0, 0, 0);
  const white = color(255, 255, 255);

  const steps = 1000;
  const decrement = diameter / steps;

  for (let d = diameter; d > 0; d -= decrement) {
    const interpolAmount = map(d, 0, diameter, 0.6, 0.2);
    colorInterpol = lerpColor(black, white, interpolAmount);
    fill(colorInterpol);
    circle(centerX+100, centerY, d);
  }
}
