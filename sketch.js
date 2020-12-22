
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof;
var rope1,rope2,rop3,rop4,rop5;
var bob1,bob2,bob3,bob4,bob5;

function preload()
{
  	
}

function setup() {
	createCanvas(800, 700);

	
	rope1 = new Rope(bob1.body,roof,body,-bobDiameter*2,0);
	rope2 = new Rope(bob2.body,roof,body,-bobDiameter*4,0);
	rope1 = new Rope(bob1.body,roof,body,bobDiameter*6,0)
	rope1 = new Rope(bob1.body,roof,body,bobDiameter*8,0);
	rope1 = new Rope(bob1.body,roof,body,bobDiameter*10,0);
    

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



