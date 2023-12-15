function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
}

function draw() {
  background(200);
  noStroke();
  fill(90);
  rect(mouseX, mouseY, 50, 50);
}
