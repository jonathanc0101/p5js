let h=innerHeight;
let w=innerWidth;
let vector=[];
let j=0;
let k=0;

let snd;

function setup() {
    createCanvas(w, h);
    frameRate(60);
    background(0);
    colorMode(HSB);
    vector = crearArrayRandom(width);

}

function draw() {
    dibujarArray(vector);
    intercambiar(vector,j,menorPos(vector,j));

    if(j<vector.length-1){
        j++;}
}

function crearArrayRandom(max){
    array = []
    for (i = 0; i < max; i++) {
        array.push(Math.random()*height);
    }
    return array
}

//animacion
function dibujarArray(arr){
    background(0);
    translate(-width/2,height/2);
    //se dibujan las lineas
    for (i = 0; i < arr.length; i++) {
        stroke(arr[i],100,100);
        line(i+width/2,height/2,i+width/2,-arr[i]+height/2);
    }
}

function mayorPos(arr,i){
        let max=i;
    aux=arr[i];
    for (var s=i; s < arr.length-1; s++) {
        if(aux<arr[s+1]){
            aux=arr[s+1];
            max=s+1;
        }
    }
    return max;
}

function menorPos(arr,i){
    let min=i;
    aux=arr[i];

    for (var s=i; s < arr.length-1; s++) {
        if(aux>arr[s+1]){
            aux=arr[s+1];
            min=s+1;
        }
    }
    return min;
}


function intercambiar(arr,s,t){
    aux=arr[s];
    arr[s]=arr[t];
    arr[t]=aux;
}

