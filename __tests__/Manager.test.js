const Manager = require("../lib/manager");
const Employee = require('../lib/employee');

describe("Manager", () => {
    test("getName method collects the manager's name from the user.", () => {
        const manager = new Manager('John', '3', 'john@fakemail.com', '4');

        expect(manager.name).toEqual(expect.any(String))
        expect(manager.name).toEqual('John')
    })

    test("getID method collects the manager's ID from the user.", () => {
        const manager = new Manager('John', '3', 'john@fakemail.com', '4');

        expect(manager.id).toEqual(expect.any(String))
        expect(manager.id).toEqual('3')
    })

    test("getEmail method collects the manager's email from the user.", () => {
        const manager = new Manager('John', '3', 'john@fakemail.com', '4');

        expect(manager.email).toEqual(expect.any(String))
        expect(manager.email).toEqual('john@fakemail.com')
    })
    test("should create a manager object", () => {
        const manager = new Manager('John', '3', 'john@fakemail.com', '4');

        expect(manager.officeNumber).toEqual(expect.any(String));
        expect(manager.officeNumber).toEqual('4')
        expect(manager.getOfficeNumber()).toEqual('4')
    })
})