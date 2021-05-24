class Rubber
{
    constructor()
    {
        var option={
            
            'restitution' : 0.3,
            'friction': 5,
            'density': 1
        }
        this.body=Bodies.circle(350,655,35/2,option);
        World.add(world,this.body);
        this.width=100;
        this.height=100;
    }
    display()
    {
        var rubberpos=this.body.position;
        var angle=this.body.angle;
        push();
        translate(rubberpos.x,rubberpos.y);
        rotate(angle);
        fill ("Blue");
        rectMode(CENTER);
        ellipse(0,0,70,70);
        pop();     
    }

}
