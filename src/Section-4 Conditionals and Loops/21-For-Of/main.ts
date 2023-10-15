console.log(`*** for of`);

const numbers: (number | string)[] = [10, "ten", 20, "twenty", 30, "thirty"];
for (let number of numbers.entries()) {
  console.log(`*** interation idx: ${number[0]}, value:${number[1]}`);
}

console.log(``);
for (let [idx, value] of numbers.entries()) {
  console.log(`*** interation idx: ${idx}, value:${value}`);
}

console.log(``);
