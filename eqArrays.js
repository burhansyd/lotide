const eqArrays = function(arr1, arr2) {
  let count = 0;
  for (let ele1 of arr1) {
    for (let ele2 of arr2) {
      if (arr1.length === arr2.length && ele1 === ele2 && arr1.indexOf(ele1) === arr2.indexOf(ele2)) {
        count += 1;
      }
    }
  }
  if (count === arr1.length) {
    return true;
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${actual} !== ${expected}`);
  }
};

eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
eqArrays(["1", "2", "3"], ["1", "2", 3]); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS