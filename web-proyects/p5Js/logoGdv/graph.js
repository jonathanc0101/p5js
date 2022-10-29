const numPts = 100;
const ratio = 10;
const numPtsIntegral = numPts / ratio;


let currentAmountX = 1;

function miFun(i) {
    return cos(i / 50) * 100 + floor(height / 6);
}

function easeFunction(i){
    return i*i;
}

function setup() {
    createCanvas(1000, 500);

    // slider = createSlider(0, 255, 100);
    // slider.position(10, 10);
    // slider.style('width', '80px');
}

function draw() {
    background(color("#6160ff"));
    drawLines();

    // let val = slider.value();

    currentAmountX += 0.1;
    drawRectangles(easeFunction(currentAmountX));
}

function drawLines() {
    stroke(0);
    // draw lines
    let px = 0;
    let py = miFun(0);
    const deltaX = (width / (numPts - 1));

    for (let i = 0; i < numPts; i++) {
        let x = i * deltaX;
        let y = miFun(i);
        line(px, py, x, y);

        //store the last position
        px = x;
        py = y;
    }
}

function drawRectangles(quantity) {

    const ratioLocal = (numPts / quantity);
    console.log("quantity",quantity);
    console.log("ratiolocal",ratioLocal);

    stroke(0);
    strokeWeight(0.1);
    // draw lines
    let px = 0;
    let py = miFun(0);
    const deltaX = (width / (numPts - 1));
    const widthRect = (width / (quantity - 1));

    for (let i = 0; i < quantity; i++) {
        const x = i * deltaX * ratioLocal;
        const y = miFun(i * ratioLocal);

        rect(px, y, widthRect, 1000);

        //store the last position
        px = x;
        py = y;
    }
}