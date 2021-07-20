class Intern{
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, school) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.school= this.school;
    }
  
    printTeam() {
      console.log(`name: ${this.name}`);
      console.log(`id: ${this.id}`);
      console.log(`email: ${this.email}`);
      console.log(`office: ${this.school}`);
    }
  }
  module.exports = Intern
  // const intern = new Intern(name, id, email, school);
  
  // intern.printTeam()