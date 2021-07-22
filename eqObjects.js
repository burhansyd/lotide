const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${actual} !== ${expected}`);
  }
};

const eqArrays = function(arr1, arr2) {
  let count = 0;
  for (let ele1 of arr1) {
    for (let ele2 of arr2) {
      if (arr1.length === arr2.length && ele1 === ele2 && arr1.indexOf(ele1) === arr2.indexOf(ele2)) {
        count += 1;
      }
    }
  }
  return count;
};

const eqObjects = function(object1, object2) {
  let count = 0;
  for (const x in object1) {
    if (Array.isArray(object1[x]) && Array.isArray(object2[x]) && Object.keys(object1).length === Object.keys(object2).length) {
      count = eqArrays(object1[x], object2[x]);
    } else if (Object.keys(object1).length === Object.keys(object2).length && object1[x] === object2[x]) {
      count += 1;
    }
  }
  if (count === Object.keys(object1).length) {
    return true;
  } else {
    return false;
  }
};

// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba), true); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc), false); // => false

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false
