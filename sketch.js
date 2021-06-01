const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Events = Matter.Events;
var person
var umbrella
var raindrop
var lightning
var engine
var world
var thunderbolt
var personimage
var background
var thunderboltimage1, thunderboltimage2, thunderboltimage3, thunderboltimage4
var raindrops = []

function preload(){
    thunderboltimage1 = loadImage("images/thunderbolt/1.png")
    thunderboltimage2 = loadImage("images/thunderbolt/2.png")
    thunderboltimage3 = loadImage("images/thunderbolt/3.png")
    thunderboltimage4 = loadImage("images/thunderbolt/4.png")
    
}

function setup(){
    createCanvas(600,1000)
    engine = Engine.create()
    world = engine.world;
    thunderbolt = createSprite(-110,-510)
    thunderbolt.scale = 0.4
    umbrella = new umbrella1(300,600,300)
   
    
}

function draw(){
    background(0,0,0)
    thunderbolt.addImage("hi", thunderboltimage1)
    Engine.update(engine)
    if(frameCount%2===0){
        raindrops.push(new rain(random(50, 500),3,3));
    }
    for (var j = 0; j < raindrops.length; j++) {
   
        raindrops[j].display();
    }
     umbrella.display()
     drawSprites()
}   

