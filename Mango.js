class Mango {
    constructor(x,y,r) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0,
          isStatic:true
      }
      this.x = x;
      this.y = y;
      this.r = r;
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("mango.png")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
      strokeWeight(4);
      stroke("green");
      fill("yellow");
      imageMode(CENTER);
      ellipseMode(CENTER);
	    image(this.image, 0,0,this.r*2, this.r*2)
      pop();
    }
  }