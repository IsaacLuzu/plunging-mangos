class tree{
constructor(x,y){

    this.x=x;
    this.y=y;
    this.treeWidth=200;
    this.treeHeight=100;
    this.treeThickness=20;
    this.angle=0;	
    this.image = loadImage ("images/tree.png")

    this.bottomBody=Bodies.ellipse(this.x, this.y, this.treeWidth, this.treeThickness, {isStatic:true})
    this.leftTreeBody=Bodies.ellipse(this.x-this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:true})
		Matter.Body.setAngle(this.leftWallBody, this.angle);
		
		this.rightTreeBody=Bodies.ellipse(this.x+this.treeWidth/2, this.y-this.treeHeight/2, this.treeThickness, this.treeHeight, {isStatic:true})
		Matter.Body.setAngle(this.rightTreeBody, -1*this.angle);
		World.add(world, this.bottomBody)
		World.add(world, this.leftTreeBody)
		World.add(world, this.rightTreeBody);

}
dilspay (){



}









}