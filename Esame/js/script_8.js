// Questo codice genera una griglia di triangoli colorati su un canvas. Alla pressione del mouse, i triangoli ruotano di 180 gradi, cambiano colore e la griglia ricomincia da capo con nuove dimensioni.//

// Dichiarazione delle variabili globali
let x = 0,
  y = 0,
  g = 75,
  a = 0,
  c1,
  c2;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');

  // Disabilita i contorni per le forme disegnate
  noStroke();

  // Imposta colori casuali
  colori();

  // Imposta lo sfondo con il colore c2
  background(c2);
}

function draw() {
  // Controlla se il triangolo è all'interno della griglia
  if (x + g <= width && y + g <= height) {
    // Sceglie casualmente uno dei due colori c1 o c2
    fill(random() < 0.5 ? c1 : c2);

    // Sposta l'origine delle coordinate al centro del triangolo
    translate(x + g / 2, y + g / 2);

    // Ruota il triangolo dell'angolo 'a' (in gradi)
    rotate(radians(a));

    // Disegna un triangolo con la punta verso l'alto
    triangle(0, -g / 2, -g / 2, g / 2, g / 2, g / 2);
  }

  // Aumenta la posizione x (sposta il triangolo alla casella successiva)
  x += g;

  // Se x supera la larghezza del canvas, resetta x e aumenta y (scendendo alla riga successiva)
  if (x >= width) (x = 0), (y += g);

  // Se y supera l'altezza del canvas, pulisce lo sfondo e ricomincia la griglia
  if (y >= height) background(c2), (x = 0), (y = 0), (g /= 2);
}

function mousePressed() {
  // A ogni clic, ruota i triangoli di 180 gradi (l'angolo viene incrementato di 180°)
  a = (a + 180) % 360;

  // Cambia i colori casualmente
  colori();

  // Pulisce lo schermo con il nuovo colore di sfondo
  background(c2);

  // Ricomincia da capo con la griglia
  x = y = 0;

  // Ripristina la dimensione iniziale del triangolo
  g = 75;
}

function colori() {
  // Assegna un colore casuale a c1 e c2
  c1 = color(random(255), random(255), random(255));
  c2 = color(random(255), random(255), random(255));
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}