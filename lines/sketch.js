let xOld;
let yOld;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  angleMode(DEGREES);
}

function draw() {
  // circles();
  lines();
}

function circles() {
  if (mouseX !== pmouseX || mouseY !== pmouseY) {
    let greenX = Math.round(map(mouseX, 0, windowWidth, 0, 180));
    let blueY = Math.round(map(mouseY, 0, windowHeight, 0, 255));
    const colorString = `rgba(0, ${greenX}, ${blueY}, 0.05)`;
    fill(colorString);
    stroke(0, greenX, blueY);
    strokeWeight(1);
    circle(mouseX, mouseY, 250);
    xOld = mouseX;
    yOld = mouseY;
  }
}

function lines() {
  angleMode(DEGREES);
  const lineLengthInPx = 150;

  translate(mouseX, mouseY);

  let greenX = Math.round(map(mouseX, 0, windowWidth, 0, 180));
  let blueY = Math.round(map(mouseY, 0, windowHeight, 0, 255));
  const colorString = `rgba(0, ${greenX}, ${blueY}, 0.5)`;
  stroke(colorString);
  strokeWeight(1);

  const angle = map(mouseX * mouseY, 0, windowWidth * windowHeight, 0, 360);
  rotate(angle);
  line(0 - lineLengthInPx / 2, 0, 0 + lineLengthInPx / 2, 0);
}

function sleep(timeInMs) {
  return new Promise(resolve => setTimeout(resolve, timeInMs));
}
