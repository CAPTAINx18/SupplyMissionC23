var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody, ground;
var Block1Sprite, Block2Sprite, Block3Sprite;
var Block1, Block2, Block3;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);
	

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	Block1Sprite = createSprite(400, 650, 200, 20);
	Block1Sprite.shapeColor = color("red");

	Block2Sprite = createSprite(510, 610, 20, 100);
	Block2Sprite.shapeColor = color("red");

	Block3Sprite = createSprite(310, 610, 20, 100);
	Block3Sprite.shapeColor = color("red");


	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor = color(255);


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2, 200, 5, {restitution:0.55, isStatic:true} );
	World.add(world, packageBody);
	
	Block1 = Bodies.rectangle(400, 625, width, 10 , {isStatic:true} );
	World.add(world, Block1);

	Block2 = Bodies.rectangle(535, 610, 20, 130 , {isStatic:true} );
	World.add(world, Block2);

	Block3 = Bodies.rectangle(335, 610, 20, 130 , {isStatic:true} );
	World.add(world, Block3);

	ground = Bodies.rectangle(width/2, 650, width, 10, {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
	
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
  keyPressed();
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
    // Look at the hints in the document and understand how to make the package body fall only on press of the Down arrow key.
    Matter.Body.setStatic(packageBody, false);
    
  }
}



