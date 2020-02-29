/* Givent a string the funciton returns the most frequent letter. If there is a tie the first letter that reach the tie is returned.*/
function mostPopular(str) {
  let ltrTable = {};
  let highestFreqCount = 0;
  let mostFreqLtr;
  for (let letter of str) {
    const count = ltrTable[letter] || 0;
    const newCount = count + 1;
    ltrTable[letter] = newCount;
    if (newCount > highestFreqCount) {
      highestFreqCount = newCount;
      mostFreqLtr = letter;
    }
  }
  return mostFreqLtr;
}
