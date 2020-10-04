
const Engine	 =	 Matter.Engine;
const World 	 =   Matter.World;
const Bodies     =	 Matter.Bodies;
const Body       = 	 Matter.Body;
const Constraint =   Matter.Constraint;

var  tree;
var  mango1, mango7, mango2, mango3, mango4, mango5, mango6, mango8;
var  boyImage,  boy;
var  park , object;
var rubber;
function preload()
{
	boyImage = loadImage("boy.png");
}

function setup() {
	createCanvas(1000, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	boy = createSprite(520,625,10,10);
	boy.addImage(boyImage)
	boy.scale = 0.1
	
	tree = new branch();
	park = new grass();
	object = new stone(470,570);

	mango1 = new mango(850,300);
	mango2 = new mango(870,400);
	mango3 = new mango(830,350);
	mango4 = new mango(900,340);
	mango5 = new mango(950,370);
	mango6 = new mango(950,420);
	mango7 = new mango(800,430);
	mango8 = new mango(750,390);

	rubber = new rope(object.body,{x:470,y:570})

	Engine.run(engine);
  
}


function draw() {
  background(200,200,200);
  Engine.update(engine)
  tree.display();
  park.display();

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  
  object.display();

  rubber.display();
  
  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(object.body,{x:mouseX , y:mouseY})
}


function mouseReleased(){
	Matter.Body.applyForce(object.body,{x:-60 , y:-60})
	rubber.fly();
}


function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(object.body,{x:470, y:570})
		rubber.attach(object.body);
	}
}
function detectCollision(mango,stone){
	
	var distance = dist(stone.body.position.x  , stone.body.position.y ,mango.body.position.x ,
		mango.body.position.y )

		if( distance<=mango + stone){
			Matter.Body.setStatic(mango.body,false);
		}
}