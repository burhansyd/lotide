const eqArrays = function(arr1, arr2) {
  let count = 0;
  for (let ele1 of arr1) {
    for (let ele2 of arr2) {
      if (arr1.length === arr2.length && ele1 === ele2 && arr1.indexOf(ele1) === arr2.indexOf(ele2)) {
        return count += 1;
      }
    }
  }
};


const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === arr1.length) {
    console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${arr1} !== ${arr2}`);
  }
};