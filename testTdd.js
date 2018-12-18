// const helloWorld = require('./tdd.js');

// describe('Hello World', function() {
//   it('says hello world', function() {
//     expect(helloWorld()).toEqual('Hello, World!');
//   });
// });

// const repeatString = require('./tdd.js')

// describe('repeatString', function() {
//   xit('repeats the string', function() {
//     expect(repeatString('hey', 3)).toEqual('heyheyhey');
//   });
//   xit('repeats the string many times', function() {
//     expect(repeatString('hey', 10)).toEqual('heyheyheyheyheyheyheyheyheyhey');
//   });
//   xit('repeats the string 1 times', function() {
//     expect(repeatString('hey', 1)).toEqual('hey');
//   });
//   it('repeats the string 0 times', function() {
//     expect(repeatString('hey', 0)).toEqual('');
//   });
//   xit('returns ERROR with negative numbers', function() {
//     expect(repeatString('hey', -1)).toEqual('ERROR');
//   });
// });

// const reverseString = require('./tdd.js')

// describe('reverseString', function() {
//   xit('reverses single word', function() {
//     expect(reverseString('hello')).toEqual('olleh');
//   });

//   xit('reverses multiple words', function() {
//     expect(reverseString('hello there')).toEqual('ereht olleh')
//   })

//   it('works with numbers and punctuation', function() {
//     expect(reverseString('123! abc!')).toEqual('!cba !321')
//   })
// });


// const removeFromArray = require('./removeFromArray')

// describe('removeFromArray', function() {
//   it('removes a single value', function() {
//     expect(removeFromArray([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
//   });
//   xit('removes multiple values', function() {
//     expect(removeFromArray([1, 2, 3, 4], 3, 2)).toEqual([1, 4]);
//   });
//   xit('ignores non present values', function() {
//     expect(removeFromArray([1, 2, 3, 4], 7, "tacos")).toEqual([1, 2, 3, 4]);
//   });
//   xit('ignores non present values, but still works', function() {
//     expect(removeFromArray([1, 2, 3, 4], 7, 2)).toEqual([1, 3, 4]);
//   });
//   xit('can remove all values', function() {
//     expect(removeFromArray([1, 2, 3, 4], 1, 2, 3, 4)).toEqual([]);
//   });
//   xit('works with strings', function() {
//     expect(removeFromArray(["hey", 2, 3, "ho"], "hey", 3)).toEqual([2, "ho"]);
//   });
// });

// const sumAll = require('./tdd.js')

// describe('sumAll', function() {
//   xit('sums numbers within the range', function() {
//     expect(sumAll(1, 4)).toEqual(10);
//   });
//   xit('works with large numbers', function() {
//     expect(sumAll(1, 4000)).toEqual(8002000);
//   });
//   xit('works with larger number first', function() {
//     expect(sumAll(123, 1)).toEqual(7626);
//   });
//   xit('returns ERROR with negative numbers', function() {
//     expect(sumAll(-10, 4)).toEqual('ERROR');
//   });
//   it('returns ERROR with non-number parameters', function() {
//     expect(sumAll(10, "90")).toEqual('ERROR');
//   });
//   xit('returns ERROR with non-number parameters', function() {
//     expect(sumAll(10, [90, 1])).toEqual('ERROR');
//   });
// });


// const leapYears = require('./tdd.js')

// describe('leapYears', function() {
//   xit('works with non century years', function() {
//     expect(leapYears(1996)).toEqual(true);
//   });
//   xit('works with non century years', function() {
//     expect(leapYears(1997)).toEqual(false);
//   });
//   xit('works with ridiculously futuristic non century years', function() {
//     expect(leapYears(34992)).toEqual(true);
//   });
//   xit('works with century years', function() {
//     expect(leapYears(1900)).toEqual(false);
//   });
//   xit('works with century years', function() {
//     expect(leapYears(1600)).toEqual(true);
//   });
//   it('works with century years', function() {
//     expect(leapYears(700)).toEqual(false);
//   });
// });


const {ftoc, ctof} = require('./tdd.js')

describe('ftoc', function() {
  xit('works', function() {
    expect(ftoc(32)).toEqual(0);
  });
  xit('rounds to 1 decimal', function() {
    expect(ftoc(100)).toEqual(37.8);
  });
  xit('works with negatives', function() {
    expect(ftoc(-100)).toEqual(-73.3);
  });
});

describe('ctof', function() {
  xit('works', function() {
    expect(ctof(0)).toEqual(32);
  });
  xit('rounds to 1 decimal', function() {
    expect(ctof(73.2)).toEqual(163.8);
  });
  it('works with negatives', function() {
    expect(ctof(-10)).toEqual(14);
  });
});