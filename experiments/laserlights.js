// The lines 12, 21, 22, 24-27 were adapted from https://www.youtube.com/watch?v=jupjuq9Jl-M&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=12&ab_channel=TheCodingTrain Accessed: 2023-09-08
    // I followed the referenced tutorial (above) to understand and use the p5.Vector.random() function to create my own generative art
// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colors = [[154, 224, 237, 70], [100, 167, 181], [85, 186, 207, 70], [137, 223, 240], [64, 159, 179], [206, 236, 242, 70]];

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(9, 22, 28);
    translate(innerWidth/2, innerHeight/2);
    
    for (let i = 0; i < 20; i++) {
        stroke(154, 224, 237, 50);
        fill(87, 173, 189, 30);
        ellipse(0, 0, random(30, 170));
    }

    for (let i = 0; i < 250; i++) {
        randomVectors = p5.Vector.random2D();
        randomVectors.mult(random(30, 250));
        
        noFill();
        strokeWeight(2);
        stroke(random(colors));
        line(0, 0, randomVectors.x, randomVectors.y);
    }
    noLoop();
}