it("should return an array of all divisors", function() {
  expect(allDivisors(1)).toEqual([1]);
  expect(allDivisors(2)).toEqual([1, 2]);
  expect(allDivisors(6)).toEqual([1, 2, 3, 6]);
  expect(allDivisors(16)).toEqual([1, 2, 4, 8, 16]);
  expect(allDivisors(140))
    .toEqual([1, 2, 4, 5, 7, 10, 14, 20, 28, 35, 70, 140]);
  expect(allDivisors(2310))
    .toEqual([
      1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 21, 22, 30,
      33, 35, 42, 55, 66, 70, 77, 105, 110, 154, 165,
      210, 231, 330, 385, 462, 770, 1155, 2310
    ]);
});

it("should handle non-positive numbers", function() {
  expect(allDivisors(0)).toEqual("Please provide a positive, whole number.");
  expect(allDivisors(-100)).toEqual("Please provide a positive, whole number.");
});

it("should handle non-whole numbers", function() {
  expect(allDivisors(1.4)).toEqual("Please provide a positive, whole number.");
  expect(allDivisors(Math.PI)).toEqual("Please provide a positive, whole number.");
  expect(allDivisors(-12.2352)).toEqual("Please provide a positive, whole number.");
});
