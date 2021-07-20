class Manager {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, office) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.office = office;
    }
  
    printTeam() {
      console.log(`name: ${this.name}`);
      console.log(`id: ${this.id}`);
      console.log(`email: ${this.email}`);
      console.log(`office: ${this.office}`);
    }
  }
  module.exports = Manager
  // const manager = new Manager(name, id, email, office);
  
  // manager.printTeam();