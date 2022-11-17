//test question
var questions = [
    {
      questionQ: "The answer is 3",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "Three",
    },
    {
      questionQ: "The answer is 1",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "One",
    },
    {
      questionQ: "The answer is 3",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "Three",
    },
    {
      questionQ: "The answer is Llama",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "Llama",
    },
    {
      questionQ: "The answer is 2",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "Two",
    },
    {
      questionQ: "The answer is 2",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "Two",
    },
    {
      questionQ: "The answer is 1",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "One",
    },
    {
      questionQ: "The answer is Llama",
      answers: ["One", "Two", "Three", "Llama"],
      correct: "Llama",
    },
  ];

// variables for quiz progression and score
var timer = 120;
var currentQuestion = 0
//set interval and clear interval needs an interval..?
var interval;


// variables for elements
var instructionsEl = document.getElementById("instructions");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("results");
var timerEl = document.getElementById("timer");
var answersEl = document.getElementById("answers");
var startBtn = document.getElementById("start");
var rightwrongEl = document.getElementById("right-or-wrong");
var scoreEl = document.getElementById("score");


//functions

//start the quiz
function startQuiz() {
    
    timerEl.textContent = "Score: " + timer;
    // hide start screen
    instructionsEl.setAttribute("class", "hidden");
  
    // show the questions div
    questionsEl.removeAttribute("class", "hidden");

    // start timer
    interval = setInterval(secondPass, 1000);

    makeQuestion();
}

//handles the questions and answers
function makeQuestion() {    
    
    // get question
    var questionNumber = questions[currentQuestion];
  
    // show name of question
    var questionNameEl = document.getElementById("question-name");
    questionNameEl.textContent = questionNumber.questionQ;

    // get rid of old answers
    answersEl.innerHTML = '';

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
  if (whereClick.value === questions[currentQuestion].correct) {
    rightwrongEl.textContent = "Correct!";
    rightwrongEl.setAttribute("class", "right");
  } else {

    // subtract score
    timer -= 20;
    //prevent score from going negative
    if (timer < 0) {
      timer = 0;
    }
    timerEl.textContent = "Score: " + timer;    
    rightwrongEl.textContent = "Incorrect!";
    rightwrongEl.setAttribute("class", "wrong");
  }


  // disappear the correct/incorrect
  setTimeout(function () {
    rightwrongEl.setAttribute("class", "rightorwrong hidden");
  }, 750);  

  // increment to next question
  currentQuestion++

  // check if we've run out of questions or if score is 0
  if (timer <= 0 || currentQuestion === questions.length) {
    endQuiz();
  } else {
    makeQuestion();
  } 
}

//timer seconds passing
function secondPass() {
  //update timer by one second
  timer--;
  timerEl.textContent = "Score: " + timer;

  //time over, game over
  if (timer <= 0) {
    endQuiz();
  }
}

//end the quiz
function endQuiz() {
    // show results
    resultsEl.removeAttribute("class", "hidden");

    // hide questions
    questionsEl.setAttribute("class", "hidden");

    // stops timer
    clearInterval(interval);

    scoreEl.textContent = timer;
}

//clicks that trigger functions

//click start button, start the quiz
startBtn.onclick = startQuiz;

answersEl.onclick = selectAnswer;