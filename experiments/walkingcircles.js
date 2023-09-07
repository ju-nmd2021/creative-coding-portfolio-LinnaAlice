// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colors = [[86, 161, 191, 100], [112, 102, 204, 100], [170, 87, 189, 100]];

let x;
let y;
let xoff = 0;
let yoff = 0;

function setup() {
    createCanvas(width, height);
    x = 200;
    y = 200;
    background(255);
}

function draw() {
    stroke(255, 70);
    fill(random(colors));

    x += noise(xoff) * random(-30, 30);
    y += noise(yoff) * random(-30, 30);

    ellipse(x, y, noise(xoff) * random(30, 70));

    xoff += 0.01;
    yoff += 0.01;
}