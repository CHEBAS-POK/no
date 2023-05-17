const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;

let engine;
let world;
let ground;
var cuerda;
var guanabana;
var guanabana_con;

function setup() 
{
  createCanvas(500,700);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200, 690, 600, 20);
  cuerda = new Rope(6, {x:245, y:30});   
  
  var guanabana_options = {
    density: 0.001
  }
  guanabana = Bodies.circle(300, 300, 15, guanabana_options);
  Matter.Composite.add(cuerda.body, guanabana);

  guanabana_con = new Link(cuerda, guanabana);
  rectMode(CENTER);
  ellipseMode(RADIUS);
  textSize(50)
}

function draw() 
{
  background(51);
  Engine.update(engine);

 ground.show();
 cuerda.show();
 ellipse(guanabana.position.x, guanabana.position.y, 15, 15);
   
}




