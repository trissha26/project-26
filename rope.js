class Rope {
    constructor(body1,body2,offSetx,offSety){
        this.offSetx = offSetx;
        this.offSety = offSety;
        var options = {
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.offSetx, y:this.offSety}
        
        }

        this.rope = Constraint.create(options);
        World.add(world, this,rope);        
    }

    display(){
      var pointA = this.rope.bodyA.position;
      var pointB = this.rope.bodyB.position;

      var pointC = pointB.x+this.offSetx;
      var pointD = pointB.y+this.offSety;
      strokeWeight(3);
      line(pointA.x, pointA.y, pointC, pointD);
    }
}
