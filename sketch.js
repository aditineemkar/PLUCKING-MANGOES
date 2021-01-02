
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;
var boy, stone, mango1, mango2, mango3, mango4, mango5, mango6, mango7, mango8, mango9, ground, tree;
var score,tries;

function preload()
{
	boyImage = loadImage("sprites/boy.png");
	treeImage = loadImage("sprites/tree.png");
}

function setup() {
	createCanvas(1520, 780);

 score =0;
 tries = 0;
	engine = Engine.create();
	world = engine.world;

	boy = createSprite(350,660,20,20);
	boy.addImage(boyImage);
	boy.scale = 0.15;
	tree = createSprite(1200,420,600,600);
	tree.addImage(treeImage);
	tree.scale = 0.5;

	ground = new Ground(750,760,width,20);
	stone = new Stone(280,575,60);
	slingshot = new SlingShot(stone.body, {x:280 , y:575});
	mango1 = new Mango(1300,300,60);
	mango2 = new Mango(1180,230,60);
	mango3 = new Mango(1340,180,60);
	mango4 = new Mango(1380,390,60);
	mango5 = new Mango(1000,320,60);
	mango6 = new Mango(1190,340,60);
	mango7 = new Mango(1250,170,60);
	mango8 = new Mango(1420,310,60);
	mango9 = new Mango(1080,340,60);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(219,219,219);
  textSize(40);
  text("Press Space to get a Second Chance to Play!!!",100,100)


 if(tries===8){
    textSize(60);
    text("You lose!",570,600);
  }

    text("Score: "+score,550,150);
    text("Attempts: "+tries,850,150);

  

drawSprites();
  ground.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();
  mango9.display();
  slingshot.display();
  stone.display();

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);

 


}

function mouseDragged(){
    Matter.Body.setPosition(stone.body,{x: mouseX, y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
    tries = tries+1
}

function detectCollision(lstone, lmango)
{
 mangoBodyPosition = lmango.body.position
 stoneBodyPosition = lstone.body.position
  
 


  var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y,mangoBodyPosition.x, mangoBodyPosition.y)
  
  if(distance<=lmango.r+lstone.r)
  {
     Matter.Body.setStatic(lmango.body, false);
     score++
  }
 

}

function keyPressed(){
	if(keyCode === 32) {
		Matter.Body.setPosition(stone.body, {x:280, y:575})
		slingshot.attach(stone.body);
	}
}
