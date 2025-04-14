/*
  Animazione di onde in p5.js.
  Le onde si muovono usando una funzione seno e cambiano colore in base all'altezza per simulare l'effetto della schiuma sull'acqua.
*/


// Variabili globali
let distanza = 20, // distanza verticale tra le onde
    t = 0;         // tempo per animare le onde

function setup() {
  createCanvas(windowWidth, windowHeight);
  let cnv = createCanvas(windowWidth, windowHeight);
  cnv.position(0, 0);
  cnv.style('z-index', '-1');
  cnv.style('position', 'fixed');
  stroke(30, 60, 90);
}

function draw() {
  background(220);

// Ciclo per disegnare più onde verticalmente, una ogni 'distanza' pixel
  for (let y = 0; y < height; y += distanza) {
    beginShape(); // Inizia una nuova forma (un'onda)

// Punto iniziale in basso a sinistra (serve per chiudere la forma in basso)
    vertex(0, height);

// Calcola la fase base per quest'onda in base al tempo e alla posizione verticale
    let faseBase = t + y * 0.05;

    for (let x = 0; x <= width; x += 10) {
// Calcola l'altezza dell'onda con una funzione seno oscillante
      let onda = sin(TWO_PI * (x / width) + faseBase) * 30;

// Se il valore dell'onda è vicino a zero (piccola altezza), usa il colore schiuma, altrimenti usa il colore blu dell’onda
      fill(abs(onda) < 10 ? color(255, 255, 255, 150) : color(0, 120, 255));

      vertex(x, y + onda);
    }

    vertex(width, height);

// Termina e chiude la forma (unisce tutti i punti definiti con vertex)
    endShape(CLOSE);
  }

  // Incrementa il tempo per animare le onde
  t += 0.02;
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
