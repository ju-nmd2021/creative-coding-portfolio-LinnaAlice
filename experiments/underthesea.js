let width = innerWidth / 3;
let height = innerHeight / 6;

function setup() {
  createCanvas(innerWidth, innerHeight);
  background(34, 39, 46);
}

function draw() {
  background(14, 42, 87);
  noStroke();
  fill(108, 182, 255);

  for (let i = 50; i < 175; i++) {
    fill(158, 186, 232);
    ellipse(random(width, 2 * width), random(100, height + 20), random(2, 10));
  }
  for (let i = 50; i < 175; i++) {
    fill(88, 127, 191);
    ellipse(random(width, 2 * width), random(height + 20, 2 * height + 20), random(2, 20));
  }
  for (let i = 50; i < 175; i++) {
    fill(38, 77, 140);
    ellipse(random(width, 2 * width), random(2 * height + 20, 3 * height + 20), random(12, 20));
  }
  for (let i = 1; i < random(3,7); i++) {
    fill(219, 134, 68);
    ellipse(random(width, 2 * width), random(2 * height + 20, 3 * height + 20), random(14, 25), random(8, 12));
    noLoop();
  }
}
