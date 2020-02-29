it('should price books correctly', function () {
  expect(getPrice(books[2])).toEqual(10.80);
  expect(getPrice(books[0])).toEqual(5.40);
});

// TODO: additional tests here ...
it('should reduce number of copies in stock ', function () {
  expect(sellBook(books[3])).toEqual(3);
  //expect(sellBook(books[2])).toThrowError(userError, "Not enough copies on hand!");
  expect(function() {
    sellBook(books[2]);
  }).toThrowError("Not enough copies on hand!");
});