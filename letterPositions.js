const letterPositions = function(string) {
  posLetter = {};
  for (let letter of string) {
    posLetter[letter] = [];
  }
  for (let i = 0; i < string.length; i++) {
    posLetter[string[i]].push(i);
  }
  delete posLetter[" "];
  return posLetter;
};

console.log(letterPositions("my name is"));