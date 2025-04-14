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

function setup() {
  createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  noFill();
  strokeWeight(3);
  moduleColor = color(0, 0, 0, moduleAlpha);
}

function draw() {
  clear();
  stroke(moduleColor);

  for (let gridY = 0; gridY < height; gridY += 25) {
    for (let gridX = 0; gridX < width; gridX += 25) {
      let distanceToCenter = dist(width / 2, height / 2, gridX, gridY);
      
      // Effetto ripple: onde concentriche che si propagano dal centro
      let wave = sin(distanceToCenter * rippleSpeed - frameCount * waveFrequency);
      let diameter = map(wave, -1, 1, 5, maxSquareSize);

      push();
      translate(gridX, gridY);
      rect(0, 0, diameter, diameter);
      pop();
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}