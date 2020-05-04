let spriteSheet,
  spriteData,
  player,
  currentText;
let startText;
let test = false;
let keyIsDown = false;
let fr=12
let time
let timer = 80
let music, step, zap, pickUp, levelUp, levelDown, trumpet;
let isOver= false;

function preload() {
  room_1_bg = loadImage('img/room1_bg.png');
  room_2_bg = loadImage('img/room2_bg.png');
  end1 = loadImage('img/end1.png');
  end2 = loadImage('img/end2.png');
  stats = loadImage('img/stats.png');
  itemSprite = loadImage('img/itemsSprite.png');
  spriteSheet = loadImage('img/CatSpriteSheet.png');
  spriteData = loadJSON('json/catsprite.json');
 
  rm1_startText = loadImage('img/rm1_start.png');
  rm2_startText = loadImage('img/rm2_start.png');
  
//Audio
  soundFormats('mp3', 'ogg');
  step = loadSound('aud/step.mp3');
  zap = loadSound('aud/zap.mp3');
  pickUp = loadSound('aud/pickUp.mp3');
  levelUp = loadSound('aud/levelUp.mp3');
  levelDown = loadSound('aud/levelDown.mp3');
  trumpet = loadSound('aud/trumpet.mp3');
}

function setup() {
  music = createAudio('aud/gameMusic.mp3');
  music.loop(); 

  createCanvas(1280, 720);
  magGlass = itemSprite.get(0,0,140,100)
  notePad = itemSprite.get(140,0,140,100)
  watch = itemSprite.get(280,0,140,100)
  binocs = itemSprite.get(560,0,140,100)
  listeningGun = itemSprite.get(420,0,140,100)
  walkie = itemSprite.get(0,100,140,130)
  shades = itemSprite.get(140,115,140,130)
  headphones = itemSprite.get(280,115,120,130)
  gun = itemSprite.get(410,115,140,130)
 orangeStat = stats.get(0,710,1280,200)
 peachStat = stats.get(0,480,1280,230)
 greenStat = stats.get(0,1100,1280,230)
 blueStat = stats.get(0,920,1280,230)
 //rm1_startText = stats.get(0,240,1280,230);
 //rm2_startText = stats.get(0,0,1280,230);
  player = new Player(createVector(width*0.5,height*0.2));
  magGlass = new item(magGlass,createVector(350,400))
  walkie = new item(walkie,createVector(550,120))
  notePad = new item(notePad,createVector(550,550))
  watch = new item(watch,createVector(750,550))
  listeningGun = new item(listeningGun,createVector(750,280))
  binocs = new item(binocs,createVector(1100,400))
  shades = new item(shades,createVector(900,150))
  headphones = new item(headphones,createVector(1100,280))
  gun = new item(gun,createVector(150,410))
  laserX1 = new Xlaser(80,188,width-80,188,30)
  laserX2 = new Xlaser(40 ,333,width - 40,333,40)
  laserX3 = new Xlaser(0,500,width,500,35)
  laserY1 = new Ylaser(282,93,282,height,25)
  laserY2 = new Ylaser(462,53,462,height,27)
  laserY3 = new Ylaser(637,53,637,height,40)
  laserY4 = new Ylaser(817,53,817,height,27)
  laserY5 = new Ylaser(993,53,993,height,40)
  imageMode(CENTER);
  frameRate(fr);
}

function draw() {
 // console.log(mouseX,mouseY);
  
  clear();
  background(0,0,0);
  player.loc()
  //generateTileMap();
  if(player.selfEsteem <0){
     player.selfEsteem = 0     
     }
  if(player.selfEsteem===0||timer <= 0){
          image(end2,width*0.5, height*0.5);
         player.pos.x = 10000000000000000000;
         isOver= true;
  

     }
  
  player.render();
  if(player.pickedUp === 9){
    image(end1,width*0.5, height*0.5); 
    player.pos.x = 10000000000000000000;
    isOver = true;  }
  if(player.loc === room_2){
        if(start2 === true){
     image(rm2_startText,width*0.5, height*0.5)}else{
       if(timer <=0){
         timer = 0
       }else{
       timer = timer -0.1;
       }
     }
  
  }

  //had to move dialogue to render over pc
  //green cat
      if(dist(player.pos.x,player.pos.y,1150,550)<120){
      if(dialogue === true){
           image(greenStat,640,615) 
      }
      }
  //peach cat
        if(dist(player.pos.x,player.pos.y,190,240)<120){
      if(dialogue === true){
           image(peachStat,640,655) 
      }
      }
  //blue cat
        if(dist(player.pos.x,player.pos.y,90,530)<120){
      if(dialogue === true){
           image(blueStat,640,655) 
      }
      }
  //orange cat
   /*     if(dist(player.pos.x,player.pos.y,1050,125)<120){
      if(dialogue === true){
           image(greenStat,650,550) 
      }
      }
        */
      if(dialogue===true){
    push()
      textSize(20)
          strokeWeight(1)
    fill(0,0,0)
    text(currentText,760,580,500,80)   
    pop()
  if(thereAreOptions===true){
    push()
    textSize(20)
    stroke(0)
    strokeWeight(1)
    fill(0)
    text(options[currentOption1],800,620,500,80)
    text(options[currentOption2],800,650,500,80)
    pop()
  }
  
 }

}
  //grid()  
 //print(floor(mouseX),floor(mouseY))

//refresh function
function refresh() {
  location.reload();
}

function keyPressed(e) {
  if (!keyIsDown)
    switch (e.code) {
      case 'ArrowUp':
      case 'KeyW':
        //console.log('key up');
        player.state = 'move-up';
        player.idx = 12;
        step.setVolume(0.45);
        step.play();
        break;
        
      case 'ArrowDown':
      case 'KeyS':
        //console.log('key down');
        player.state = 'move-down';
        player.idx = 0;
        step.setVolume(0.45); 
        step.play();
        break;
        
      case 'ArrowLeft':
      case 'KeyA':
        //console.log('key left');
        player.state = 'move-left';
        player.idx = 4;
        step.setVolume(0.45);
        step.play();
        break;
        
      case 'ArrowRight':
      case 'KeyD':
        //console.log('key right');
        player.state = 'move-right';
        player.idx = 8;
        step.setVolume(0.45);
        step.play();
        break;
        
      case 'Space':
      case 'KeyE':
        player.state = 'idle';
        player.interact = true;
          if(player.loc === room_2){
       //     pickUp.setVolume(0.4);
     //       pickUp.play();
          }
         if(player.pickedUp === 8){
           trumpet.setVolume(0.15);
           trumpet.play();
         }
          if (isOver) { 
          refresh();
          }
         
        break;
        
      case 'Digit1':
      case 'Numpad1':
        player.state = 'idle';
        player.option1 = true;
        break;
        
        
      case 'Numpad2':
      case 'Digit2':
        player.state = 'idle';
        player.option2 = true;
        break;
          
    }

  keyIsDown = true;
}

function keyReleased() {
  player.state = 'idle';
  player.interact = false;
  player.option1 = false;
  player.option2 = false;

  keyIsDown = false;
}
