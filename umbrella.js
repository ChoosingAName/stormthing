class umbrella1 {
    constructor(x,y,r)
      {
          var options = { 
        isStatic : true
      };
          this.x=x;
          this.y=y;
          this.r=r;
          this.image=loadImage("images/Walking Frame/walking_1.png")
          this.body=Bodies.circle(this.x, this.y, (this.r)/2, options)
          World.add(world, this.body);
  
      }
      display()
      {
              
              var Pos=this.body.position;		
              push()
              translate(Pos.x, Pos.y-100);
              rectMode(CENTER)
              fill(255,0,255)
              imageMode(CENTER);
              image(this.image, 0,0,this.r, this.r)
           
  


};
}