const canvasWidth = 2400;
const canvasHeight = 1600;
const curvePoints = 50;
const maxDistortion = 50;
const stepSize = 5;
const lightBackground = "#e3ebef";
const darkBackground = "#0d2c4f";
let yAnchor = -150;
6;
let x = [];
let y = [];

function setup() {
  const xIncrement = Math.round(canvasWidth / curvePoints);

  createCanvas(canvasWidth, canvasHeight);
  x.push(0);
  y.push(yAnchor);
  for (let i = 1; i < curvePoints - 1; i++) {
    x.push(x[i - 1] + xIncrement);
    y.push(y[i - 1] + random(-maxDistortion, maxDistortion));
  }

  x.push(canvasWidth);
  y.push(yAnchor);

  stroke(130, 50);
  strokeWeight(0.7);
  background(lightBackground);
  noFill();
}

function draw() {
  beginShape();

  curveVertex(x[0], y[0]);

  for (let i = 0; i < curvePoints; i++) {
    curveVertex(x[i], y[i] + yAnchor + random(-stepSize, stepSize));
  }

  curveVertex(canvasWidth, yAnchor);

  endShape();

  yAnchor += 5;

  if (yAnchor >= canvasHeight * 1.7) {
    noLoop();
  }
}
