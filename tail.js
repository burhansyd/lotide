const assertEqual = require('./assertEqual.js')

const tail = function(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

module.exports = tail;