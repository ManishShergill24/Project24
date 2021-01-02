class dustbin{
constructor(x,y,width,height){

var options={

'isStatic':true

}

this.body = Bodies.rectangle(x,y,50,20,options);
this.body = Bodies.rectangle(x-65,y-15,20,50,options);
this.body = Bodies.rectangle(x+65,y-15,20,50,options);
this.width = width;
this.height = height;
World.add(world,this.body);

}

display(){

rectMode(CENTER);
fill("white");
rect(this.body.position.x,this.body.position.y,this.width,this.height);
rect(this.body.position.x-65,this.body.position.y-15,20,50);
rect(this.body.position.x+65,this.body.position.y-15,20,50)


}

}