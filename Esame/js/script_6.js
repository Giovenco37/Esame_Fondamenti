let hexSize = 50; 
let hexagons = [];

function setup() {
  createCanvas (windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);           // Posiziona il canvas in alto a sinistra
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  let cols = floor (width / (hexSize));
  let rows = floor (height / (hexSize));

  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      let offsetX = x * hexSize * 1.5;
      let offsetY = y * hexSize * sqrt(3);
      if (x % 2 == 1) offsetY += hexSize * sqrt(3) / 2;
      hexagons.push({ x: offsetX, y: offsetY, color: color(random(255), random(255), random(255)), lastChange: millis() });
    }
  }
}

function draw() {
  background(255, 255, 255);
  for (let hex of hexagons) {
      if (millis() - hex.lastChange > 2000) {
      hex.color = color(random(255), random(255), random(255));
      hex.lastChange = millis();
    }

    fill(hex.color);
    stroke(0);
    strokeWeight(1);
    beginShape();
    for (let i = 0; i < 6; i++) {
      let angle = TWO_PI / 6 * i;
      let xOff = hex.x + hexSize * cos(angle);
      let yOff = hex.y + hexSize * sin(angle);
      vertex(xOff, yOff);
    }
    endShape(CLOSE);
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}