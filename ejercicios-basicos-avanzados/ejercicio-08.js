const avengers = [
  "Hulk",
  "Thor",
  "Iron Man",
  "Captain A.",
  "Spiderman",
  "Captain M.",
];

function findLongestWord(stringList) {
  while (stringList.length > 1) {
    if (stringList[0].length > stringList[1].length || stringList[0].length === stringList[1].length) {
      stringList.splice(1, 1);
    } else if (stringList[0].length < stringList[1].length) {
      stringList.splice(0, 1);
    }
  }
  console.log(`La palabra más larga es ${stringList[0]}`);
};

findLongestWord(avengers);