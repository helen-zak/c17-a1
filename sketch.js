var box1, box2, box3
function setup() 
{
  createCanvas(400, 400);

  box1 = new Box (100, 50, 10, 40, 2)
  box2 = new Box (300, 10, 60, 25, 3)
  box3 = new Box (30, 70, 10, 80, 0.5)
}


function draw() 
{
  background(220);
  fill ("green")
  box1.show()
  box1.move()
  box2.show()
  box2.move()
  box3.show()
  box3.move()
}

