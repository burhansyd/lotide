// const eqArrays = function(arr1, arr2) {
//   let count = 0;
//   for (let ele1 of arr1) {
//     for (let ele2 of arr2) {
//       if (arr1.length === arr2.length && ele1 === ele2 && arr1.indexOf(ele1) === arr2.indexOf(ele2)) {
//         count += 1;
//       }
//     }
//   }
//   return count;
// };


// const assertArraysEqual = function(arr1, arr2) {
//   if (eqArrays(arr1, arr2) === arr1.length) {
//     console.log(String.fromCodePoint(0x1F911) + ` Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(String.fromCodePoint(0x1F923) + ` Assertion failed: ${arr1} !== ${arr2}`);
//   }
// };

const middle = function(arr) {
  let newArr = [];
  let oddIndex = (arr.length / 2) - 0.5;
  let evenIndex1 = (arr.length / 2) - 1;
  let evenIndex2 = arr.length / 2;
  if (arr.length <= 2) {
    return [];
  }
  if (arr.length % 2 == 1) {
    newArr.push(arr[oddIndex]);
  } else {
    newArr.push(arr[evenIndex1], arr[evenIndex2]);
  }
  return newArr;
}

console.log(middle([1])) // => []
console.log(middle([1, 2])) // => []
console.log(middle([1, 2, 3])) // => [2]
console.log(middle([1, 2, 3, 4, 5])) // => [3]
console.log(middle([1, 2, 3, 4])) // => [2, 3]
console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]
