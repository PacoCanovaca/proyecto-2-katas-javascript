const capitals = {
  Spain: "Madrid",
  France: "Paris",
  Italy: "Rome",
  Germany: "Berlin",
  Portugal: "Lisbon",
  Poland: "Warsaw",
  Greece: "Athens",
  Austria: "Vienna",
  Hungary: "Budapest",
  Ireland: "Dublin",
};

function getCapital(country) {
  switch (country) {
    case capitals.Spain:
      console.log(capitals.Spain);
      break;
    case capitals.France:
      console.log(capitals.France);
      break;
    case capitals.Italy:
      console.log(capitals.Italy);
      break;
    case capitals.Germany:
      console.log(capitals.Germany);
      break;
    case capitals.Portugal:
      console.log(capitals.Portugal);
      break;
    case capitals.Poland:
      console.log(capitals.Poland);
      break;
    case capitals.Greece:
      console.log(capitals.Greece);
      break;
    case capitals.Austria:
      console.log(capitals.Austria);
      break;
    case capitals.Hungary:
      console.log(capitals.Hungary);
      break;
    case capitals.Ireland:
      console.log(capitals.Ireland);
      break;
    default:
      console.log(`Error. Country not found`);
      break;
  }
}

getCapital(capitals.Spain);

getCapital(capitals.Greece);

getCapital(capitals.Hungary);

getCapital(capitals.England); //Error
