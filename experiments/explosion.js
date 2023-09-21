// The lines 19, 28, 29, 31-35 were adapted from https://www.youtube.com/watch?v=jupjuq9Jl-M&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=12&ab_channel=TheCodingTrain Accessed: 2023-09-08
// I followed the referenced tutorial (above) to understand and use the p5.Vector.random() function to create my own generative art
// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colors = [
  [192, 235, 52, 70],
  [232, 232, 51],
  [235, 192, 52, 70],
  [232, 145, 51],
  [230, 97, 53],
  [230, 53, 53, 70],
];

function setup() {
  createCanvas(innerWidth, innerHeight);
}

function draw() {
  background(10, 4, 3);
  translate(innerWidth / 2, innerHeight / 2);

  for (let i = 0; i < 30; i++) {
    stroke(192, 235, 52, random(10, 50));
    fill(235, 192, 52, random(10, 60));
    ellipse(0, 0, random(30, 1000));
  }

  for (let i = 0; i < 500; i++) {
    randomVectors = p5.Vector.random2D();
    randomVectors.mult(random(30, 950));

    noFill();
    strokeWeight(random(0.5, 4));
    stroke(random(colors));
    line(0, 0, randomVectors.x, randomVectors.y);
    ellipse(0, 0, randomVectors.x, randomVectors.y);
  }
  noLoop();
}

function mousePressed() {
  loop();
}
