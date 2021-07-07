
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies; 
const Body = Matter.Body;

let engine;
let world;
var ball, ground;

function setup()
{
  createCanvas(400,400);
  engine = Engine.create();
  world = engine.world;

  var ball_options ={
    restitution:1.0,
    friction: 0.01
  }
  ball = Bodies.circle(100, 10, 40, ball_options);
  World.add(world, ball);
}

function draw() 
{
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x, ball.position.y, 40);

 
}

