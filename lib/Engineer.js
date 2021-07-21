const Employee = require("./Employee");

  class Engineer extends Employee {
      constructor(name, id, email, github){
        super(name, id, email,);
        this.github = github;
      }
      printTeam() {
        console.log(`name: ${this.name}`);
        console.log(`id: ${this.id}`);
        console.log(`email: ${this.email}`);
        console.log(`office: ${this.github}`);
      }
  }
  
  module.exports = Engineer
  // const manager = new Manager(name, id, email, github);
  
  // engineer.printTeam();