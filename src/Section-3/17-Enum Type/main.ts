enum NumericCase {
  Burt,
  James,
  Geoff,
  Alex,
}

enum Names {
  Burt = "Burt",
  James = "James",
  Geoff = "Geoff",
  Alex = "Alex",
}

const myNumericEnum: NumericCase = NumericCase.Alex;
const myStringEnum: Names = Names.Burt;

console.log(`*** Enum Type`);
console.log(`*** NumericCase`);
console.log(NumericCase);
console.log(`*** myNumericEnum: ${myNumericEnum}`);
console.log(`*** Names`);
console.log(Names);
console.log(`*** myStringEnum: ${myStringEnum}`);
console.log(``);
