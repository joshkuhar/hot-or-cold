
$(document).ready(function(){
	var counter = 0;
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

$("#guessButton").click(function() {
  //$(".output").empty();
     var guess = $("#userGuess").val();
     if(guess % 1 !== 0){
        alert("please input a number only (no letters), or a number without decimals");
      }


      //Guess feedback




      //Guess counter
      //var counter = 0;
      counter++;
      $("#count").empty();
      $("#count").append("<span>" +counter+ "</span>");







      $("#guessList").append("<span> "+guess+" </span>");
      $("#userGuess").val("");
    });    
  
 /*
  console.log("check");
  });

// use enter to add list items
$('.text-box').keyup(function(e){
	if(e.keyCode == 13) {
		//event.preventDefault();
		$('.enter').click();
	}
});	*/


});


