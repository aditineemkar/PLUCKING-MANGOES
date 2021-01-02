class Mango {
    constructor(x, y, radius) {
      
      var options = {isStatic: true};
      this.body = Bodies.circle(x, y, radius, options);
      
      this.image = loadImage('mango.png');
      World.add(world, this.body);

    }

    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image, pos.x, pos.y, this.width, this.height);
    }

  };
