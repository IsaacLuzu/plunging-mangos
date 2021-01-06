const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var mango1
var mango2
var mango3
var mango4
var mango5
var mango6
var mango7
var mango8
var mango9
var mango10
var mango11
var mango12

var tree1

var launcher

var stone1

var ground1

var kid

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1 = new mango(110,100,40)

	mango2 = new mango(120,110,50)

	mango3 = new mango(130,120,60)

	mango4 = new mango(140,130,70)

	mango5 = new mango(150,140,80)

	mango6 = new mango(160,150,90)

	mango7 = new mango(170,160,100)

	mango8 = new mango(180,170,110)

	mango9 = new mango(190,180,120)

	mango10 = new mango(200,190,130)

	mango11 = new mango(210,200,140)

	mango12 = new mango(220,210,150)

	tree1 = new tree(210,250)

	launcher = new Launcher(200,50)

	stone1 = new stone (500,20)

	ground1 = new ground (100,90,700,5)

	kid = new Kid (100,200,25,45)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  mango1.display();

  mango2.display();

  mango3.display();

  mango4.display();

  mango5.display();

  mango6.display();

  mango7.display();

  mango8.display();

  mango9.display();

  mango10.display();

  mango11.display();

  mango12.display();

  tree1.display();
  
  launcher.display();

  stone1.display();

  kid.display();

  drawSprites();
 
}

//12 mangos, 1 tree, 1 launcher, 1 stone, 1 ground