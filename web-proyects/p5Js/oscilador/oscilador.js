let mic;
let fft, spectrum;
function setup() {
    createCanvas(1000, 500);
    background(255);

    // Create an Audio input
    mic = new p5.AudioIn();
    fft = new p5.FFT();
    fft.setInput(mic);

    // start the Audio Input.
    mic.start();
}

let hCounter = 1;
let hSmooth = 0;
let hSamples = 3;
let prevHSmooth = 1;
function draw() {
    background(0);

    // Get the overall volume (between 0 and 1.0)
    let vol = mic.getLevel();

    fill(127);
    stroke(0);

    // Draw an ellipse with height based on volume
    let h = map(vol, 0, 0.06, 0, height / 2);
    hSmooth+=h;

    drawFunctions(prevHSmooth);
    drawVoice(prevHSmooth);

    hCounter++;
    if(hCounter>=hSamples){
        prevHSmooth = hSmooth/hSamples;
        hCounter = 1;
        hSmooth = 0;
    }

}

function drawFunctions(val){
    stroke(255);
    strokeWeight(3);
    
    noFill();
    beginShape();

    for(let i = 0; i<width;i++){
        let processedValue = 0;

        for(let j = 1; j<val;j+=2){
            processedValue += sin((i+val)/(width/(Math.PI*j)));
        }
        processedValue = map(processedValue,-val/2,val/2,0,height);

        vertex(i,400 - processedValue/3);
    }
    endShape();
}

function drawVoice(val) {
    strokeWeight(3);
    stroke(255);

    let spectrum = fft.analyze();

    noFill();
    beginShape();
    for (let i = 0; i < spectrum.length; i++) {
        let x = map(i, 0, spectrum.length, 0, width);
        let h =  map(spectrum[i], 0, 255, height/2, 0);
        vertex(x, h);
    }
    endShape();


    // let waveform = fft.waveform();
    // noFill();
    // beginShape();
    // stroke(20);
    // for (let i = 0; i < waveform.length; i++) {
    //     let x = map(i, 0, waveform.length, 0, width);
    //     let y = map(waveform[i], -1, 1, 0, height);
    //     vertex(x, y);
    // }
    // endShape();
}


// let osc, playing, freq, amp;

// function setup() {
//   let cnv = createCanvas(100, 100);
//   cnv.mousePressed(playOscillator);
//   osc = new p5.Oscillator('sine');
// }

// function draw() {
//   background(220)
//   freq = constrain(map(mouseX, 0, width, 100, 500), 100, 500);
//   amp = constrain(map(mouseY, height, 0, 0, 1), 0, 1);

//   text('tap to play', 20, 20);
//   text('freq: ' + freq, 20, 40);
//   text('amp: ' + amp, 20, 60);

//   if (playing) {
//     // smooth the transitions by 0.1 seconds
//     osc.freq(freq, 0.1);
//     osc.amp(amp, 0.1);
//   }
// }

// function playOscillator() {
//   // starting an oscillator on a user gesture will enable audio
//   // in browsers that have a strict autoplay policy.
//   // See also: userStartAudio();
//   osc.start();
//   playing = true;
// }

// function mouseReleased() {
//   // ramp amplitude to 0 over 0.5 seconds
//   osc.amp(0, 0.5);
//   playing = false;
// }