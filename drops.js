class createDrops{
    constructor(x,y){
        var options={
            'friction':0.1,
            'density':1.0
        }
        this.r=5
        this.body=Bodies.circle(x,y,5,options);
        World.add(world,this.body)
    }

        update(){
        if(this.body.position.y>height){
            Matter.Body.setPosition(this.body,{x:random(0,400),y:random(0,650)})
       }
    }
    display() {
    
        noStroke();
        fill("blue");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.x,this.r,this.r);
       
    }
}