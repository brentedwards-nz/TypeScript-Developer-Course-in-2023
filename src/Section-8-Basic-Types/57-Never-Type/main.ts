console.log(`*** Never Type`);

function neverFunction(): never {
  console.log("*** voidFunction()");
  while (true) {
    console.log("*** voidFunction()");
  }
}

const neverValue = voidFunction();
console.log(`*** returnValue: ${returnValue}`);
console.log(``);
