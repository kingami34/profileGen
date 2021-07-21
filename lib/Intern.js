const Employee = require("./Employee");

class Intern extends Employee {
  constructor(name, id, email,school) {
    super(name, id, email,school );
    this.school = school;
  }
  printTeam() {
    console.log(`name: ${this.name}`);
    console.log(`id: ${this.id}`);
    console.log(`email: ${this.email}`);
    console.log(`office: ${this.school}`);
  }
}

module.exports = Intern;
// const intern = new Intern(name, id, email, school);

// intern.printTeam()
