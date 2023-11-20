var introPg = document.querySelector(".intro");
var quizPg  = document.querySelector(".quiz");
var endPg  = document.querySelector(".game-over");

var timerEl = document.querySelector(".timer-bar");

var startButton = document.querySelector(".start-button");

var questionCount = document.querySelector(".question-counter")


var quizRunning = true;


startButton.addEventListener("click", function() {


    if (quizRunning == false ) {

        quizRunning == true;

        introPg.setAttribute("style", "display: hidden;");

        gameTimer(timeLeft)
    }

});


function gameTimer(timeLeft){
    var secondsLeft = 180;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }else if (questionCount)
  
  
    }, 1000);
}