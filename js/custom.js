$(document).ready( function() {
    // Value when you load the page for the first time
    // Will return 0 the first time it's called
    var radio_button_value_jq1 = getRadioValuejq1();
    var radio_button_value_jq2 = getRadioValuejq2();

    


    $('#quiz-case-study-one').submit( function( event ) {
         
        event.preventDefault(); // Prevent from default submit button behaviour

 		// Will get the newly selected value
        radio_button_value_jq1 = getRadioValuejq1();    
        radio_button_value_jq2 = getRadioValuejq2();       

        // jq1
        if(radio_button_value_jq1 == 135) {
			 
			$('#result-jq1 .right-ans').remove();
			$('#result-jq1 .wrong-ans').remove();
			$('#result-jq1 .show').remove();
			$('#result-jq1').append( "<p class='right-ans alert alert-success'><strong>(1) Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to (Show / Hide) Video</span></p>" );
		}
		else{
			 
			$('#result-jq1 .right-ans').remove();
			$('#result-jq1 .wrong-ans').remove();
			$('#result-jq1 .show').remove();
			$('#result-jq1').append( "<p class='wrong-ans alert alert-danger'><strong>(1) Wrong Answer &nbsp; &nbsp;</strong> <span class='show'>Click to (Show / Hide) Video</span></p>" );
		}

		    // jq2
        if(radio_button_value_jq2 == "absent") {
			 
			$('#result-jq2 .right-ans').remove();
			$('#result-jq2 .wrong-ans').remove();
			$('#result-jq2 .show').remove();
			$('#result-jq2').append( "<p class='right-ans alert alert-success'><strong>(2) Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to (Show / Hide) Video</span></p>" );
		}
		else{
			 
			$('#result-jq2 .right-ans').remove();
			$('#result-jq2 .wrong-ans').remove();
			$('#result-jq2 .show').remove();
			$('#result-jq2').append( "<p class='wrong-ans alert alert-danger'><strong>(2) Wrong Answer &nbsp; &nbsp;</strong> <span class='show'>Click to (Show / Hide) Video</span></p>" );
		}

 

    });



	$("#see-video-jq1").hide(); 
	$("#see-video-jq2").hide(); 
	
		 
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


});

