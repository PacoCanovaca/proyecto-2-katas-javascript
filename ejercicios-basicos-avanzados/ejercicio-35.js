const mutants = [
  { name: "Wolverine", power: "regeneration" },
  { name: "Magneto", power: "magnetism" },
  { name: "Professor X", power: "telepathy" },
  { name: "Jean Grey", power: "telekinesis" },
  { name: "Rogue", power: "power absorption" },
  { name: "Storm", power: "weather manipulation" },
  { name: "Mystique", power: "shape-shifting" },
  { name: "Beast", power: "superhuman strength" },
  { name: "Colossus", power: "steel skin" },
  { name: "Nightcrawler", power: "teleportation" },
];

function findMutantByPower(mutantsList, power) {
  const mutantsWithPower = [];
  for (const mutant of mutantsList) {
    if (mutant.power === power) {
      mutantsWithPower.push(mutant.name);
    }
  }
  if (mutantsWithPower.length === 0) {
    console.log(`Error. Mutant with ${power} not found`);
  } else {
    console.log(`Mutants with ${power}: ${mutantsWithPower}`);
  }
}

findMutantByPower(mutants, "steel skin");
findMutantByPower(mutants, "weather manipulation");
findMutantByPower(mutants, "magnetism");
findMutantByPower(mutants, "invisibility");
