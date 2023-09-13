// The lines 5-6, 11-12, 20, 24-35 were adapted from https://www.youtube.com/watch?v=bqF9w9TTfeo&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17&ab_channel=TheCodingTrain Accessed: 2023-09-13
    // I followed the tutorial linked above and changed parts of the code to make an interactive artpiece
// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colors = [[232, 193, 86, 100], [227, 230, 87, 100], [222, 138, 87, 100], [222, 104, 91, 100], [222, 91, 91, 100]];
let position;
let previousPosition;

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(18, 9, 9);
    position = createVector(innerWidth/2, innerHeight/2);
    previousPosition = position.copy();
}

function draw() {
    stroke(random(colors));
    strokeWeight(2);

    if (mouseIsPressed) {
        line(position.x, position.y, previousPosition.x, previousPosition.y);
        line(mouseX, mouseY, previousPosition.x, previousPosition.y);
        // The following line was adapted from https://editor.p5js.org/p5/sketches/Drawing:_Continuous_Lines Accessed: 2023-09-13
        line(mouseX, mouseY, pmouseX, pmouseY);
        previousPosition.set(position);

        let step = p5.Vector.random2D();

        // Add a 10% chance that it's going to be 10 in length
        let r = random(100);
        if (r < 10) {
            step.mult(10);
        }

        step.mult(10);
        position.add(step);
    }
}