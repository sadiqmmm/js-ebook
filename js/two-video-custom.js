  // Once the video is ready
  _V_("example_video_1").ready(function(){

    var myPlayer =  _V_("example_video_1"); 
    var myPlayer2 =  _V_("example_video_2");      // Store the video object
    var aspectRatio = 9/16; // Make up an aspect ratio
    var aspectRatio2 = 9/16; 
    function resizeVideoJS(){
      // Get the parent element's actual width
      var width = document.getElementById(myPlayer.id()).parentElement.offsetWidth;
      var width2 = document.getElementById(myPlayer2.id()).parentElement.offsetWidth;

      // Set width to fill parent element, Set height
      myPlayer.width(width - 20).height( width * aspectRatio - 11);
      myPlayer2.width(width2 - 20).height( width2 * aspectRatio2 - 11);
    }

    resizeVideoJS(); // Initialize the function
    window.onresize = resizeVideoJS; // Call the function on resize
  });
 
 