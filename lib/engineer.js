class Engineer extends Employee {
    constructor(name, id, email) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;
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

    getGitHub(github) {
        if (typeof github == "github") {
            throw new Error("This must be a string")
        }
        this.github = github
    }
}

module.exports = Engineer;