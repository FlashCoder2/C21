class Tree{

    constructor(x,y,r){

        this.image = loadImage("sprites/tree.png");

        this.x=x;
		this.y=y;
		this.r=r;

        this.body=Bodies.circle(this.x, this.y, (this.r)/2)
		World.add(world, this.body);
    }


	display(){
			
			var treePos=this.body.position;
			push()
			translate(treePos.x, treePos.y);
			rectMode(CENTER)
			strokeWeight(4);
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r, this.r)
			ellipse(0,0,this.r, this.r);
            pop()

    }
            
}