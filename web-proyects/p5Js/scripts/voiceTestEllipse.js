// jonathan cavia 06/2021
let h=innerHeight;
let w=innerWidth;
let mic;

function preload(){
    console.log("test");
}

function setup() {
    mic = crearMic();
    createCanvas(w, h);
    frameRate(60);
    colorMode(HSB);
}

function draw() {
    background(0);

    let amplitudSonido = mic.getLevel();
    ajusteVolumen = map(amplitudSonido, 0, 1, 0, height);
    let miColor = map(amplitudSonido,0,1,10,500);
    fill(miColor, 100, 100);
    ellipse(width / 2, height/2, 100 + ajusteVolumen, 100 + ajusteVolumen);
}

function crearMic(){
    let miMic = new p5.AudioIn();
    miMic.start();
    return miMic;
}

//no empieza hasta que no le hacemos click
function touchStarted() {
    getAudioContext().resume();
  }