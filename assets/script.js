// variables for non-clickable elements
var instructionsEl = document.getElementById("instructions");
var questionsEl = document.getElementById("questions");
var resultsEl = document.getElementById("results");

// variables for buttons to click
var startBtn = document.getElementById("start");


//functions

//start the quiz
function startQuiz() {
    
    // hide start screen
    instructionsEl.setAttribute("class", "hidden");
  
    // show the hidden things
    questionsEl.removeAttribute("class", "hidden");

    // show results. move to its own function later, im just testing
    resultsEl.removeAttribute("class", "hidden");
}



//clicks that trigger functions

//click start button, start the quiz
startBtn.onclick = startQuiz;