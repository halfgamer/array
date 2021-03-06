class Bird extends BaseClass {
  constructor(x,y){
    super(x,y,50,50);
    this.image = loadImage("sprites/bird.png");
    this.smaokeimg=loadImage("sprites/smoke.png")
    this.birdpath=[];
  
  }


  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;

    super.display();
    if(this.body.velocity.x>5 && this.body.position.x>200){
      var pos = [this.body.position.x,this.body.position.y]
      this.birdpath.push(pos);
    }
     
      //console.log(this.birdpath)
      for (var i =0; i<this.birdpath.length;i++){
        image(this.smaokeimg,this.birdpath[i][0],this.birdpath[i][1])
      }
}

}
