// The lines 5-6, 13-14, 25, 29-40 were adapted from https://www.youtube.com/watch?v=bqF9w9TTfeo&list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM&index=17&ab_channel=TheCodingTrain Accessed: 2023-09-13
    // I followed the tutorial linked above and changed parts of the code to make an interactive artpiece with sound
// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colors = [[52, 235, 183, 100], [50, 227, 215, 100], [54, 198, 235, 100], [53, 147, 230, 100], [158, 53, 232, 100], [216, 57, 237, 100]];
let position;
let previousPosition;
let membraneSynth;
let randomNotes = ["C2", "C3", "C4", "C5", "C6"];

function setup() {
    createCanvas(innerWidth, innerHeight);
    background(18, 9, 9);
    position = createVector(innerWidth/2, innerHeight/2);
    previousPosition = position.copy();

    // The following line was adapted from https://tonejs.github.io/docs/14.7.77/MembraneSynth Accessed: 2023-09-14
    membraneSynth = new Tone.MembraneSynth().toDestination();
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

        // The following line was adapted from https://tonejs.github.io/docs/14.7.77/MembraneSynth Accessed: 2023-09-14
        membraneSynth.triggerAttackRelease(random(randomNotes), "16n");
    }
}