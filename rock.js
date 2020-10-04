class stone{
    constructor(x,y){
    var options = {
       
        'restitution':0.6,
        'friction':0.2,
        'density':0.5
      
    }
    this.body = Bodies.circle(x,y,55,options);
    this.image = loadImage("stone.png");
    World.add(world,this.body);

    }

    display(){
    var pos = this.body.position;
    imageMode(CENTER);
  
    image(this.image,pos.x, pos.y,50,60);
    }






}