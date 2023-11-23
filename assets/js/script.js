var introPg = document.querySelector(".intro");
var quizPg  = document.querySelector(".quiz");
var endPg  = document.querySelector(".game-over");

var timerEl = document.querySelector(".timer-bar");

var startButton = document.querySelector("div.start");

var questionCount = document.querySelector("#count");

var userScore = document.querySelector("#user-score");

var score = 0;
var quizRunning = false;


startButton.addEventListener("click", function() {


    if (quizRunning == false ) {

      quizRunning == true;

      // introPg.computedStyleMap.transitionDelay = "1s";

      introPg.setAttribute("style", "display: none;");

      quizPg.setAttribute("style", "display: inherit;");

      runGame();
        }

});



function gameTimer(){
    
    var secondsLeft = 1080;
    
    timeLeft = 0;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      questionCount++;
      timerEl.textContent = secondsLeft;
  
      if(secondsLeft === 178) {
        score = secondsLeft;
        endGame();
        // Stops execution of action at set interval
        clearInterval(timerInterval);
        return;

      }else if (questionCount == 10){
        score = secondsLeft;
        endGame();
        
        
        return;
      }
      
   
    }, 1000);
}


function timerBar() {  
  

}




function runGame(){
  gameTimer();

}


function endGame() {
    quizRunning = false;
    quizPg.setAttribute("style", "display: none;");
    endPg.setAttribute('style', "display: inherit; ");
    userScore.textContent = score;
    
    
    
}