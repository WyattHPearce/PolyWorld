function setup() {
  createCanvas(500, 500);
  rectMode(CENTER);
  background(200);
}

function draw() {
  noStroke();
  fill(90);
}

function mouseDragged(){
  let data = {
    mouseX: mouseX,
    mouseY: mouseY
  };
  socket.emit("mouse", data);
  fill(0);
  rect(mouseX, mouseY, 10, 10);
}