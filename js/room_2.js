

function room_2(){

     image(room_2_bg,width*0.5,height*0.5)
     if(start2 === true){
       player.pos.x = width * 0.9
       player.pos.y = height * 0.9
     }
   //  print(second()%4)
     
  magGlass.display()
  notePad.display()
  watch.display()
  listeningGun.display()
  binocs.display()
  walkie.display()
  shades.display()
  headphones.display()
  gun.display()
  laserX1.render()
  laserX2.render()
  laserX3.render()
  
  
  laserY1.render()
  laserY2.render()
  laserY3.render()
  laserY4.render()
  laserY5.render()

      if(player.interact === true){
        start2 = false
    }
 // print(laserX1.on)
  push()
  textSize(70)
  stroke(2)
  text(timer,1150,60)
  pop()

  
}