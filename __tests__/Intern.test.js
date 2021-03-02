const Intern = require("../lib/intern");
const Employee = require('../lib/employee');

describe("Intern", () => {
    test("should create an intern object", () => {
        const school = new Intern('UW');

        expect(this.school).toEqual(expect.any(String));
        expect(this.school).toEqual('UW')
    })
})