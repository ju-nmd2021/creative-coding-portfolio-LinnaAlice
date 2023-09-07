// I followed the tutorials on perlin noise by Daniel Shiffman uploaded on his YouTube channel playlist: https://www.youtube.com/playlist?list=PLRqwX-V7Uu6ZV4yEcW3uDwOgGXKUUsPOM
    // However, I made my own changes to create my own artwork
// The following line with the idea of making an array of set colors was adapted from https://www.seekingoutside.com/using-generative-art-to-inform-hard-edge-abstract-paintings-with-p5-js-code-snippet/ Accessed: 2023-09-01
let colorsFill = [[109, 192, 209, 100], [184, 109, 209, 100], [204, 106, 176, 100]];

function setup() {
    createCanvas(innerWidth, innerHeight);
}

function draw() {
    background(207, 171, 203);
    fill(random(colorsFill));
    noStroke();

    beginShape();
    for (let xoff = 0; xoff <= innerWidth; xoff++) {
        for (let x = 0; x <= innerWidth + 30; x++) {
            let y = map(noise(xoff), 0, 1, 0, innerHeight);
            ellipse(x, y, noise(xoff) * 40);

            xoff += 1;
        }
    }
    endShape();

    beginShape();
    for (let xoff2 = 0; xoff2 <= innerHeight; xoff2++) {
        for (let y = 0; y <= innerHeight + 30; y++) {
            let x = map(noise(xoff2), 0, 1, 0, innerWidth);
            ellipse(x, y, noise(xoff2) * 40);

            xoff2 += 1;
        }
    }
    endShape();
    noLoop();
}