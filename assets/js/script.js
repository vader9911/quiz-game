var introPg = document.querySelector(".intro");
var quizPg  = document.querySelector(".quiz");
var endPg  = document.querySelector(".game-over");

var timerEl = document.querySelector(".timer-bar");

var startButton = document.querySelector("div.start");

var questionCount = document.querySelector("#count");

var userScore = document.querySelector("#user-score");

var score = 0;
var quizRunning = false;



let currentQuestionIndex = 0;



function showNextQuestion() {
    // Check if there are more questions to display
    if (currentQuestionIndex < questions.length) {
        // Get the current question from the array
        const currentQuestion = questions[currentQuestionIndex];

        // Create and populate the card for the current question
        createAndPopulateCard(currentQuestion, currentQuestionIndex + 1);

        // Increment the current question index for the next iteration
        currentQuestionIndex++;
        setTimeout(showNextQuestion, 3000);
        // You might want to include a mechanism to handle user input and scoring here

    } else {
        // If there are no more questions, end the game
        endGame();
    }
}



function gameTimer(){
    
    var secondsLeft = 180;
    // Sets interval in variable
    var timerInterval = setInterval(function() {
      secondsLeft--;
      // questionCount++;
      timerEl.textContent = secondsLeft;

   // Stops execution of game when timer = 0 secs
      if(secondsLeft === 0) {
        score = secondsLeft;
        endGame();
        clearInterval(timerInterval);
        return;

      }else if (questionCount == 10){
        score = secondsLeft;
        endGame();        
        return;
      }
    
    }, 1000);
}


//Function to run the game: starts the timer and creates the card for the question.
//----------------------------------------------------------------------------------------//
function runGame(){

  gameTimer();


  // showNextQuestion();
  //createAndPopulateCard();
  
}
//----------------------------------------------------------------------------------------//

//Function that runs when the game ends. Displays the endgame screen and updates the score.
//----------------------------------------------------------------------------------------//
function endGame() {
    quizRunning = false;
    quizPg.setAttribute("style", "display: none;");
    endPg.setAttribute('style', "display: inherit; ");
    userScore.textContent = score;
       
}
//----------------------------------------------------------------------------------------//

/* old removed for testing
// question selector vars
// var questCard = document.querySelector('.quiz');
// var questChoices = questCard.querySelector('.choice');
// var questQuery = questCard.querySelector('.question');
// var quest = questCard.querySelector(".answer-check");
*/
//questions broken into sub properites of the questions object.                                     
const questions = [
  
  {
    question: "In HTML, the &lt;_____&gt;&lt;/_____&gt; tag is used to create a line break.",
    choices: ["&lt;br&gt;&lt;/br&gt;", "&lt;p&gt;&lt;/p&gt;", "&lt;lb&gt;&lt;/lb&gt;", "&lt;hr&gt;&lt;/hr&gt;"],
    answer: "&lt;br&gt;&lt;/br&gt;"
  },
  {
      question: "CSS is an abbreviation for Cascading Style _______",
      choices: ["Scripts", "Sheets", "System", "Syntax"],
      answer: "Sheets"
  },
  {
      question: "JavaScript is primarily a _______-side scripting language.",
      choices: ["Server", "Client", "Both", "None"],
      answer: "Client"
  },
  {
      question: "The CSS property \"color\" is used to define the text _______.",
      choices: ["Size", "Style", "Weight", "Color"],
      answer: "Color"
  },
  {
      question: "In HTML, the &lt;ol&gt; tag is used to define a(n) _______ list.",
      choices: ["Ordered", "Definition", "Unordered", "Description"],
      answer: "Ordered"
  },
  {
      question: "The JavaScript function _________() is used to alert a message.",
      choices: ["print()", "alertText()", "display()", "showAlert()"],
      answer: "alert()"
  },
  {
      question: "The CSS selector \".class\" is used to select elements with a specific _______.",
      choices: ["ID", "Tag", "Attribute", "Class"],
      answer: "Class"
  },
  {
      question: "The HTML _______ element is used to define an image.",
      choices: ["&lt;img&gt;", "&lt;picture&gt;", "&lt;figure&gt;", "&lt;image&gt;"],
      answer: "&lt;img&gt;"
  },
  {
      question: "The JavaScript _______ method is used to add new items to the beginning of an array.",
      choices: ["unshift()", "addFirst()", "insertAtBeginning()", "prepend()"],
      answer: "unshift()"
  },
  {
      question: "The CSS property \"width\" is used to control the _______ of an element.",
      choices: ["Height", "Width", "Size", "Length"],
      answer: "Width"
  }
]

// Function to create and populate a quiz card
function createAndPopulateCard(questionObj, cardNumber) {
//clears current card before loading new one
  const existingCard = document.querySelector('.card');
    if (existingCard) {
        existingCard.remove();
    }


  const card = document.createElement('div');
  card.classList.add('card');
  card.id = `card${cardNumber}`;

  document.querySelector('.quiz-cards').appendChild(card);

  // Populate the card with questionObj
  const questionElement = document.createElement('h3');
  questionElement.classList.add('question');
  questionElement.textContent = questionObj.question;
  card.appendChild(questionElement);

  const ulElement = document.createElement('ul');
  ulElement.classList.add('answers');

  for (let i = 0; i < questionObj.choices.length; i++) {
      const liElement = document.createElement('li');
      liElement.innerHTML = `
          <span id="num">${i + 1}.</span>
          <div class="choice">${questionObj.choices[i]}</div>
      `;
      ulElement.appendChild(liElement);
  }

  const keyLiElement = document.createElement('li');
  keyLiElement.id = "key";
  keyLiElement.innerHTML = `
      <div class="answer-check">${questionObj.answer}</div>
  `;

  ulElement.appendChild(keyLiElement);
  card.appendChild(ulElement);
  
}



// Loop through the questions array and create/populate cards
for (let i = 0; i < questions.length; i++) {
  createAndPopulateCard(questions[i], i + 1);
}
 
//Event listner for the start game button 
startButton.addEventListener("click", function() {

  if (quizRunning == false ) {
    quizRunning = true;
    introPg.setAttribute("style", "display: none;");
    quizPg.setAttribute("style", "display: inherit;");
    // showNextQuestion();
    runGame()
      }

});