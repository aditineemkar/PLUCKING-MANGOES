class Line {
    constructor(body1, body2){
        var options = {
            bodyA : body1,
            bodyB : body2,
            length : 100,
            stiffness : 0
        }

        this.body = Matter.Constraint.create(options);

        World.add(world, this.body);
    }

    display() {

        var pointA = this.body.bodyA.position;
        var pointB = this.body.bodyB.position;
        push ();
        strokeWeight(5);
        stroke("black");
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop ();
    }
}
