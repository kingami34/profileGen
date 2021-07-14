class employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, office) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.getName = getName;
      this.getId = getId;
      this.getEmail = getEmail;
    }
  
    printTeam() {
      console.log(`name: ${this.name}`);
      console.log(`id: ${this.id}`);
      console.log(`email: ${this.email}`);
      console.log(`getName: ${this.getName}`);
      console.log(`getId: ${this.getId}`);
      console.log(`getEmail: ${this.getEmail}`);
    }
  }
  
  const employee = new Employee(name, id, email, office);
  
  employee.printTeam();