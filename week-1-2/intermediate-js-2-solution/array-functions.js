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
};

function reduce(array, callback, initialValue) {
  let index = 0;
  let acc = initialValue;
  if (acc === undefined) {
    acc = array[0];
    index = 1;
  }

  for (; index < array.length; index++) {
    acc = callback(acc, array[index], index, array);
  }

  return acc;
}


/*
 Map tests
*/
describe('map', function() {
  it('should return a new array when invoked', function() {
    const arr = [1,2,3];
    let res = map(arr, item => item);
    expect(arr !== res).toBe(true);
    expect(res.length).toBe(3);
    expect(res[0]).toBe(1);
    expect(res[1]).toBe(2);
    expect(res[2]).toBe(3);
  });

  it('should pass the item, the index and the array itself to the callback', function() {
    const arr = ["Whiskey","Lane"];
    let count = 0;
    function cb(item, idx, array) {
      expect(array.length).toBe(2);
      expect(array).toBe(arr);
      if (count == 0) {
        expect(item).toBe("Whiskey");
        expect(idx).toBe(0);
      }
      if (count == 1) {
        expect(item).toBe("Lane");
        expect(idx).toBe(1);
      }
      count++;
      return idx;
    }
    let res = map(arr, cb);
    expect(res[0]).toBe(0);
    expect(res[1]).toBe(1);
  });

  it("should return a mapped array", function() {
    const nums = [1,2,3];
    const expected = ['E', 'EE', 'EEE'];
    const makeEs = item => Array(item).fill('E').join('');
    const lotsOfEs = map(nums, makeEs)
    expect(lotsOfEs.length).toEqual(3);
    for (let i in lotsOfEs) {
      expect(lotsOfEs[i]).toEqual(expected[i]);
    }
  });
});


/*
  Filter tests
*/
describe("filter", function() {
  it("should return a filtered array", function() {
    const vals = ['apple', 'pie', 'moxie', 'whiskey'];
    const res = filter(vals, () => false);
    expect(res.length).toBe(0);
  });

  it("should give me the index as well", function() {
    const nums = [2,4,5,6,7,8,11,13,15];
    const numsRes = [2,5,7,11,15];
    const res = filter(nums, (val, idx) => idx % 2 === 0);
    expect(res).not.toBe(undefined);
    expect(res.length).toBe(numsRes.length);
    for (let i in numsRes) {
      expect(numsRes[i]).toBe(res[i]);
    }
  });

  it("should work on strings", function() {
    const vals = ['apple', 'pie', 'moxie', 'whiskey'];
    const valsRes = ['apple', 'pie'];
    const res = filter(vals, v => v.includes('p'));
    expect(res).not.toBe(undefined);
    expect(res.length).toBe(valsRes.length);
    for (let i in valsRes) {
      expect(valsRes[i]).toBe(res[i]);
    }
  })
});


/*
  Reduce tests
*/
describe("reduce", function() {
  it("should return my accumulator that I set", function() {
    const cb = acc => acc;
    const array = [1,2,4,5];
    let initial = {test: "testing"};
    expect(reduce(array, cb, initial)).toBe(initial);
  });

  it("should use the default accumulator and skip the first index", function() {
    const vals = [4,5,6,7];
    const expectedRes = 22;
    const cb = function(acc, item, idx) {
      expect(idx).not.toBe(0);
      return acc + item;
    };

    const res = reduce(vals, cb);
    expect(res).toBe(expectedRes);
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
