var STATES = {
  pregame: 0,
  diabled: 1,
  waiting: 2,
  lost: 3
};

var BLINK_TIME = 1000;
var WAIT_BETWEEN_BLINKS = 200;
var WAIT_BEFORE_NEW_PATTERN = 350;
var HIGH_SCORE_KEY = "high-score";

var game = {
  state: STATES.pregame,
  pattern: [],
  userGuesses: [],
  score: 0,
  demoIndex: 0
};

var highScore = loadHighScore(HIGH_SCORE_KEY, window.localStorage);

window.addEventListener('DOMContentLoaded', function() {
  var start = document.getElementById("simon-start");
  updateHighScore(highScore, HIGH_SCORE_KEY, window.localStorage);
  start.addEventListener("click", function() {
    resetGame(game);
    addToPattern(game);
    demoPattern(game);
  });

  var squares = document.getElementsByClassName("simon-sq");
  for (var i = 0; i < squares.length; i++) {
    squares[i].addEventListener("click", function(e) {
      if (game.state === STATES.waiting) {
        var color = e.target.id.split("-")[1];
        addToGuesses(game, color);
        var correctGuess = checkGuesses(game.pattern, game.userGuesses);
        if (correctGuess) {
          flashUserGuess(game);
        } else {
          lostGame(game);
          if (checkForNewHighScore(game, highScore)) {
            highScore.score = game.score;
            highScore.name = "";
            updateHighScore(highScore);
            askForHighScoreName(highScore, HIGH_SCORE_KEY, window.localStorage);
          }
        }
      }
    });
  }

});

function getRandomColor() {
  colors = ["red", "yellow", "green", "blue"];
  return colors[Math.floor(Math.random() * colors.length)];
}

function flash(color, turnOn) {
  sq = document.getElementById("s-"+color);
  if (turnOn) {
    sq.className = "simon-sq lighter";
  } else {
    sq.className = "simon-sq";
  }
}

function addToPattern(game) {
  game.pattern.push(getRandomColor());
  game.state = STATES.disabled;
}

function addToGuesses(game, color) {
  game.userGuesses.push(color);
}

function demoPattern(game) {
  game.userGuesses = [];
  flash(game.pattern[game.demoIndex], true);
  setTimeout(function() {
    flash(game.pattern[game.demoIndex], false);
    setTimeout(function() {
      game.demoIndex++;
      if (game.demoIndex < game.pattern.length) {
        demoPattern(game);
      } else {
        game.demoIndex = 0;
        game.state = STATES.waiting;
      }
    }, WAIT_BETWEEN_BLINKS);
  }, BLINK_TIME);
}

function flashUserGuess(game) {
  game.state = STATES.disabled;
  flash(game.userGuesses[game.userGuesses.length - 1], true);
  setTimeout(function() {
    flash(game.userGuesses[game.userGuesses.length - 1], false);
    if (game.userGuesses.length === game.pattern.length) {
      game.score++;
      setTimeout(function() {
        addToPattern(game);
        demoPattern(game);
      }, WAIT_BEFORE_NEW_PATTERN);
    } else {
      game.state = STATES.waiting;
    }
  }, BLINK_TIME);
}

function resetGame(game) {
  var lostMessage = document.getElementById('lost-message');
  lostMessage.className = "hidden";
  game.state = STATES.pregame;
  game.pattern = [];
  game.userGuesses = [];
  game.demoIndex = 0;
  game.score = 0;
}

function checkGuesses(pattern, userGuesses) {
  for (var i = 0; i < userGuesses.length; i++) {
    if (i >= pattern.length) { return false; }
    if (userGuesses[i] !== pattern[i]) { return false; }
  }
  return true;
}

function lostGame(game) {
  game.state = STATES.lost;
  var lostMessage = document.getElementById('lost-message');
  lostMessage.className = "";
}

function loadHighScore(key, storage) {
  var highScore = {
    name: "Matt 'The Brain' Lane",
    score: 8
  };
  let val = storage.getItem(key);
  if (!!val) {
    try { highScore = JSON.parse(val); }
    catch(e) {}
  }

  return highScore;
}

function updateHighScore(highScore) {
  var highScoreNameUI = document.getElementById("high-score-name");
  var highScoreValueUI = document.getElementById("high-score-value");

  highScoreNameUI.innerText = highScore.name;
  highScoreValueUI.innerText = highScore.score;
}

function saveHighScore(highScore, key, storage) {
  storage.setItem(key, JSON.stringify(highScore));
}

function checkForNewHighScore(game, highScore) {
  return (game.score > highScore.score);
}


function askForHighScoreName(highScore, key, storage) {
  var nameUI = document.getElementById('high-score-name');
  nameUI.className = "hidden";
  var nameForm = document.getElementById('high-score-name-form');
  nameForm.className = "";
  nameForm.addEventListener("submit", function(e) {
    e.preventDefault();
    highScore.name = document.getElementById("high-score-name-input").value;
    saveHighScore(highScore, key, storage);
    updateHighScore(highScore);
    nameForm.className = "hidden";
    nameUI.className = "";
    nameForm.removeEventListener("submit");
  })
}
