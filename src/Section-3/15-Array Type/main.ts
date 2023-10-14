const myNumberArray: Array<number> = [1, 2, 3, 4, 5];
const myStringArray: string[] = ["one", "two", "three", "four", "five"];
const myArray: (string | number | undefined | null)[] = [
  "one",
  2,
  "three",
  4,
  "five",
  "undefined =>",
  undefined,
  "null =>",
  null,
];
const myNestedArray: (number | string)[][] = [
  [1, 2, 3, 4],
  ["one", "two"],
];
console.log(`*** Array Type`);
console.log(`*** myNumberArray: ${myNumberArray}`);
console.log(`*** myStringArray: ${myStringArray}`);
console.log(`*** myArray: ${myArray}`);
console.log(`*** myNestedArray: ${myNestedArray}`);
console.log(``);
