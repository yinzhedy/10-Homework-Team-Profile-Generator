class intern {
    constructor(name, id, email, school) {
        // github username
      this.name = name;
      this.school = school;
      this.email = email;
      this.id = id;
    }
    getName() {
      return this.name;
    }
    getId() {
      return this.id;
    }
    getEmail() {
      return this.email;
    }
    getSchool() {
      return this.school;
    }
    //   getRole returns Intern
    getRole() {
      return "Intern";
    }
  
  }

module.export = intern;