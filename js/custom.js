$(document).ready( function() {
 
    // Value when you load the page for the first time
    // Will return 0 the first time it's called
    var radio_button_value_jq1 = getRadioValuejq1();
    var radio_button_value_jq2 = getRadioValuejq2();
    var radio_button_value_jq3 = getRadioValuejq3();
    var radio_button_value_jq4 = getRadioValuejq4();
    var radio_button_value_jq5 = getRadioValuejq5();
    var radio_button_value_jq6 = getRadioValuejq6();
    var radio_button_value_jq7 = getRadioValuejq7();
    var radio_button_value_jq8 = getRadioValuejq8();


   

    $('#quiz-case-study-one').submit( function( event ) {

     	var q_total = 0;
        var q_correct = 0;
 
    	$("#see-video-jq1").hide(); 
		$("#see-video-jq2").hide(); 
		$("#see-video-jq3").hide(); 
		$("#see-video-jq4").hide(); 
		$("#see-video-jq5").hide(); 
		$("#see-video-jq6").hide(); 
		$("#see-video-jq7").hide(); 
		$("#see-video-jq8").hide(); 

        $("html, body").animate({ scrollTop: $('#quiz-case-study-one').offset().top -60}, 600);
        event.preventDefault(); // Prevent from default submit button behaviour

 		// Will get the newly selected value
        radio_button_value_jq1 = getRadioValuejq1();    
        radio_button_value_jq2 = getRadioValuejq2();
        radio_button_value_jq3 = getRadioValuejq3();  
        radio_button_value_jq4 = getRadioValuejq4();  
        radio_button_value_jq5 = getRadioValuejq5();  
        radio_button_value_jq6 = getRadioValuejq6();  
        radio_button_value_jq7 = getRadioValuejq7();      
        radio_button_value_jq8 = getRadioValuejq8();       

        // jq1
        if(radio_button_value_jq1 == 1) {
			 q_correct++;

			$('#result-jq1 .right-ans').remove();
			$('#result-jq1 .wrong-ans').remove();
			$('#result-jq1 .show').remove();
			$('#result-jq1').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'></span><span class='show'>Click to (Show / Hides) Video</span></p>" );
		}
		else{
			 
			$('#result-jq1 .right-ans').remove();
			$('#result-jq1 .wrong-ans').remove();
			$('#result-jq1 .show').remove();
			$('#result-jq1').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'></span> <span class='show'>Click to (Show / Hide) Video</span></p>" );
		}

		    // jq2
        if(radio_button_value_jq2 == 1) {
			  q_correct++;

			$('#result-jq2 .right-ans').remove();
			$('#result-jq2 .wrong-ans').remove();
			$('#result-jq2 .show').remove();
			$('#result-jq2').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'></span><span class='show'>Click to (Show / Hide) Video</span></p>" );
		}
		else{
			 
			$('#result-jq2 .right-ans').remove();
			$('#result-jq2 .wrong-ans').remove();
			$('#result-jq2 .show').remove();
			$('#result-jq2').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'></span> <span class='show'>Click to (Show / Hide) Video</span></p>" );
		}

		// jq3
        if(radio_button_value_jq3 == "1") {
			  q_correct++;

			$('#result-jq3 .right-ans').remove();
			$('#result-jq3 .wrong-ans').remove();
			$('#result-jq3 .show').remove();
			$('#result-jq3').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span><span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}
		else{
			 
			$('#result-jq3 .right-ans').remove();
			$('#result-jq3 .wrong-ans').remove();
			$('#result-jq3 .show').remove();
			$('#result-jq3').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span> <span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}

		// jq4
        if(radio_button_value_jq4 == 1) {
			  q_correct++;

			$('#result-jq4 .right-ans').remove();
			$('#result-jq4 .wrong-ans').remove();
			$('#result-jq4 .show').remove();
			$('#result-jq4').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'></span><span class='show'>Click to (Show / Hide) Video</span></p>" );
		}
		else{
			 
			$('#result-jq4 .right-ans').remove();
			$('#result-jq4 .wrong-ans').remove();
			$('#result-jq4 .show').remove();
			$('#result-jq4').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'> </span><span class='show'>Click to (Show / Hide) Video</span></p>" );
		}


		// jq5
        if(radio_button_value_jq5 == 1) {
			  q_correct++;

			$('#result-jq5 .right-ans').remove();
			$('#result-jq5 .wrong-ans').remove();
			$('#result-jq5 .show').remove();
			$('#result-jq5').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'></span><span class='show'>Click to (Show / Hide) Video</span></p>" );
		}
		else{
			 
			$('#result-jq5 .right-ans').remove();
			$('#result-jq5 .wrong-ans').remove();
			$('#result-jq5 .show').remove();
			$('#result-jq5').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-facetime-video'></span> <span class='show'>Click to (Show / Hide) Video</span></p>" );
		}


		// jq6
        if(radio_button_value_jq6 == 1) {
			  q_correct++;

			$('#result-jq6 .right-ans').remove();
			$('#result-jq6 .wrong-ans').remove();
			$('#result-jq6 .show').remove();
			$('#result-jq6').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span><span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}
		else{
			 
			$('#result-jq6 .right-ans').remove();
			$('#result-jq6 .wrong-ans').remove();
			$('#result-jq6 .show').remove();
			$('#result-jq6').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span> <span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}


		// jq7
        if(radio_button_value_jq7 == 1) {
			  q_correct++;

			$('#result-jq7 .right-ans').remove();
			$('#result-jq7 .wrong-ans').remove();
			$('#result-jq7 .show').remove();
			$('#result-jq7').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span><span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}
		else{
			 
			$('#result-jq7 .right-ans').remove();
			$('#result-jq7 .wrong-ans').remove();
			$('#result-jq7 .show').remove();
			$('#result-jq7').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span> <span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}

		// jq8
        if(radio_button_value_jq8 == 1) {
			  q_correct++;
			$('#result-jq8 .right-ans').remove();
			$('#result-jq8 .wrong-ans').remove();
			$('#result-jq8 .show').remove();
			$('#result-jq8').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span><span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}
		else{
			 
			$('#result-jq8 .right-ans').remove();
			$('#result-jq8 .wrong-ans').remove();
			$('#result-jq8 .show').remove();
			$('#result-jq8').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong><span class='glyphicon glyphicon-font'></span><span class='show'>Click to (Show / Hide) Answer</span></p>" );
		}

		$('.m_r_r').remove();
 		  
        $('#quiz-result-message').append( "<p class='m_r_r alert alert-success'><strong>"+ q_correct +" Correct Answer out of 8&nbsp; &nbsp;</strong> </p>" );
    });



	$("#see-video-jq1").hide(); 
	$("#see-video-jq2").hide(); 
	$("#see-video-jq3").hide(); 
	$("#see-video-jq4").hide(); 
	$("#see-video-jq5").hide(); 
	$("#see-video-jq6").hide(); 
	$("#see-video-jq7").hide(); 
	$("#see-video-jq8").hide(); 
	
		 
		$('#result-jq1').on('click', '.show', function() {
			$("#see-video-jq1").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq1').offset().top -60}, 600);
       				 return false;
			});
		});

		$('#result-jq2').on('click', '.show', function() {
			$("#see-video-jq2").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq2').offset().top -60}, 600);
       				 return false;
			});
		});

		$('#result-jq3').on('click', '.show', function() {
			$("#see-video-jq3").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq3').offset().top -60}, 600);
       				 return false;
			});
		});

		$('#result-jq4').on('click', '.show', function() {
			$("#see-video-jq4").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq4').offset().top -60}, 600);
       				 return false;
			});
		});

		$('#result-jq5').on('click', '.show', function() {
			$("#see-video-jq5").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq5').offset().top -60}, 600);
       				 return false;
			});
		});
		$('#result-jq6').on('click', '.show', function() {
			$("#see-video-jq6").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq6').offset().top -60}, 600);
       				 return false;
			});
		});
		$('#result-jq7').on('click', '.show', function() {
			$("#see-video-jq7").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq7').offset().top -60}, 600);
       				 return false;
			});
		});
		$('#result-jq8').on('click', '.show', function() {
			$("#see-video-jq8").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result-jq8').offset().top -60}, 600);
       				 return false;
			});
		});

    function getRadioValuejq1 () {
	    if( $('input[name=jq1]:radio:checked').length > 0 ) {
	        return $('input[name=jq1]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}
	
	function getRadioValuejq2 () {
	    if( $('input[name=jq2]:radio:checked').length > 0 ) {
	        return $('input[name=jq2]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}
	function getRadioValuejq3 () {
	    if( $('input[name=jq3]:radio:checked').length > 0 ) {
	        return $('input[name=jq3]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}
	function getRadioValuejq4 () {
	    if( $('input[name=jq4]:radio:checked').length > 0 ) {
	        return $('input[name=jq4]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}

	function getRadioValuejq5 () {
	    if( $('input[name=jq5]:radio:checked').length > 0 ) {
	        return $('input[name=jq5]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}

	function getRadioValuejq6 () {
	    if( $('input[name=jq6]:radio:checked').length > 0 ) {
	        return $('input[name=jq6]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}

	function getRadioValuejq7 () {
	    if( $('input[name=jq7]:radio:checked').length > 0 ) {
	        return $('input[name=jq7]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}

	function getRadioValuejq8 () {
	    if( $('input[name=jq8]:radio:checked').length > 0 ) {
	        return $('input[name=jq8]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}

});

