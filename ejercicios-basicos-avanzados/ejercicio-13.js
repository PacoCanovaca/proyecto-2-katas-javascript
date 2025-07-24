const names = [
  "Peter",
  "Steve",
  "Tony",
  "Natasha",
  "Clint",
  "Logan",
  "Xabier",
  "Bruce",
  "Peggy",
  "Jessica",
  "Marc",
];

function nameFinder(nameList, nameSearched) {
  let nameCheck = false;
  let namePosition;
  for (let i = 0; i < nameList.length; i++) {
    if (nameSearched === nameList[i]) {
      nameCheck = true;
      namePosition = i;
    }
  }
  if (nameCheck == true) {
    console.log(`True, Position ${namePosition}`);
  } else {
    console.log(`False`);
  }
}

nameFinder(names, "Tony");
nameFinder(names, "William");
