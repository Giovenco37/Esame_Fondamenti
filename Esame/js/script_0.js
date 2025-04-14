let x = 0;
let y = 0;
let size;
let r = 0;
let g = 0;
let b = 0;
let c = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  r = random(0, 222);
  g = random(0, 16);
  b = random(0, 255);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);           // Posiziona il canvas in alto a sinistra
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
}

function draw() {
  size = 30;
  textureLine(size, r, g, b);
  c = random(0, 1);
  if ( c < 0.3) {
    r = (r + random(128, 255)) % 255;
  } else if (0.3 <= c < 0.6){
    g = (g + random(128, 255)) % 255;
  } else if (0.6 <= c <= 1) {
    b = (b + random(128, 255)) % 255;
  }
  
  if (mouseIsPressed == true) {
    g = random(0, 222);
    r = random(0, 16);
    b = random(0, 255);
  }
}

function textureLine(s, r, g, b) {
  stroke (r, g, b);
  strokeWeight(random(1, 5));
  
  if(random(1) < 0.25) {
    line(x, y, x + s, y);
    } else if (0.25 <= random(1) < 0.5) {
    line(x + s, y, x + s, y);
    } else if (0.5 <= random(1) < 0.75) {
    line(x, y, x + s, y + s);
    } else if (0.75 <= random(1) <= 1) {
    line(x, y + s, x + s, y);
    }
    
  x += s;
  if (x > width){
    x = 0;
    y += s;
  }
}