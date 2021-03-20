const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var bin1, bin2, bin3, paper1;

function setup() {
	createCanvas(1000, 500);
	engine = Engine.create();
	world = engine.world;

	ground = new Ground(500,490,1200,30);

	//Create the Bodies Here.
    bin1 = new Dustbin(650,450,150,15);
	bin2 = new Dustbin(600,440,15,85);
	bin3 = new Dustbin(700,440,15,85);
	paper1 = new paperObject(100,300,10);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display();
  bin1.display();
  bin2.display();
  bin3.display();
  paper1.display();
  
  keyPressed();
  drawSprites();
}

function keyPressed(){
	if (keyCode === UP_ARROW){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
	}
}

