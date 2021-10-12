class manager {
    constructor(name, id, email, officeNumber) {
      this.name = name;
      this.id = id;
      this.email = email;
      this.officeNumber = officeNumber;
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
      getOfficeNumber() {
        return this.officeNumber
      }
    //   overridden to return Manager as role
      getRole() {
        return "Manager";
      }
    }

  module.exports = manager;