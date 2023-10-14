const num1: number = 10;
const num2: number = 5;
const num3: number = 15;

console.log(`*** if`);

if (num1 > num2) console.log(`*** ${num1} > ${num2}`);
if (num2 <= num1) console.log(`*** ${num2} <= ${num1}`);

if (num3 > num1 && num1 > num2)
  console.log(`*** ${num3} > ${num1} && ${num1} > ${num2}`);

num1 === num2
  ? console.log(`*** ${num1} === ${num2}`)
  : console.log(`*** ${num1} !== ${num2}`);

num1 === num1
  ? console.log(`*** ${num1} === ${num1}`)
  : console.log(`*** ${num1} !== ${num1}`);

console.log(``);
