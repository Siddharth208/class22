const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,object;
function setup() {
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  var options={
    isStatic:true
  }
  object=Bodies.rectangle(200,390,50,50,options);
  World.add(world,object);
  console.log(object);
  console.log(object.mass);
  console.log(object.position.x);
  console.log(object.position.y);

  var op={
    restitution:1
  }
  ball=Bodies.circle(200,200,15,op);
  World.add(world,ball);

}

function draw() {
  background(0);  
  Engine.update(engine);
  rectMode(CENTER);
  rect(object.position.x,object.position.y,400,10);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,15,15);
  drawSprites();
}