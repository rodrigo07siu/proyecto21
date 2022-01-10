var PLAY = 1;
var END = 0;
var gameState = PLAY;

var sonido;
var pelota;
var pelotaIMG;
var portal;
var portalIMG;
var restart;
var restartIMG;

var obstaculo1IMG;

var obstaculo2IMG;
var invisibleGround;
var obstaclsGroup, obstaculo1, obstaculo2;
function preload(){
pelotaIMG = loadImage("pelota.png");
obstaculo2 = loadImage("portal.png");
obstaculo1IMG = loadImage("obstaculo.png");
fondoIMG = loadImage("fondo.png");
sonido = loadSound("sound.mp3");
restartIMG = loadImage("restart.png");
}

function setup() {
createCanvas(400,400);

restart=createSprite(200,200);
restart.addImage(restartIMG);
restart.scale=0.5;


fondo=createSprite(200,200);
fondo.addImage(fondoIMG);
fondo.velocityX = 4;

pelota = createSprite(70,350,20,20);
pelota.addImage(pelotaIMG);
pelota.scale=0.3

invisibleGround = createSprite(200,400,400,10);
  invisibleGround.visible =false;
pelota.setCollider("rectangle",0,0,pelota.width,pelota.height);
  pelota.debug = false;

}

function draw() {

  background("blue");

  if(gameState === PLAY){

if (keyDown("space")){

}

if (keyDown("space")&& pelota.y >=350){
    pelota.velocityY = -12;
}

pelota.velocityY = pelota.velocityY + 0.8;
pelota.collide(invisibleGround);



drawSprites();
} 
}

spawnObstacles();


function spawnObstacles(){
    
      var random = Math.round(random(1,2)); 
      
       //generar obstáculos al azar
       var random = Math.round(random(1,2));
       switch(random) {
         case 1: obstaculo1.addImage(obstaculo1);
                 break;
         case 2: obstaculo2.addImage(obstaculo2);
                 break;        
         default: break;
       }
    }

    obstaculo1.scale = 0.5;
    obstaculo.lifetime = 300;
 

