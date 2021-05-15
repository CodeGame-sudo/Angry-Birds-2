const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var world;
var engine;
var box1;
var ground2;
var box2;
var stick1;
var pig1;
var box3;
var box4;
var pig2;
var stick2;
var box5;
var stick3;
var stick4;
var bird1;
function setup() {

  createCanvas(1200,400);
  engine=Engine.create();
  world=engine.world;
  box1=new box(700,320,70,70)
  ground2=new ground(600,height,1200,30)
  box2=new box(920,320,70,70)
  stick1= new sticks(810,260,300,PI/2)
  pig1= new pigs(810,350)
  box3= new box(700,240,70,70)
  box4= new box(920,240,70,70)
  pig2= new pigs(810,220)
  stick2= new sticks(810,180,300,PI/2)
  box5= new box(810,160,70,70)
  stick3= new sticks(770,120,150,PI/7)
  stick4= new sticks(870,120,150,-PI/7)
  bird1= new birds(100,100)


}

function draw() {
  background(0); 
  Engine.update(engine); 
  ground2.display()
  box1.display();
  box2.display();
  stick1.display();
  pig1.display();
  box3.display();
  box4.display();
  pig2.display();
  stick2.display();
  box5.display();
  stick3.display();
  stick4.display();
  bird1.display();
}