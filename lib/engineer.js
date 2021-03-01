const Employee = require('../lib/employee');
const Engineer = require('../lib/employee');

class Engineer extends Employee {
    constructor(gitHub) {
        this.gitHub = gitHub;

        super(name, id, email);
        this.sideA = sideA;
        this.sideB = sideB;
    }
}

const engineer = new Engineer('Phil', '6', 'phil@fakemail.com');