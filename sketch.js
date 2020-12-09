const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world;
var paper, dustbin, ground;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 400);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	ground = new Ground(500,350,1000,15);
	paper = new Paper(100,330,25,25);

  dustbin = new Dustbin(650,250,10,200);
	//dustbin2 = new Dustbin(800,250,10,200);
	//dustbin3 = new Dustbin(725,338,150,10)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  ground.display();
  dustbin.display();
  paper.display();
  //dustbin2.display();
  //dustbin3.display();
  
  drawSprites();
 
}

function keyPressed(){
   if (keyCode === UP_ARROW){
	   Matter.Body.applyForce(paper.body,paper.body.position,{x:110,y:-110});
   }	
}



