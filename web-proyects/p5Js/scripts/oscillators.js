// jonathan cavia 06/2021
let h=innerHeight;
let w=innerWidth;

// oscillators
let myOscillatorSine, myOscillatorSquare;
let freq, amp, playing;

function preload(){
    console.log("test");
}

function setup() {
    let cnv = createCanvas(w, h);
    
    frameRate(60);
    colorMode(HSB);

    myOscillatorSine = new p5.Oscillator('sine');
    myOscillatorSquare = new p5.Oscillator('square');

    playOscillator();

}

function draw() {
    background(0);

    fill(100, 100, 100);
   
    freq = constrain(map(mouseX, 0, width, 100, 500), 100, 15000);
    amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

    if(playing) {
        myOscillatorSine.freq(freq, 0.1);
        myOscillatorSine.amp(amp, 0.1);
    }else{
        myOscillatorSine.amp(0, 0.1);
    }
}

function playOscillator() {
    // starting an oscillator on a user gesture will enable audio
    // in browsers that have a strict autoplay policy.
    // See also: userStartAudio();
    userStartAudio();
    myOscillatorSine.start();
    playing = true;
  }

  function mousePressed() {
    playing = true;
  }
  
  function mouseReleased() {
    // ramp amplitude to 0 over 0.5 seconds
    myOscillatorSine.amp(0, 0.5);
    playing = false;
  }