$(document).ready( function() {
    // Value when you load the page for the first time
    // Will return 0 the first time it's called
    var radio_button_value = getRadioValue();

    $('input[name=jq1]:radio').click( function() {
        // Will get the newly selected value
        radio_button_value = getRadioValue();
        console.log(radio_button_value);

        if(radio_button_value == 135) {
			 
			$('.right-ans').remove();
			$('.wrong-ans').remove();
			$('.show').remove();
			$('#result1').append( "<p class='right-ans alert alert-success'><strong>Correct Answer &nbsp; &nbsp;</strong><span class='show'>Click to (Show / Hide) Video</span></p>" );
		}
		else{
			 
			$('.right-ans').remove();
			$('.wrong-ans').remove();
			$('.show').remove();
			$('#result1').append( "<p class='wrong-ans alert alert-danger'><strong>Wrong Answer &nbsp; &nbsp;</strong> <span class='show'>Click to (Show / Hide) Video</span></p>" );
		}

    });
	$("#see-video").hide(); 
	
		 
		$('#result1').on('click', '.show', function() {
			$("#see-video").slideToggle('slow',function(){
					$("html, body").animate({ scrollTop: $('#result1').offset().top -60}, 600);
       				 return false;
			});
		});

    function getRadioValue () {
	    if( $('input[name=jq1]:radio:checked').length > 0 ) {
	        return $('input[name=jq1]:radio:checked').val();
	    }
	    else {
	        return 0;
	    }
	}


});

