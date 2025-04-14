// Questo sketch genera una griglia di forme (rettangoli e cerchi) nere su sfondo grigio chiaro, lasciando casualmente alcune righe e colonne vuote secondo una probabilità prefissata.

// Impostiamo la distanza tra le forme e le variabili per gestire la posizione e le colonne/righe da saltare
let distanza = 15;
let x = 0,
  y = 0;
let saltaColonne = [];
let saltaRighe = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  background(190);
  rectMode(CENTER);
  stroke(255);
  strokeWeight(0.2);

  // Calcola il numero di colonne e righe in base alla dimensione del canvas e della spaziatura
  let colonne = floor(width / distanza);
  let righe = floor(height / distanza);

  // Decidiamo casualmente quali colonne non disegnare (con probabilità del 10%)
  for (let i = 0; i < colonne; i++) {
    if (random(1) < 0.1) {
      saltaColonne.push(i);
    }
  }

  // Decidiamo casualmente quali righe non disegnare (con probabilità del 10%)
  for (let j = 0; j < righe; j++) {
    if (random(1) < 0.1) {
      saltaRighe.push(j);
    }
  }
}

function draw() {
  // Calcoliamo la dimensione delle forme
  let dimensione = distanza * 0.9;

  // Calcola in quale colonna e riga si trova la posizione corrente
  let colonna = floor(x / distanza);
  let riga = floor(y / distanza);

  // Se la colonna e la riga non sono da saltare, disegna una forma
  if (!saltaColonne.includes(colonna) && !saltaRighe.includes(riga)) {
    fill(0); // Imposta colore di riempimento nero

    // Disegna casualmente un rettangolo o un'ellisse nella posizione corrente
    if (random(2) < 1) {
      rect(x, y, dimensione, dimensione);
    } else {
      ellipse(x, y, dimensione, dimensione);
    }
  }

  // Passa alla riga successiva
  y += distanza;

  // Quando raggiunge il fondo del canvas, passa alla colonna successiva e riparte dall'alto
  if (y >= height) {
    y = 0;
    x += distanza;

    // Quando raggiunge il bordo destro, ferma il disegno
    if (x >= width) noLoop();
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
