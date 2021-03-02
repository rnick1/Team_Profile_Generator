const Employee = require('../lib/employee');

class Manager extends Employee {
    constructor(officeNumber) {

        this.officeNumber = officeNumber;
    }

    getOfficeNumber(officeNumber) {
        if (typeof officeNumber == "officeNumber") {
            throw new Error("This must be a string")
        }
        this.officeNumber = officeNumber
    }
}

module.exports = Manager;

// Maybe it should be like this?:
// const Employee = require('../lib/employee');

// class Manager extends Employee {
//     constructor(name, id, email) {
//         // this.name = name;
//         // this.id = id;
//         // this.email = email;
//         this.officeNumber = officeNumber;
//     }

//     // getName(name) {
//     //     if (typeof name == "number") {
//     //         throw new Error("This must be a string")
//     //     }
//     //     this.name = name
//     // }

//     // getID(id) {
//     //     if (typeof id == "number") {
//     //         throw new Error("This must be a string")
//     //     }
//     //     this.id = id
//     // }

//     // getEmail(email) {
//     //     if (typeof email == "number") {
//     //         throw new Error("This must be a string")
//     //     }
//     //     this.email = email
//     // }

//     getOfficeNumber(officeNumber) {
//         if (typeof officeNumber == "officeNumber") {
//             throw new Error("This must be a string")
//         }
//         this.officeNumber = officeNumber
//     }
// }

// module.exports = Manager;