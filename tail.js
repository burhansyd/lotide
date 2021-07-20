const assertEqual = function(actual, expected) {
  let count = 0;
  if (actual.length === expected.length) {
    for (let i = 0; i < actual.length; i++) {
      if (actual[i] === expected[i]) {
        count += 1;
      }
    }
    if (count === actual.length) {
      console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${actual} === ${expected}`);
    } else {
      console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${actual} !== ${expected}`);
    }
  } else {
    console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${actual} !== ${expected}`);
  }
};

let newArr = [];

const tail = function(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};



assertEqual(tail(["Hello", "Lighthouse", "Labs"]), "Hello");