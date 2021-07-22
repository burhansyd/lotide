const countLetter = function(str) {
  let letterCount = {};
  for (let alpha of str) {
    letterCount[alpha] = 0;
  }
  for (let alpha of str) {
    if (alpha !== " ") {
      letterCount[alpha] += 1;
    }
  }
  delete letterCount[" "];
  return letterCount;
};

console.log(countLetter("hello my name is burhan"));