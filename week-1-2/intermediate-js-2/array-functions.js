function map(array, callback) {
  let res = [];
  for (let i in array) {
    res.push(callback(array[i], +i, array));
  }
  return res;
}

function filter(array, callback) {
  let res = [];
  for (let i in array) {
    if (callback(array[i], +i, array)) { res.push(array[i]); }
  }
  return res;
}

function reduce(array, callback, initialValue) {
  // To be implemented by you
}


/*
 Map tests
*/
describe('map', function() {
  it('should return a new array when invoked', function() {
  });

  it('should pass the item, the index and the array itself to the callback', function() {
  });

  it("should return a mapped array", function() {
  });
});


/*
  Filter tests
*/
describe("filter", function() {
  it("should return a filtered array", function() {
  });

  it("should give me the index as well", function() {
  });

  it("should work on strings", function() {
  });
});


/*
  Reduce tests
*/
describe("reduce", function() {
  it("should return my accumulator that I set", function() {
  });

  it("should use the default accumulator and skip the first index", function() {
  });

  it("should count vowels", function() {
    const aliQuote = "It's hard to be humble when you're as great as I am.";
    const expectedObj = {
      a: 5,
      e: 5,
      i: 2,
      o: 2,
      u: 2
    };

    const cb = function(acc, item) {
      if (item.toLowerCase() in acc) {
        acc[item.toLowerCase()]++;
      }

      return acc;
    };

    let initial = {a: 0, e: 0, i: 0, o: 0, u: 0};
    const results = aliQuote.split("").reduce(cb, initial);
    expect(Object.keys(results).length).toEqual(Object.keys(expectedObj).length);
    for (let k in results) {
      expect(results[k]).toBe(expectedObj[k]);
    }
  });
});
