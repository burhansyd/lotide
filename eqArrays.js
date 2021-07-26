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

module.exports = eqArrays;