class Stone
{
    constructor()
    {
        var option={
            'restitution' : 0.8,
            'friction': 0.9,
            'density': 12
        }
        this.body=Bodies.rectangle(option);
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
        rectMode(CENTER);
        fill("black");
        rect(700,640,this.width,this.height);
        pop();     
    }

}
