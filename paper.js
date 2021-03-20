class paperObject {
    constructor(x,y,radius) {
      var options = {
          isStatic: false
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("pink");
      circle(pos.x, pos.y, this.radius);
    }
  };

  function keyPressed(){
    if (keyCode === UP_ARROW){
      Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
    }
  }