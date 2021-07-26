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

module.exports = middle;
