class Dustbin {
    constructor(x,y,width,height) {
        var options = {
            isStatic:true,
            restitution:0.8,
            friction:1.0,
            density:1.8
        }
        //this.body = Bodies.rectangle(x,y,width,height,options);
        this.bodyleft = Bodies.rectangle(650,250,10,200,options);
        this.bodyright = Bodies.rectangle(800,250,10,200,options);
        this.bodybase = Bodies.rectangle(725,250,10,10,options);
        this.width = width;
        this.height = height;
        this.image = loadImage("pictures/dustbin.png");
       // World.add(world, this.body);
        World.add(world, this.bodyleft);
        World.add(world, this.bodyright);
        World.add(world, this.bodybase);
    }
    display() {
       // var pos =this.body.position;
        rectMode(CENTER);
        fill("white");
        //rect(pos.x, pos.y, this.width, this.height);
        imageMode(CENTER);
        image(this.image,this.bodybase.position.x, this.bodybase.position.y,150,200);

        rectMode(CENTER);
        fill("white");
        rect(this.bodyleft.position.x, this.bodyleft.position.y, this.width, this.height);

        rectMode(CENTER);
        fill("white");
        rect(this.bodyright.position.x, this.bodyright.position.y, this.width, this.height);



    }
}