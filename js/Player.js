class Player {
  constructor(pos) {
    this.pos = createVector(pos.x, pos.y);
    this.interact = false;
    this.option1 = false;
    this.option2 = false;
    this.idx = 0;
    this.anim = [];
    this.state = 'idle';
    this.selfEsteem = 60;
    this.loc = room_1
    this.pickedUp = 0
    
    // get and store sprites from sprite sheet
    let frames = spriteData.frames;
    for (let i = 0; i < frames.length; i++) {
      let data = frames[i].position;
      this.anim[i] = spriteSheet.get(data.x, data.y, data.w, data.h);
    }
  }

  update() {
    if(dialogue===false){
    switch (this.state) {
      case 'idle':
        // this.idx = 0;
        break;

      case 'move-left':
        this.idx >= 7 ? this.idx = 4 : this.idx++;
        break;

      case 'move-right':
        this.idx >= 11 ? this.idx = 8 : this.idx++;
        break;

      case 'move-up':
        this.idx >= 15 ? this.idx = 12 : this.idx++;
        break;

      case 'move-down':
        this.idx >= 3 ? this.idx = 0 : this.idx++;
        break;
    }
    }
    return this;
  }

  move() {
    if(dialogue===false){
    switch (this.state) {
      case 'idle':
        break;

      case 'move-left':
        if(tilemap[floor(player.pos.y/40)][floor(player.pos.x/40)-1] === 1 || player.loc === room_2 && player.pos.x>30){
        this.pos.x -= 13;}
        break;

      case 'move-right':
        if(tilemap[floor(player.pos.y/40)][floor(player.pos.x/40)+1] === 1 || player.loc === room_2 && player.pos.x< width - 30){
        this.pos.x += 13;}
        break;

      case 'move-up':
        if(tilemap[floor(player.pos.y/40)-1][floor(player.pos.x/40)]===1 || player.loc===room_2 && player.pos.y > 60){
        this.pos.y -= 13;}
        break;

      case 'move-down':
        if(tilemap[floor(player.pos.y/40)+1][floor(player.pos.x/40)]===1||player.loc===room_2 && player.pos.y < height - 60){
        this.pos.y += 13;}
        break;
    }
    }
    return this;
  }

  wrap() {
    this.pos.x < -30 ? this.pos.x = width :
      this.pos.x > width + 30 ? this.pos.x = 0 :
      this.pos.y < -30 ? this.pos.y = height :
      this.pos.y > height + 30 ? this.pos.y = 0 :
      null;

    return this;
  }


  display() {
    image(this.anim[this.idx], this.pos.x, this.pos.y);
      fill(0,0,0)
      rect(50,40,3.365*player.selfEsteem,20,20)
      fill(172, 230, 232)
      rect(50,40,3.365*player.selfEsteem,20,20)

    return this;
  }

  render() {
    return this.display().move().update()//.wrap();
  }
}