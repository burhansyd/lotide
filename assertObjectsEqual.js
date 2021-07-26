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
  return count;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2) === Object.keys(object1).length) {
    console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else {
    console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${inspect(object1)} !== ${inspect(object2)}`);
  }
};

module.exports = assertObjectsEqual;