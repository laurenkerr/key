class Xlaser {
  constructor(x1,y1,x2,y2,timer){
    this.x1 =x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.on = true
    this.timer = timer
  }
    flipflop(){
    if(frameCount%this.timer === 0){
      this.on = !this.on
      
  }
return this
}

  display(){
    if(this.on === true){
    push()
    strokeWeight(9)
    stroke(241,134,52,100)
    line(this.x1,this.y1,this.x2,this.y2)
    strokeWeight(3)
    stroke(241,134,52)
    line(this.x1,this.y1,this.x2,this.y2)
    pop()
    }
    return this
  }
  damage(){
    if(this.on){
    if(dist(player.pos.x,player.pos.y,player.pos.x,this.y1)<20){
    player.pos.y = this.y1 +100
    player.selfEsteem -= 20
    zap.setVolume(0.4);
    zap.play();
    }
    }
    return this
  }
  
  render(){
   return this.display().damage().flipflop()
  }
}



class Ylaser {
  constructor(x1,y1,x2,y2,timer){
    this.x1 =x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.on = true
    this.timer = timer
  }
  flipflop(){
    if(frameCount%this.timer === 0){
      this.on = !this.on
      
  }
return this
}
  display(){
    if(this.on === true){
    push()
    strokeWeight(9)
    stroke(241,134,52,100)
    line(this.x1,this.y1,this.x2,this.y2)
    strokeWeight(3)
    stroke(241,134,52)
    line(this.x1,this.y1,this.x2,this.y2)
    pop()
    }
    return this
  
  }
    damage(){
    if(this.on){
    if(dist(player.pos.x,player.pos.y,this.x1,player.pos.y)<20){
    player.pos.x = this.x1 +100
    player.selfEsteem -= 20
    zap.setVolume(0.4);
    zap.play();
    }
    }
    return this
    }
  render(){
   return this.display().flipflop().damage()
  }
}
