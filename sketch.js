var canvas,edges;
var music;
var surface1,surface2,surface3,surface4;
var box;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    

    surface1=createSprite(690,570,180,30);
    surface1.shapeColor="green"
    surface2=createSprite(500,570,180,30);
    surface2.shapeColor="red"
    surface3=createSprite(310,570,180,30);
    surface3.shapeColor="orange"
    surface4=createSprite(120,570,180,30);
    surface4.shapeColor="blue"


    box=createSprite(random(200,750),530,30,30);
    box.shapeColor="white"
    box.velocityX=3
    box.velocityY=-4
   

}

function draw() {
    background(rgb(169,169,169));
    edges=createEdgeSprites();
    box.bounceOff(edges)
    

    if(surface1.isTouching(box)&& box.bounceOff(surface1)){
        box.shapeColor="green"
        music.play();
    }
    if(surface2.isTouching(box)&& box.bounceOff(surface2)){
        box.shapeColor="red"
        music.play();
    }

    if(surface3.isTouching(box)&& box.bounceOff(surface3)){
        box.shapeColor=rgb(255,128,0);
        box.velocityX=0
        box.velocityY=0
        music.stop();
    }
    if(surface4.isTouching(box)&& box.bounceOff(surface4)){
        box.shapeColor="blue"
        music.play();
    }


    
    drawSprites();
}
