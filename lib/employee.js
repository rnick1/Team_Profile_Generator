class Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName(name) {
        if (typeof name == "number") {
            throw new Error("This must be a string")
        }
        this.name = name
    }

    getID(id) {
        if (typeof id == "number") {
            throw new Error("This must be a string")
        }
        this.id = id
    }

    getEmail(email) {
        if (typeof email == "number") {
            throw new Error("This must be a string")
        }
        this.email = email
    }
}

module.exports = Employee;