class Sand
{
    constructor(x,y)
    {
        var option={
            isStatic:true,
            'restitution' : 1.3,
            'friction': 5,
            'density': 1
        }
        this.body=Bodies.circle(x,y,10/2,option);
        World.add(world,this.body);
        this.width=100;
        this.height=100;
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        fill ("Brown");
        rectMode(CENTER);
        ellipse(0,0,20,20);
        pop();     
    }

}
