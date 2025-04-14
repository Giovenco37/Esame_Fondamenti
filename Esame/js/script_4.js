let x = 0;
let y = 0;
let spacing = 30;
let sphereSize = 3 * spacing / 4;

function setup() {
  createCanvas(windowHeight, windowWidth);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);           // Posiziona il canvas in alto a sinistra
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  background(255, 255, 255);
}

function draw() {
  let r=random (255)
  let g=random (255)
  let b=random (255)
  stroke(r, g, b);
  strokeWeight(spacing / 20);
  fill(r, g, b);
  let rand = random(1);
  if (rand < 0.1) {
    ellipse(x + spacing / 2, y + spacing / 2, sphereSize, sphereSize);
  } else if (rand < 0.75) {
    line(x, y, x + spacing, y + spacing);
  } else {
    line(x, y + spacing, x + spacing, y);
  }
  x = x + spacing;
  if (x > windowWidth) {
    x = 0;
    y = y + spacing;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}