class Engineer {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, office) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = this.github;
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