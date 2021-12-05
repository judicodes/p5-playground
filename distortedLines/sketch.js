const curvePoints = 40;
const stepSize = 5;
let yAnchor = -150;

let x = [];
let y = [];

function setup() {
  const xIncrement = Math.round(windowWidth / curvePoints);
  const maxDistortion = 30;

  createCanvas(windowWidth, windowHeight);
  x.push(0);
  y.push(yAnchor);
  for (let i = 1; i < curvePoints - 1; i++) {
    x.push(x[i - 1] + xIncrement);
    y.push(y[i - 1] + random(-maxDistortion, maxDistortion));
  }

  x.push(windowWidth);
  y.push(yAnchor);

  stroke(0, 30);
  strokeWeight(0.75);
  background(255);
  noFill();
}

function draw() {
  beginShape();

  curveVertex(x[0], y[0]);

  for (let i = 0; i < curvePoints; i++) {
    curveVertex(x[i], y[i] + yAnchor + random(-stepSize, stepSize));
  }

  curveVertex(windowWidth, yAnchor);

  endShape();

  yAnchor += 5;

  if (yAnchor >= windowHeight * 1.7) {
    noLoop();
  }
}
