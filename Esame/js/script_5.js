let scl = 80;

function setup() {
  createCanvas(windowHeight, windowWidth);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);           // Posiziona il canvas in alto a sinistra
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
}

function draw() {
  if (frameCount % 5 === 0) {
    let x = random(width);
    let y = random(height);
    let w = random(scl / 2.5, scl * 1.5);
    let h = random(scl / 2.5, scl * 1.5);
    let angle = random(TWO_PI);
    let fillColor = color(random(255), random(255), random(255));
    
    push();
    translate(x + w / 2, y + h / 2);
    rotate(angle);
    fill(fillColor);
    rectMode(CENTER);
    rect(0, 0, w, h);
    pop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}