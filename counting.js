


function countLetters(letters) {
  var letters = letters.split(" ").join("");
  var counted = {};
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];

    if (letter in counted) {
      counted[letter] += 1;
    } else {
      counted[letter] = 1;
    }
  }
  console.log(counted);
}

countLetters("lighthouse in the house");




