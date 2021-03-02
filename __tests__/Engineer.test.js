const Engineer = require("../lib/engineer");
const Employee = require('../lib/employee');

describe("Engineer", () => {
    test("should create an engineer object", () => {
        const engineer = new Engineer('rjohn3');

        expect(this.github).toEqual(expect.any(String));
        expect(this.github).toEqual('rjohn3')
    })
})