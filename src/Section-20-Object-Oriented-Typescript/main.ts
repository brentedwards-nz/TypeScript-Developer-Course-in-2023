// -------------------------------------------------------------------------
console.log(`*** Creating Classes and Objects`);

interface Automation {}

class Robot {
  constructor(id: number, model: string, name: string) {
    this.id = id;
    this.model = model;
    this.name = name;
  }

  getId(): number {
    return this.id;
  }
  getModel(): string {
    return this.model;
  }
  getName(): string {
    return this.name;
  }

  doSomething(): void {
    console.log("*** Walking...");
  }

  private id: number;
  private model: string;
  private name: string;
}

const myRobot: Robot = new Robot(1, "RG123", "robot");

console.log(`*** Robot: ${myRobot}`);
console.log(`*** Robot.id: ${myRobot.getId()}`);
console.log(`*** Robot.model: ${myRobot.getModel()}`);
console.log(`*** Robot.name: ${myRobot.getName()}`);
myRobot.doSomething();

console.log(myRobot);
console.log(``);

// -------------------------------------------------------------------------
console.log(`*** This Keyword`);

console.log(``);

// -------------------------------------------------------------------------
console.log(`*** Scope`);

console.log(``);
