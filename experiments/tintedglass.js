// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colors = [[227, 152, 224, 90], [217, 143, 214, 90], [147, 205, 219, 90], [143, 219, 190, 90], [185, 145, 219, 90]];

function setup() {
    createCanvas(innerWidth, innerHeight);
  }
  
  function draw() {
    background(235, 242, 255);
    noStroke();
    for (let i = 0; i < random(70, 100); i++) {
      fill(random(colors));
      rect(random(innerWidth), random(innerHeight), random(80, 250), random(80, 250));
    }
    noLoop();
  }
  