const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof1;
var ball1,ball2,ball3,ball4,ball5;
var rope1,rope2,rope3,rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	roof1 = new Roof(400,200,500,50);

	ball1 = new Ball(200,500,80);
	ball2 = new Ball(300,500,80);
	ball3 = new Ball(400,500,80);
	ball4 = new Ball(500,500,80);
	ball5 = new Ball(600,500,80);

	var ball1Diameter=ball1.radius*2;
    var ball2Diameter=ball2.radius*2;
	var ball3Diameter=ball3.radius*2;
	var ball4Diameter=ball4.radius*2;
	var ball5Diameter=ball5.radius*2;


	rope1 = new Rope(ball1.body,roof1.body,-ball1Diameter*1,0);
	rope2 = new Rope(ball2.body,roof1.body,-ball2Diameter*0.5,0);
	rope3 = new Rope(ball3.body,roof1.body,-ball3Diameter*0,0);
	rope4 = new Rope(ball4.body,roof1.body,-ball4Diameter*-0.5,0);
	rope5 = new Rope(ball5.body,roof1.body,-ball5Diameter*-1,0);

	

	Engine.run(engine);
  
}


function draw() {
 
 	background(200);
	
	    roof1.display();
  		rope1.display();
	    rope2.display();
  		rope3.display();
		rope4.display();
		rope5.display();
  
  		
 	 	ball1.display();
  		ball2.display();
  		ball3.display();
  		ball4.display();
  		ball5.display();

		  if(keyCode===UP_ARROW){

			Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-500,y:500}); 
		  }
  
  	drawSprites();
 
}



