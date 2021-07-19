// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${actual} !== ${expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);