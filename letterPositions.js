const letterPositions = function(string) {
  posLetter = {};
  for (let letter of string) {
    posLetter[letter] = [];
  }
  for (let letter of string) {
    posLetter[letter].push(string.indexOf(letter));
  }
  delete posLetter[" "];
  return posLetter;
};

console.log(letterPositions("hello my"));