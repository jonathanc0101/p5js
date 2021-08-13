// jonathan cavia 06/2021
const h=innerHeight ;
const w=innerWidth ;

const bloquesAncho = 30;
const bloquesAlto = 30;

let miSnake;
let miFood;

const sizeFactor = 70;
    

function preload(){
    console.log("test");
}

function setup() {
    createCanvas(bloquesAncho * sizeFactor, bloquesAlto * sizeFactor);
    frameRate(20);
    colorMode(HSB);
    rectMode(CENTER);
    noStroke();

    miSnake = new snake(4,4,bloquesAncho, bloquesAlto);
    miFood = new food(bloquesAncho,bloquesAlto);
}

function draw() {

    background(0);
    scale(sizeFactor, sizeFactor);
    // lugar de juego
    fill(255);
    miSnake.update();
    miSnake.eat(miFood);
    miFood.show();
    miSnake.show();
}

function keyPressed() {
    let dir;
    if (keyCode === LEFT_ARROW) {
        dir = 'l';
    } else if (keyCode === RIGHT_ARROW) {
        dir = 'r';
    }else if (keyCode === UP_ARROW) {
        dir = 'u';
    }else if (keyCode === DOWN_ARROW) {
        dir = 'd';
    }
    
    let validDir = true;
    if(dir == 'r' && miSnake.dir != 'l'){
        // right
        miSnake.changeDirection(1,0);
    }else if(dir == 'l' && miSnake.dir != 'r'){
        //left
        miSnake.changeDirection(-1,0);
    }else if(dir == 'u' && miSnake.dir != 'd'){
        //up
        miSnake.changeDirection(0,1);
    }else if(dir == 'd' && miSnake.dir != 'u'){
        // down
        miSnake.changeDirection(0,-1);
    }else{
        validDir = false;
    }

    if (validDir){
        miSnake.dir = dir;
    }

}

// //no empieza el audio hasta que no le hacemos click
// function touchStarted() {
//     getAudioContext().resume();
//   }