console.log(`*** casting`);
interface MyInterface {
  name: string;
  age: number;
}
const myObject: MyInterface = {
  name: "Brent",
  age: 51,
};
console.log(`*** object: ${myObject}`);
const myObjectAsString: string = JSON.stringify(myObject);
console.log(`*** string: ${myObjectAsString}`);
const myObjectAsObject = JSON.parse(myObjectAsString) as MyInterface;
console.log(`*** as object: ${myObjectAsObject}`);
console.log(myObjectAsObject);
console.log(``);

console.log(`*** Generic Array`);
const myGenericArray: Array<number> = [1, 2, 3];
console.log(`*** myGenericArray: ${myGenericArray}`);
console.log(``);

console.log(`*** Generic Functions`);
function getItem<T>(value: Array<T>, index: number): T {
  return value[index];
}

const return1 = getItem<number>([0, 1, 2, 3, 4], 1);
console.log(`*** return1: ${return1}`);
const return2 = getItem<string>(["0", "1", "2", "3", "4"], 2);
console.log(`*** return2: ${return2}`);
const return3 = getItem<boolean>([true, false, true, false, true], 3);
console.log(`*** return3: ${return3}`);

console.log(``);

console.log(`*** Generic Objects`);
type Shape<T, U> = {
  front: T;
  back: U;
};

const myStringShape: Shape<string, boolean> = {
  front: "Circle",
  back: true,
};
console.log(myStringShape);

const myNumberShape: Shape<number, string> = {
  front: 10,
  back: "20",
};
console.log(myNumberShape);

console.log(``);

console.log(`*** Generic Function Inference`);

const getArrayLength = <T>(elements: T[]) => {
  return elements.length;
};

const arrayLength = getArrayLength([1, "2", true, 4, 5]);
console.log(`*** arrayLength: ${arrayLength}`);
console.log(``);

console.log(`*** Generic Function types`);
type FunctionSignature<T, U> = (param1: T, param2: U[]) => U[];

const myFunc: FunctionSignature<number, boolean> = (param1, param2) => {
  let result: boolean[] = [];

  for (let idx: number = 0; idx < param1; idx++) {
    if (idx % 2 == 0) {
      result[idx] = param2[idx];
    }
  }

  return result;
};

const r = myFunc(8, [
  false,
  true,
  false,
  true,
  true,
  false,
  true,
  false,
  true,
  true,
]);
console.log(r);

console.log(``);

console.log(`*** Generic Sets`);
console.log(``);
