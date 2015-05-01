var controllerOptions = {enableGestures: true};
var counter =1;
var list=["Thinking Out Loud", "Uptown Funk", "Hum Dum Soniyo Re","Sooraj Dooba Hai","Sathiyaa"]
function sleep(milliseconds) {
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds){
      break;
    }
  }
}

Leap.loop(controllerOptions, function(frame) {

  // Display Gesture object data
  if (frame.gestures.length > 0) {
    
      var gesture = frame.gestures[0];
      if(gesture.type == "swipe") {
          //Classify swipe as either horizontal or vertical
          var isHorizontal = Math.abs(gesture.direction[0]) > Math.abs(gesture.direction[1]);
          //Classify as right-left or up-down
          if(isHorizontal){
              if(gesture.direction[0] > 0){
                  swipeDirection = "right";

                  //document.getElementById("audio"+counter).stop();
                  
              } else {
                  swipeDirection = "left";
                 // document.getElementById("audio"+counter).stop();
                 
              }
          } else { //vertical
              if(gesture.direction[1] > 0){
                  swipeDirection = "up";
                  counter++;
                  if(counter==6)
                    counter=1;
                  document.getElementById("audio").src='song'+counter+'.mp3';
                  document.getElementById("songName").innerText=list[counter-1];

                  document.getElementById("audio").play();
                  
       document.getElementById("play").style.opacity=0.5;
        document.getElementById("pause").style.opacity=0.5;
         document.getElementById("next").style.opacity=1;
                  
              } else {
                  swipeDirection = "down";
                   counter--;
                  if(counter==0)
                    counter=5;
                  document.getElementById("audio").src='song'+counter+'.mp3';
                  document.getElementById("songName").innerText=list[counter-1];
                  document.getElementById("audio").play();
                  document.getElementById("play").style.opacity=0.5;
        document.getElementById("pause").style.opacity=0.5;
         document.getElementById("next").style.opacity=1;
                  
              }                  
          }
          console.log(swipeDirection)

       }
     
  }
// sleep(1000);
});