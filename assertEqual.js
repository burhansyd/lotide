// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return String.fromCodePoint(0x1F911) + ` Assertion Passed: ${actual} === ${expected}`;
  } else {
    return String.fromCodePoint(0x1F923) + ` Assertion failed: ${actual} !== ${expected}`;
  }
};

module.exports = assertEqual;

