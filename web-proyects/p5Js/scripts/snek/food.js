class food{
    constructor(maxX, maxY){
        this.size = 1;
        this.maxX = maxX;
        this.maxY = maxY;
        this.xpos = 0;
        this.ypos = 0; 
        this.getNewLocation();
    }
  
    getEaten(){
        // picks new location
        this.getNewLocation();
    }

    getNewLocation(){
        this.xpos = floor(random(1,this.maxX));
        this.ypos = floor(random(1,this.maxY));
    }

    show(){
        fill(100,100,100);

        rect(this.xpos,this.ypos, 1, 1);
    }
}