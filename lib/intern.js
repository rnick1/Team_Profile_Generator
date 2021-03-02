const Employee = require('../lib/employee');

class Intern extends Employee {
    constructor(name, id, email) {
        // this.name = name;
        // this.id = id;
        // this.email = email;
        this.school = school
    }

    // getName(name) {
    //     if (typeof name == "number") {
    //         throw new Error("This must be a string")
    //     }
    //     this.name = name
    // }

    // getID(id) {
    //     if (typeof id == "number") {
    //         throw new Error("This must be a string")
    //     }
    //     this.id = id
    // }

    // getEmail(email) {
    //     if (typeof email == "number") {
    //         throw new Error("This must be a string")
    //     }
    //     this.email = email
    // }

    getSchool(school) {
        if (typeof school == "number") {
            throw new Error("This must be a string")
        }
        this.school = school
    }
}

module.exports = Intern;