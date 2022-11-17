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

//handles the questions and answers
function makeQuestion() {    
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

//what happens when you click an answer button
function selectAnswer(event) {
  //variable for where clicked
  var whereClick = event.target;

  //check if you clicked a button, cancel function if you didnt
  if (!whereClick.matches(".answer")) {
    console.log("misclick!");
    return;
  }

  // check for correct answer
  if (whereClick.value === questions[0].correct) {
    console.log("HELL YEAH")
  } else {
    console.log("IDIOT")
  }

    endQuiz()
}

//end the quiz
function endQuiz() {
    // show results
    resultsEl.removeAttribute("class", "hidden");
}

//clicks that trigger functions

//click start button, start the quiz
startBtn.onclick = startQuiz;

answersEl.onclick = selectAnswer;