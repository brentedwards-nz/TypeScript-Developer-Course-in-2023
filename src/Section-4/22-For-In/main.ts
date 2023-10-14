console.log(`*** for in`);

const data: (string | number)[] = ["Cosmos", 13, 50, "Star"];

for (const dataPoint in data) {
  console.log(`${dataPoint}, ${typeof dataPoint}, value: ${data[dataPoint]}`);
}

for (const dataPoint in data) {
  console.log(`${+dataPoint}, ${typeof +dataPoint}, value: ${data[dataPoint]}`);
}
console.log(``);
