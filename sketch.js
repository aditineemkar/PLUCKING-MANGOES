
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;	
  stone = new Stone(500,540,20,20);
	mango1 = new Mangoes(500,-300,30);
	mango2 = new Mangoes(350,-400,30);
	mango3 = new Mangoes(290,-280,30);
	mango4 = new Mangoes(590,-290,30);
	mango5 = new Mangoes(390,-310,30);
	mango6 = new Mangoes(500,-400,30);
  tree = new Tree(500,610,600,600);
  ground = new Ground(1110,160,40000000,20);
	boy = new Boy(100,540,200,200);
  chain = new Chain(stone.body,{x:-50, y:-100});

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background("white");
  text("PRESS SPACE TO GET A SECOND CHANCE TO PLAY", 50,50);
  tree.display();
  boy.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  stone.display();
  chain.display();
  ground.display();

  detectCollision(stone, mango1);
  detectCollision(stone, mango2);
  detectCollision(stone, mango3);
  detectCollision(stone, mango4);
  detectCollision(stone, mango5);
  detectCollision(stone, mango6);
  // detectCollision(stone, mango7);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX, y:mouseY});
}
function mouseReleased(){
  chain.fly();
}
function keyPressed(){
if(keyCode === 32){
  Matter.Body.setPosition(stone.body,{x:235, y:420});
  chain.attach(stone.body);
}
}
function detectCollision(lstone,lmango){
stoneBodyPosition = lstone.body.position;
mangoBodyPosition = lmango.body.position;

var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y);
if(distance <= lmango.r + lstone.r){
  Matter.Body.setStatic(lmango.body, false);
}

}

