var bullet, wall;
var speed, weight;
var thickness;

function setup() {
  createCanvas(800,400);

  thickness = random(22,83);

  bullet = createSprite(10, 200, 50, 15);

  bullet.shapeColor = "white";

  speed = random(223,321); //Math.round isn't required
  weight = random(30,52); //Math.round isn't required

  wall = createSprite(800,200,thickness,width/2);
  wall.shapeColor = "blue";

  //console.log(damage);

  bullet.velocityX = speed; //added velocity


}

function draw() {
  background(0,0,0);  
  drawSprites();

  //bullet.collide(wall);

  if(hasCollided(bullet, wall))
  {
    bullet.velocityX = 0;

    var damage = 0.5*weight*speed*speed/thickness*thickness*thickness;

    if(damage > 10)
    {
      bullet.shapeColor = "red";
    }
    else if(damage < 10)
    {
      bullet.shapeColor = "green";
    }
  }

}

function hasCollided(lbullet,lwall)
{ 
  bulletRightEdge = lbullet.x  + lbullet.width;
  wallLeftEdge = lwall.x;

  if(bulletRightEdge >= wallLeftEdge)
  {
    return true
  }

  return false

}