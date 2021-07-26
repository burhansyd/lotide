const eqArrays = require('./eqArrays.js');

const assertArraysEqual = function(arr1, arr2) {
  if (eqArrays(arr1, arr2) === true) {
    console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${arr1} !== ${arr2}`);
  }
};

module.exports = assertArraysEqual;