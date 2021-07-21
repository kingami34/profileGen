const Employee = require("./Employee");

class Manager extends Employee {
  constructor(name, id, email,) {
    super(name, id, email,);
    this.office = office;
  }
  printTeam() {
    console.log(`name: ${this.name}`);
    console.log(`id: ${this.id}`);
    console.log(`email: ${this.email}`);
    console.log(`office: ${this.office}`);
  }
}

module.exports = Manager;
// const manager = new Manager(name, id, email, office);

// manager.printTeam();
