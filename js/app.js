
$(document).ready(function(){
	
  var count = 0;

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
      count++;
      $("#count").empty().append("<span> " +count+ " </span>");
      $("#feedback").empty().append("Good guess");
    });    

    $("#userGuess").keyup(function(event){
      if(event.keyCode === 13) {
         event.preventDefault();
      //event.preventDefault();
      /*var guess = $("#userGuess").val();
      $("#guessList").append("<li> " + guess + " </li>");
      $("#userGuess").val('');
      count++;
      $("#count").empty().append("<span> " +count+ " </span>");
      $("#feedback").empty().append("Good guess");*/
      }
    });


});
  

