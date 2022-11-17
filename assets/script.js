//test question
var questions = [
    {
      questionQ: "The answer is 3",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "Three",
    }
  ];



// variables for elements
var instructionsEl = document.getElementById("instructions");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("results");
var timeEl = document.getElementById("timer");
var answersEl = document.getElementById("answers");

var startBtn = document.getElementById("start");


//functions

//start the quiz
function startQuiz() {
    
    // hide start screen
    instructionsEl.setAttribute("class", "hidden");
  
    // show the questions div
    questionsEl.removeAttribute("class", "hidden");

    makeQuestion();
}

function makeQuestion() {
    console.log("im a gamer");
    console.log(questions[0].answers[0])
    
    // show name of question
    var questionNameEl = document.getElementById("question-name");
    questionNameEl.textContent = questions[0].questionQ;
  
    // make answers
    for (var i = 0; i <= 3; i++) {
      // create buttons for answers
      var answer = questions[0].answers[i];
      var answerButton = document.createElement("button");
      answerButton.setAttribute("class", "answer");
      answerButton.setAttribute("value", answer);
  
      answerButton.textContent = i + 1 + '. ' + answer;
  
      // show the answers
      answersEl.appendChild(answerButton);
    }
}

//end the quiz
function endQuiz() {
    // show results. move to its own function later, im just testing
    resultsEl.removeAttribute("class", "hidden");
}

//clicks that trigger functions

//click start button, start the quiz
startBtn.onclick = startQuiz;