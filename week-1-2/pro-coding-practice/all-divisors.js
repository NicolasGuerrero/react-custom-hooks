/* Given a positive whole number, return an array of all the divisors. Return an error string for non whole numbers and less than 1. */
function allDivisors(num) {
  let divisorArr = [];
  if ( num < 1 || !Number.isInteger(num)) {
      return "Please provide a positive, whole number.";
  } 
  for(let i = 1; i <= num / 2; i++) {
      if(num % i === 0) {
        divisorArr.push(i);
      }
  }
  divisorArr.push(num);
  return divisorArr;
}