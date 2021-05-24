class Hammer
{
    constructor(x,y)
    {
        var option={
            'restitution' : 0.5,
            'friction': 1,
            'density': 2
        }
        this.body=Bodies.rectangle(x,y,option);
        World.add(world,this.body);
        this.width=100;
        this.height=20;
    }
    display()
    {
        var pos=this.body.position;
        var angle=this.body.angle;
        pos.x = mouseX;
        pos.y = mouseY;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("yellow");
        rect(0,0,this.width,this.height);
        pop();     
    }

}
