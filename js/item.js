class item{
  constructor(img,pos){
    this.pos = createVector(pos.x, pos.y);
    this.img = img
    this.exists = true
  }
  display(){
    if(this.exists === true){
      image(this.img,this.pos.x,this.pos.y) 
      if(player.interact === true && dist(player.pos.x,player.pos.y,this.pos.x,this.pos.y)<80){
        player.pickedUp ++
        this.exists = false
        pickUp.setVolume(0.4);
        pickUp.play();
         }
    }
    
    return this
  }
}