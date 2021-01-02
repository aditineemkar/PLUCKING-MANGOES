class Stone{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			friction:1,
			density:1.2,
			restitution : 0.5
			}
		this.x = x;
		this.y = y;
		this.r = r
		this.image=loadImage("stone.png");
		this.body=Bodies.circle(this.x, this.y, this.r/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var pos=this.body.position;		
			push()
			translate(pos.x,pos.y);
			fill(255,0,255)
			imageMode(CENTER);
			ellipseMode(RADIUS)
			image(this.image, 0, 0, this.r*2, this.r*2)
			pop()
			
	}

}