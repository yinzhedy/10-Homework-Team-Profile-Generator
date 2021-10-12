class engineer {
    constructor(name, id, email, github) {
        // github username
      this.name = name;
      this.id = id;
      this.email = email;
      this.github = github;
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
    getGithub() {
        return this.github;
    //   getRole returns Engineer
    }
    getRole() {
        return "Engineer";
      }
  }

  module.export = engineer;