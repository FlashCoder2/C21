
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var mango1, mango2, mango3, mango4, mango5;
var tree;
var rock;
var boy;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	tree = new Tree(760,200,30);

	mango1 = new Mangoes(200,200,20);
	mango2 = new Mangoes(200,200,20);
	mango3 = new Mangoes(200,200,20);
	mango4 = new Mangoes(200,200,20);
	mango5 = new Mangoes(200,200,20);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}



