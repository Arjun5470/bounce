var b1


function setup() 
{
  createCanvas(400, 400);
  b1=new Box(200,200,50,50,2,4);
}

function draw() 
{
  background(220);
 b1.show();
 b1.move();
 b1.bounce();
}

