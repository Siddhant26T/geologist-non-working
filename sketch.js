
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var hammer,plane,stone,rubber,sand,sand1,sand2,sand3,sand4,iron;
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    hammer = new Hammer(70,70);
	plane = new Plane();
	stone = new Stone();
	rubber = new Rubber();
	sand = new Sand(150,680);
	sand1 = new Sand(170,680);
	sand2 = new Sand(190,680);
	sand3 = new Sand(210,680);
	sand4 = new Sand(230,680);
    iron = new Iron();
	
  
}


function draw() {
  rectMode(CENTER);
  background("CYAN");
  Engine.update(engine);
  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
  sand.display();
  sand1.display();
  sand2.display();
  sand3.display();
  sand4.display();
  iron.display();
}



