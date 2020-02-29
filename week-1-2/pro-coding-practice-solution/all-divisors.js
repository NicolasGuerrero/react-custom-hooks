/* Calculate all of the divisors for a given whole number. */

function allDivisors(num) {
  if (num < 1 || num % 1 !== 0) {
    return "Please provide a positive, whole number.";
  }
  let divisors = [];
  for (let smallerNum = 1; smallerNum <= num; smallerNum++) {
    if (num % smallerNum === 0) {
      divisors.push(smallerNum);
    }
  }
  return divisors;
}
