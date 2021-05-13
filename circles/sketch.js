let xOld;
let yOld;

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0);
}

function draw() {
  circles();
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
