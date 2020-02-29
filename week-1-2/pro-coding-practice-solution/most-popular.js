/* Find most popular letter in word (if tied, first to reach tie) */

function mostPopular(word) {
  let counts = {};
  let highCount = 0;
  let highLetter;

  for (let letter of word) {
    const currCount = counts[letter] || 0;
    const newCount = currCount + 1;
    counts[letter] = newCount;

    if (newCount > highCount) {
      highCount = newCount;
      highLetter = letter;
    }
  }

  return highLetter;
}
