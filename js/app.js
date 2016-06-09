
$(document).ready(function(){
	
  var count = 0;
  var secretNum = Math.floor((Math.random() * 100) + 1);
  console.log(secretNum);

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);
  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  	$(".overlay").fadeOut(1000);
  	});

    // Start new game by clicking on '+ New Game'
    $(".new").click(function(event) {
      event.preventDefault();
      resetAllFields();
      secretNum = changeSecretNum(secretNum);
      console.log(secretNum);
    });    

    // Play game
    $("#guessButton").click(function(event) {
      event.preventDefault();
      var guess = $("#userGuess").val();
      // Validate input from game player
      if (guess % guess !== 0) {
        alert("Please enter a number");
        $("#userGuess").val('');
        console.log("not a valid number");
      } 
      else {
        $("#guessList").append("<li> " + guess + " </li>");
        $("#userGuess").val('');
        count++;
        $("#count").empty().append("<span> " +count+ " </span>");
        guessMessage(guess, secretNum);
      }
    });    

    $("#userGuess").keyup(function(event){
      if(event.keyCode === 13) {
         event.preventDefault();
      }
    });
    // Function for secret number
    function changeSecretNum(numToChange){
      numToChange = Math.floor((Math.random() * 100) + 1);
      return numToChange;
      }

    // Function to reset all fields
    function resetAllFields() {
        $("#userGuess").val('');
        var count = 0;
        $("#userGuess, #guessList").empty();
        $("#count").empty().append("<span> " +count+ " </span>");
        $("#feedback").empty().append("Make your Guess!");
        console.log("check");
      }

    // Function for message to display if hot or cold
    function guessMessage(guess, secretNum) {
      $("#feedback").empty();
      if (guess > (secretNum + 20)) {
        $("#feedback").append("Cold");
      }
      else if (guess > secretNum && guess < (secretNum + 20)) {
        $("#feedback").append("Warm");
      }
      else if (guess < (secretNum - 20)) {
        $("#feedback").append("Cold");
      }
      else if (guess < secretNum && guess > (secretNum - 20)) {
        $("#feedback").append("Warm");
      }
      else {
        $("#feedback").append("You Got It");
      }
    }


});
  

