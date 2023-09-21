// The lines 19, 28, 29-37 were adapted from https://www.youtube.com/watch?v=jupjuq9Jl-M&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=12&ab_channel=TheCodingTrain Accessed: 2023-09-08
// I followed the referenced tutorial (above) to understand and use the p5.Vector.random() function to create my own generative art
// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colors = [
  [107, 213, 227, 100],
  [109, 170, 227, 150],
  [104, 108, 227, 150],
  [148, 111, 227, 150],
  [179, 100, 222, 150],
  [219, 94, 207, 100],
];

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(10, 4, 3);
  translate(innerWidth / 2, innerHeight / 2);

  push();
  fill(255);
  noStroke();
  ellipse(0, 0, 30, 30);
  fill(255, 255, 255, 100);
  ellipse(0, 0, 40, 40);
  pop();

  for (let i = 0; i < random(10, 40); i++) {
    randomVectors = p5.Vector.random2D();
    randomVectors.mult(random(100, 700));

    noFill();
    strokeWeight(random(0.5, 3));
    stroke(random(colors));
    ellipse(0, 0, randomVectors.x, random(10, 150));
  }
  noLoop();
}

function mousePressed() {
  loop();
}
