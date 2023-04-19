var player;
var bgImg;
var plyrImg;



function preload() {
bgImg = loadImage("graveyard.jpg")
plyrImg = loadImage("player.png")

}

function setup() {
createCanvas(900, 700)
player = createSprite(400, 500, 100, 100)
player.addImage(plyrImg)
player.scale = 0.8
}

function draw() {
background(bgImg)
if(keyDown(RIGHT_ARROW)&& player.x<800) {
  player.x = player.x+5

}

if(keyDown(LEFT_ARROW)&& player.x>100) {
  player.x = player.x-5
}

if(keyDown(UP_ARROW)&& player.y>400) {
  player.y = player.y-5
}

if(keyDown(DOWN_ARROW)&& player.y<600) {
  player.y = player.y+5
}
drawSprites()
}