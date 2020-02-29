/* Returns array of scores when array of words is input. Returns null for score if charUpperacter in word is not a letter. */
function wordScores(words) {
  let scoreArr = [];
  for (let word of words) {
    let score = 0;
    for (let char of word) {
      let charUpper = char.toUpperCase();
      if(scoreTable[charUpper] === undefined) {
        score = null;
        break;
      }
      score += scoreTable[charUpper];
    }
    scoreArr.push(score);
  }
  return scoreArr;
}

let scoreTable = {
  A: 1,
  B: 3,
  C: 3,
  D: 2,
  E: 1,
  F: 4,
  G: 2,
  H: 4,
  I: 1,
  J: 8,
  K: 5,
  L: 1,
  M: 3,
  N: 1,
  O: 1,
  P: 3,
  Q: 10,
  R: 1,
  S: 1,
  T: 1,
  U: 1,
  V: 4,
  W: 4,
  X: 8,
  Y: 4,
  Z: 10
};
