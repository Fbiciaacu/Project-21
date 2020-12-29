var canvas;
var music;
var box1,box2,box3,box4;
var movingbox;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    box1 = createSprite(100,600,175,50);
    box2 = createSprite(300,600,175,50);
    box3 = createSprite(500,600,175,50);
    box4 = createSprite(700,600,175,50);

    //create box sprite and give velocity
    movingbox = createSprite(random(20,750),300,30,30);


    box1.shapeColor = "blue";
    box2.shapeColor = "yellow";
    box3.shapeColor = "red";
    box4.shapeColor = "green";

    movingbox.shapeColor = "white";
    movingbox.velocityX = 3;
    movingbox.velocityY = 9;
}

function draw() {
    background(0,0,0);
    
    //create edgeSprite
    createEdgeSprites();
    
    /* When this line is enabled the code does not render 
    and throws any error about "edges" being undefined
    movingbox.bounceOff(edges);
    */
  
    //add condition to check if box touching surface and make it box
    if(box1.isTouching(movingbox) && movingbox.bounceOff(box1)){
        movingbox.shapeColor = "blue";
    }
    if(box2.isTouching(movingbox) && movingbox.bounceOff(box2)){
          movingbox.shapeColor = "yellow";
    }
    if(box3.isTouching(movingbox) && movingbox.bounceOff(box3)){
          movingbox.shapeColor = "red";
    }
    if(box4.isTouching(movingbox) && movingbox.bounceOff(box4)){
          movingbox.shapeColor = "green";
    }
  
    drawSprites();
}
