class Ball
{
	constructor(x,y,radius)
	{
		var options={
			isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:2		
			}
		this.x=x;
		this.y=y;
		this.radius=radius;
		
		this.body=Bodies.circle(x, y, radius, options);
 		World.add(world, this.body);

	}
	display()
	{
			
		var pos = this.body.position;
       
        push();
        translate(pos.x, pos.y);
       
        ellipseMode(CENTER);
		fill("red");
        ellipse(0,0,this.radius,this.radius);
        pop();
			
	}

}