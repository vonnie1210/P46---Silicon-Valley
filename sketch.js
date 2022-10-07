var bgImg, blueOrbImg, ghostImg, ghostCatcherImg;
var catcher;
var ghost;
var bg;
var obstaclesGroup, rock;
var orb;
var invisibleGround;

var gameOver, restart;

function preload(){
    bgImg = loadImage("./assets/background.png");
    blueOrbImg = loadImage("./assets/blueOrb.png");
    rock = loadImage("./assets/rock.png");
    ghostImg = loadImage("./assets/ghost.PNG");
    ghostCatcherImg = loadImage("./assets/ghostCatching.PNG");
}

function setup() {
 createCanvas(1000,600);
 bg = createSprite(700,100);
 bg.addImage("bgImg", bgImg);
 bg.scale = 0.9;
 bg.x = width/2


 ghost = createSprite(850,450,20,20);
 ghost.scale = 0.2;
 ghost.addImage(ghostImg);

 catcher = createSprite(150,450,20,20);
 catcher.scale = 0.13;
 catcher.addImage(ghostCatcherImg);
 catcher.setCollider('circle',0,0,350)


 invisibleGround = createSprite(width/2,height-10,width,125);  
 invisibleGround.shapeColor = "#000000";

 obstaclesGroup = new Group();


}

function draw() {
    background(220);
    text(mouseX+","+mouseY,mouseX,mouseY);

    console.log(catcher.y)
    if(keyDown("space")&& catcher.y>270) {
      catcher.velocityY = -16;
    }
  
    catcher.velocityY = catcher.velocityY + 0.8
    spawnObstacles();

    catcher.collide(invisibleGround);


    bg.velocityX = -2

    if (bg.x < 0){
        bg.x = bg.width/2;
      }
    
    drawSprites();
}

function spawnObstacles() {
    if(frameCount % 120 === 0) {
  
      var obstacle = createSprite(camera.position.x+400,330,40,40);
      obstacle.setCollider("rectangle",0,0,200,200)
      obstacle.addImage(obstacle1);
      obstacle.velocityX = -(6 + 3*score/100)
      obstacle.scale = 0.15;      
  
      obstacle.lifetime = 400;
      obstaclesGroup.add(rock);
     
      
    }
  }