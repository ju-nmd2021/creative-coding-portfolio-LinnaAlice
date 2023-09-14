let duoSynth;

function setup() {
  createCanvas(innerWidth, innerHeight);

  duoSynth = new Tone.DuoSynth().toDestination();
}

function draw() {
  if (mouseIsPressed) {
    duoSynth.triggerAttackRelease("E3", "4n");
  } else {
    return duoSynth;
  }
}
