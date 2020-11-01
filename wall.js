class Wall{
 
    constructor(x,y,width,height){

    var options = {
        isStatic: true
    }
    
    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    World.add(world,this.body);

    }


show(){

    var pos = this.body.position;
   // translate(pos.x, pos.y);
    fill("yellow");
    rectMode(CENTER);
    rect(pos.x,pos.y,this.width,this.height);
    
}
}