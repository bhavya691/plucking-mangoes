class branch{

    constructor(){

    var options ={
        isStatic:true
    }
    this.body = Bodies.rectangle(850,470,40,40,options)
    this.width = 300
    this.height = 450
    this.image = loadImage("tree.png");
    World.add(world,this.body)
}

    display(){
    var pos = this.body.position;
    imageMode(CENTER);
    fill("red");
    image(this.image,pos.x,pos.y,this.width,this.height)
    }


}