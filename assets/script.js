//test question
var questions = [
    {
      questionQ: "Which operator is used to assign a variable?",
      answers: ["x", "+", "=", "/"],
      correct: "=",
    },
    {
      questionQ: "Which of the following is a valid comment?",
      answers: ["//Comment", "*Comment*", "<!--Comment-->", "*/Comment/^"],
      correct: "//Comment",
    },
    {
      questionQ: "What is the second expression in a FOR loop?",
      answers: ["Executed first", "Executed after each loop", "Conditions for looping", "Conditions for returning"],
      correct: "Conditions for looping",
    },
    {
      questionQ: "Which of the following is not a comparison operator?",
      answers: [">", "!==", "<=", "=>"],
      correct: "=>",
    },
    {
      questionQ: "Which expression is the most useful, least intrusive debugging tool?",
      answers: ["alert(x);", "console.log(x)", "prompt(x);", "confirm(x);"],
      correct: "console.log(x)",
    },
    {
      questionQ: "Which function should we call after a submit event to prevent data loss?",
      answers: ["event.saveData();", "event.preventDefault();", "event.onLoad();", "event.stopLoad();"],
      correct: "event.preventDefault();",
    },
    {
      questionQ: "Which of the following data types is NOT a JavaScript data type?",
      answers: ["Empty", "BigInt", "Symbol", "Undefined"],
      correct: "Empty",
    },
    {
      questionQ: "What will console.log(x) output to the console? var x = 5 + 4 + '1'",
      answers: ["'541'", "10", "'10'", "'91'"],
      correct: "'91'",
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
var inputfieldEl = document.getElementById("inputfield")
var submitBtn = document.getElementById("submit")


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
      var answer = questionNumber.answers[i];
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

function saveScore() {
  // variable of what's in input
  var input = inputfieldEl.value.trim();

  // check if the input was empty
  if (input !== '') {
    // object for this session's score
    var thisScore = {
      score: timer,
      input: input,
    };

  // get any existing saved scores
  var scores = JSON.parse(window.localStorage.getItem("scores")) || [];
  }

  // save this session's score to local storage
  scores.push(thisScore);
  window.localStorage.setItem("scores", JSON.stringify(scores));

  window.location.href = "scores.html";
}

//clicks that trigger functions
submitBtn.onclick = saveScore;
startBtn.onclick = startQuiz;
answersEl.onclick = selectAnswer;