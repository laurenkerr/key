

function room_1() {
 image(room_1_bg,width*0.5,height*0.5)
  
  if(start1 === true){
  image(rm1_startText,width*0.5,height*0.61)
  
  if(player.interact === true){
   start1 = false 
  }
  }
  noStroke()
  orangeCat();
  //print(greenCatTracker, player.interact, 'and', player.option1)
  
  // Start Dialogue peach cat
  if(dist(player.pos.x,player.pos.y,190,240)<120&&player.interact===true){
    dialogue=true
  }
//     Starts dialogue flow chart
    if(dist(player.pos.x,player.pos.y,190,240)<120&&dialogue===true){
    currentText=peachCatText[peachCatTracker]
     if(peachCatTracker ===0){
      player.interact = false
        }
  }
  

    
    if(dist(player.pos.x,player.pos.y,90,530)<120&&player.interact===true){
    dialogue=true
    currentText=blueCatText[blueCatTracker]
    if(blueCatTracker === 0){
    player.interact = false
    }
    }
      

        if(dist(player.pos.x,player.pos.y,1150,550)<120&&player.interact===true){
    dialogue=true
    currentText=greenCatText[greenCatTracker]
    player.interact = false
       
  }

  if(dialogue ===true){
    if(peachCatTracker === 0 &&dist(player.pos.x,player.pos.y,190,240)<120||peachCatTracker === 1&&dist(player.pos.x,player.pos.y,190,240)<120){
      if(peachCatTracker === 0){
        thereAreOptions = true
        currentOption1 = 0
        currentOption2 = 1
      }
    if(player.option1 === true){
        player.option1 = false;
        peachCatTracker ++;
        if(player.selfEsteem < 100){
          player.selfEsteem += 20 
          levelUp.setVolume(0.3);
          levelUp.play();
        }
        currentText=peachCatText[peachCatTracker]
        thereAreOptions = false;
    }
    if(peachCatTracker=== 1){
     if(player.interact===true)
       dialogue = false
    }
    }
    if(blueCatTracker === 0 &&dist(player.pos.x,player.pos.y,90,530)<120||blueCatTracker === 1&&dist(player.pos.x,player.pos.y,90,530)<120){
      if(blueCatTracker === 0){
      thereAreOptions = true
      currentOption1 = 0
      currentOption2 = 1
         }
      if(player.option1 === true){
        player.option1 = false;
        blueCatTracker = 1;
        currentText=blueCatText[blueCatTracker]
        if(player.selfEsteem < 100){
          player.selfEsteem += 20 
          levelUp.setVolume(0.3);
          levelUp.play();
        }
        thereAreOptions = false;
    }
    if(blueCatTracker=== 1){
     if(player.interact===true)
       dialogue = false
    }
    }
    
    if(dist(player.pos.x,player.pos.y,1150,550)<120){
      if(greenCatTracker === 0){
      thereAreOptions = true
      currentOption1 = 0
      currentOption2 = 1
      if(player.option1 === true){
        greenCatTracker = 1;
        Player.option1 = false;
        player.selfEsteem -=20
        levelDown.setVolume(0.3);
        levelDown.play();
        currentText=greenCatText[greenCatTracker]
        }
      }
      if(greenCatTracker === 1){
        thereAreOption = false
        currentOption1 = 6
        currentOption2 = 6
        if(player.option1 === true){
          greenCatTracker = 2;
          player.selfEsteem -=5
          levelDown.setVolume(0.3);
          levelDown.play();

          currentText=greenCatText[greenCatTracker]
          player.option1 = false;
        }
      }
      if(greenCatTracker === 2){
        currentOption1 = 2;
        currentOption2 = 3;
        if(player.option1 === true){
           player.option1 = false;
           greenCatTracker ++;
           player.selfEsteem -=20
           levelDown.setVolume(0.3);
           levelDown.play();

           dialogue = false;
           }
        if(player.option2 === true){
           player.option2 = false;
           greenCatTracker ++;
           player.selfEsteem += 20 
           levelUp.setVolume(0.3);
           levelUp.play();
           dialogue = false;
           }
      }
      if(greenCatTracker === 3){
           dialogue = false;
           thereAreOptions = true;
           currentOption1 = 6;
           currentOption2 = 6;
         
         }
      
    }

   // print(annoyed)
  if(player.option2 === true ){
    if(greenCatTracker === 0 && dist(player.pos.x,player.pos.y,1150,550)<120){
      dialogue = false;
    }
    if(peachCatTracker === 0 && dist(player.pos.x,player.pos.y,190,240)<120){
      dialogue = false;
    }
    if(blueCatTracker === 0 && dist(player.pos.x,player.pos.y,90,530)<120){
      dialogue = false;
    }
  }
}
  if(blueCatTracker === 1 && peachCatTracker === 1 && dialogue === false){
  player.loc = room_2
    player.pos.x = width *0.7;
    player.pos.y = height *0.7;
  
  }
  

}
