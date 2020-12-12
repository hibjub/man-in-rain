const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var rain = [];

var person;

var img1,img2,img3,img4;

function preload(){
    img1 = loadImage("thunderbolt/1.png")
    img2 = loadImage("thunderbolt/2.png")
    img3 = loadImage("thunderbolt/3.png")
    img4 = loadImage("thunderbolt/4.png")
}

function setup(){
var canvas = createCanvas(500,800); 
engine = Engine.create();
world = engine.world;
    
person = new Umbrella(250,630,150);

}

function draw(){
background(0);

Engine.update(engine);

if(frameCount%0.5 === 0) {
    rain.push(new Rain(random(10,490),-10,5));
}

for (var j = 0; j < rain.length; j++) {
    rain[j].display();
}

if (frameCount%90 === 0) {}

person.display();

thunderbolt();

drawSprites();
    
}   


function thunderbolt() {
  if (frameCount% 90 === 0) {
      var bolt = createSprite(250,20,20,50);

      var rand = Math.round(random(1,4));
      switch(rand) {
          case 1: bolt.addImage(img1);
          break
          case 2: bolt.addImage(img2);
          break
          case 3: bolt.addImage(img3);
          break
          case 4: bolt.addImage(img4);
          default: break;
      }

      bolt.lifetime = 12;
      bolt.scale = 0.5;
  }
}

