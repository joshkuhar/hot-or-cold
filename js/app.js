
$(document).ready(function(){
	


	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  	});

    $("#guessButton").click(function(event) {
      event.preventDefault();
      var guess = $("#userGuess").val();
      $("#guessList").append("<li> " + guess + " </li>");
      $("#userGuess").val('');
    });    


});


