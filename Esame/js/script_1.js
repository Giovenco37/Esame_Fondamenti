var tileCount = 10;
var moduleColor;
var moduleAlpha = 180;
var maxDistance = 900;
var waveSpeed = 0.03; // Velocità dell'onda
var waveStrength = 20; // Forxa dell'onda
var maxWaveStrength = 100; // Forza massima dell'onda
var minWaveStrength = 20;  // Forza minima dell'onda
var maxEllipseDiameter = 60; // Diametro massimo dell'ellisse
var minEllipseDiameter = 10; // Diametro minimo dell'ellisse

function setup() {
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  noFill();
  strokeWeight(3);
  moduleColor = color(255, 255, 255, moduleAlpha);
}

function draw() {
  clear();
  stroke(moduleColor);
  creaGriglia();
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function creaGriglia() {
  for (var gridY = 0; gridY < windowHeight; gridY += 50) {
    for (var gridX = 0; gridX < windowWidth; gridX += 50) {
      var distanceX = abs(mouseX - gridX);
      var distanceY = abs(mouseY - gridY);
      var distance = sqrt(distanceX * distanceX + distanceY * distanceY);
      var diameter = map(distance, 0, maxDistance, 0, 40); // Diametro iniziale
      var wave = sin(frameCount * waveSpeed + (gridX + gridY) * 0.1) * waveStrength; // Usa waveStrength
      diameter += wave; // Applica l'effetto onda
      
      // Limita il diametro massimo e minimo delle ellissi
      diameter = min(diameter, maxEllipseDiameter);
      diameter = max(diameter, minEllipseDiameter);

      push();
      translate(gridX, gridY);
      ellipse(0, 0, diameter, diameter);
      pop();
    }
  }
}

function mousePressed() {
  if (waveStrength < maxWaveStrength) {
    // Aumenta la forza dell'onda fino al massimo
    waveStrength += 10;
    if (waveStrength > maxWaveStrength) {
      waveStrength = maxWaveStrength; // Limita la forza dell'onda al massimo
    }
  } else {
    // Quando arriva a 100, inizia a diminuire la forza dell'onda
    waveStrength -= 10;
    if (waveStrength < minWaveStrength) {
      waveStrength = minWaveStrength; // Limita la forza dell'onda al minimo
    }
  }

  // Quando waveStrength diminuisce, aggiorniamo il diametro
  if (waveStrength < maxWaveStrength) {
    maxEllipseDiameter = map(waveStrength, minWaveStrength, maxWaveStrength, 60, 30);
  }
}
