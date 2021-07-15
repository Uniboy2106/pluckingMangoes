class Launcher{
    constructor(bodyAObject, pointB){
        var options = {
            bodyA: bodyAObject,
            pointB: pointB,
            stiffness: 0.004,
            length: 10
        }
        this.pointB = pointB;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }
    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(){
        this.launcher.bodyA = stoneObj.body;
    }
}