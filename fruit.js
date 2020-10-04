class mango{
    constructor(x,y){
        var options ={
            isStatic:true,
            restitution:0,
            friction:1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = 40
        this.height = 40
        this.image = loadImage("mango.png")
        World.add(world,this.body)
    }

    display(){
        var pos = this.body.position
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height)
    }
}