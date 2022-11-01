const numPts = 100;
const ratio = 10;
const numPtsIntegral = numPts / ratio;


let currentAmountX = 20;
let currentBackgroundX = 1;

function miFun(x) {
    // return (x/(abs(sin(x/3))))*5; //rodro
    return 200 + cos(x)*100 - cos(x/2)*100 + cos(x/3)*100 ; //senosoido
    // const factor = 10;
    // const newX = x/factor
    // return (200 + abs(newX) + sqrt(1-newX*newX))*2;
}

function easeFunction(i){
    return i*i/20;
}

function setup() {
    createCanvas(1000, 500);
}

function draw() {

    currentAmountX += 0.1;
    currentBackgroundX += 5;
    drawBackground((180+currentBackgroundX));
    drawLines();
    drawRectangles(easeFunction(currentAmountX));
}

function drawBackground(value){
    colorMode(HSB, 360, 100, 100);

    noStroke();
    let px = 0;
    let py = miFun(0);
    const deltaX = 1;

    for (let i = 0; i < width; i++) {
        let x = i * deltaX;
        let y = miFun(i);

        let lightness = map(cos(i+value)/50,0,1,80,92);
        let hue = map((i/10+value)%360,0,360,0,360);
        fill(hue,80,lightness);
        rect(x, 0, 1, 1000);

        //store the last position
        px = x;
        py = y;
    }

    colorMode(RGB);
    fill(230,230,230);
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