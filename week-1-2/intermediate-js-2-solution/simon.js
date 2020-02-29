const STATES = {
  pregame: 0,
  diabled: 1,
  waiting: 2,
  lost: 3
};

const BLINK_TIME = 1000;
const WAIT_BETWEEN_BLINKS = 200;
const WAIT_BEFORE_NEW_PATTERN = 350;
const HIGH_SCORE_KEY = "high-score";

const game = {
  state: STATES.pregame,
  pattern: [],
  userGuesses: [],
  score: 0,
  demoIndex: 0
};

let highScore = loadHighScore(HIGH_SCORE_KEY, window.localStorage);

window.addEventListener('DOMContentLoaded', function() {
  const start = document.getElementById("simon-start");
  updateHighScore(highScore, HIGH_SCORE_KEY, window.localStorage);

  start.addEventListener("click", function() {
    resetGame(game);
    addToPattern(game);
    demoPattern(game);
  });

  let squares = document.getElementsByClassName("simon-sq");
  for (let i in [...squares]) {
    squares[i].addEventListener("click", function(e) {
      if (game.state === STATES.waiting) {
        const color = e.target.id.split("-")[1];
        addToGuesses(game, color);
        const correctGuess = checkGuesses(game.pattern, game.userGuesses);
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

const getRandomColor = () => (
  ["red", "yellow", "green", "blue"][Math.floor(Math.random() * 4)]
);

function flash(color, turnOn) {
  const sq = document.getElementById(`s-${color}`);
  sq.className = turnOn ? "simon-sq lighter" : "simon-sq";
}

function addToPattern(game) {
  game.pattern.push(getRandomColor());
  game.state = STATES.disabled;
}

const addToGuesses = (game, color) => game.userGuesses.push(color);

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

function updateHighScore(highScore) {
  const highScoreNameUI = document.getElementById("high-score-name");
  const highScoreValueUI = document.getElementById("high-score-value");

  highScoreNameUI.innerText = highScore.name;
  highScoreValueUI.innerText = highScore.score;
}

const saveHighScore = (highScore, key, storage) => (
  storage.setItem(key, JSON.stringify(highScore))
);


const checkForNewHighScore = (game, highScore) => game.score > highScore.score;


function askForHighScoreName(highScore, key, storage) {
  const nameUI = document.getElementById('high-score-name');
  nameUI.className = "hidden";
  const nameForm = document.getElementById('high-score-name-form');
  nameForm.className = "";

  function callback(e) {
    e.preventDefault();
    highScore.name = document.getElementById("high-score-name-input").value;
    saveHighScore(highScore, key, storage);
    updateHighScore(highScore);
    nameForm.className = "hidden";
    nameUI.className = "";
    nameForm.removeEventListener("submit", callback);
  };

  nameForm.addEventListener("submit", callback);
}

function loadHighScore(key, storage) {
  let highScore = {
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
