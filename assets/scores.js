function showScores() {
  // get any existing saved scores
  var savedScores = JSON.parse(window.localStorage.getItem("scores")) || [];
  // put scores on the lists
  for (var i = 0; i < savedScores.length; i += 1) {
    // create li tag for each high score
    var listItem = document.createElement("li");
    listItem.textContent = savedScores[i].input + ' - ' + savedScores[i].score;

    // display on page
    var listedscoreEl = document.getElementById("page-scores");
    listedscoreEl.appendChild(listItem);
  }
  }

//show scores
showScores();