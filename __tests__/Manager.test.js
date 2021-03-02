const Manager = require("../lib/manager");
const Employee = require('../lib/employee');

describe("Manager", () => {
    test("should create an manager object", () => {
        const officeNumber = new Manager('4');

        expect(this.officeNumber).toEqual(expect.any(String));
        expect(this.officeNumber).toEqual('4')
    })
})