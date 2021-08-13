class snake{
    constructor(x, y, bloquesAncho, bloquesAlto) {
        this.bloquesAncho = bloquesAncho;
        this.bloquesAlto = bloquesAlto;
        
        this.dir = 'r';
        this.xdir = -1;
        this.ydir = 0;

        this.body = [];
        this.body[0] = createVector(x, y);
        
        this.foodEaten = 0;

    }

    eat(food){
        if(dist(food.xpos,food.ypos, this.body[0].x, this.body[0].y) < food.size){
            food.getEaten();
            this.grow();
        }
    }

    update() {
        let head = this.body[this.body.length-1].copy();
       
        this.body.shift();

        head.x = (head.x + this.xdir + this.bloquesAncho) % this.bloquesAncho; 
        head.y = (head.y - this.ydir + this.bloquesAlto) % this.bloquesAlto;
        
        this.body.push(head);

    }

    grow(){
        let head = this.body[this.body.length-1].copy();
        this.foodEaten++;
        this.body.push(head);
    }
    

    // getHarrassed(valueOfHarrassment){
    //     auxValue = map(valueOfHarrassment,0,1,)
    //     this.show(colorOfHarrassment);
    // }


    show(){
        
        

        noStroke();
        
        for (let i = 0; i < this.body.length; i++) {
            let mapeoI = map(i,0,this.body.length, 0, 255);
            fill(color(mapeoI,100,100));
            rect(this.body[i].x, this.body[i].y, 1, 1)
        }
    }

    changeDirection(xdir,ydir){
        this.xdir = xdir ;
        this.ydir = ydir;
    }
    
}