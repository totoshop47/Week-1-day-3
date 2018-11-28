function positionLetters(letters) {
  var letters = letters.split(" ").join("");
  var position = {};
  for (var i = 0; i < letters.length; i++) {
    var letter = letters[i];
    if (letter in position) {
      //push position index to array inside of object
      position[letter].push(i);
    } else {
      //make array inside of object
      position[letter] = [i];
    }
  }
  console.log(position);
}

positionLetters("lighthouse in the house");


// {
//   l: [0],
//   i: [1, 10],
//   g: [2],
//   h: [3, 5, 13, 15],
//   t: [4, 12],
//   o: [6, 16],
//   u: [7, 17],
//   s: [8, 18],
//   e: [9, 14, 19],
//   n: [11]
// }