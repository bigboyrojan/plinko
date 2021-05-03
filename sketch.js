const Engine = Matter.Engine,
 World = Matter.World,
 Events = Matter.Events,
 Bodies = Matter.Bodies;
 var particle;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight=300;
var score =0;
var base;
var gameState = 1;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  base = new Ground(width/2,height,width,20);

   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    
    

    
}
 


function draw() {
  background("black");
  textSize(20)
 text("Score : "+score,20,30);

 textSize(20);
 text("500",100,750);
 textSize(20);
 text("1000",15,750);
 textSize(20);
 text("250",185,750);
 textSize(20);
 text("100",260,750);
 textSize(20);
 text("50",350,750);
 textSize(20);
 text("50",425,750);
 textSize(20);
 text("100",500,750);
 textSize(20);
 text("250",585,750);
 textSize(20);
 text("500",660,750);
 textSize(20);
 text("1000",740,750);
  Engine.update(engine);
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }


   if(particle!=null){
    particle.display();

    if(particle.body.position.y>670){
    
    if(particle.body.position.x<800){
    score = score+1000;
    particle = null;
    if(turn>= 5) gameState = "end";
    }
    }
    }

    if(particle!=null){
      particle.display();
  
      if(particle.body.position.y>0){
      
      if(particle.body.position.x<100){
      score = score+1000;
      particle = null;
      if(turn>= 5) gameState = "end";
      }
      }
      }

      if(particle!=null){
        particle.display();
    
        if(particle.body.position.y>670){
        
        if(particle.body.position.x<800){
        score = score+1000;
        particle = null;
        if(turn>= 5) gameState = "end";
        }
        }
        }
 
  for (var j = 0; j < particles.length; j++) {
     particles[j].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}

function mousePressed(){
if(gameState !== "end"){
turn++;
particle = new Particle(mouseX,10,10,10);
}
}