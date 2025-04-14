let tileCount = 20;
let moduleColor;
let moduleAlpha = 180;
let maxDistance = 500;
let waveStrength = 15; // Intensità visiva dell'onda
let dropletSize = 10;
let maxSquareSize = 30;
let waveFrequency = 0.1; // Velocità delle onde
let rippleSpeed = 0.15; // Velocità di propagazione dei ripple
let rippleSpacing = 25; // Distanza tra i cerchi dell'onda
let r = 0;
let g = 0;
let b = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  noStroke();
  moduleColor = color(0, 0, 0, moduleAlpha);
  r = random(0, 222);
  g = random(0, 16);
  b = random(0, 255);
}

function draw() {
  clear();
  fill(r, g, b, 100);
  for (let gridY = 0; gridY < height; gridY += 25) {
    for (let gridX = 0; gridX < width; gridX += 25) {
      let distanceToCenter = dist(width / 2, height / 2, gridX, gridY);
      let wave = sin(distanceToCenter * rippleSpeed - frameCount * waveFrequency);
      let diameter = map(wave, -1, 1, 5, maxSquareSize);

      push();
      translate(gridX, gridY);
      ellipse(0, 0, diameter, diameter);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}