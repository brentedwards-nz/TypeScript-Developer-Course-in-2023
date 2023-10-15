console.log(`*** Casting and Type Assertions`);

type EmployeeType = {
  id: number;
  name: string;
  dept: string;
};

// Not valid
// type EmployeeType = {
//   id: number;
//   name: string;
//   dept: string;
//   isType: boolean;
// };

interface EmployeeInterface {
  id: number;
  name: string;
  dept: string;
}

interface EmployeeInterface {
  id: number;
  name: string;
  dept: string;
  isInterface: boolean;
}

const employeeType: EmployeeType = {
  id: 1,
  name: "TYPE",
  dept: "you",
};

const employeeInterface: EmployeeInterface = {
  id: 1,
  name: "INTERFACE",
  dept: "you",
  isInterface: true,
};

console.log(`*** employeeType: ${JSON.stringify(employeeType)}`);
console.log(`*** employeeInterface: ${JSON.stringify(employeeInterface)}`);

console.log(``);
