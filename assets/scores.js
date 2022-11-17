function showScores() {
  // get any existing saved scores
  var savedScores = JSON.parse(window.localStorage.getItem("scores")) || [];

  // sort saved scores by score
  savedScores.sort(function (a, b) {
    return b.score - a.score;
  });

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

//clear history of scores and refresh the page
function scoreHistory() {
    window.localStorage.removeItem("scores");
    window.location.reload();
}

//show scores
showScores();
document.getElementById("clear").onclick = scoreHistory;