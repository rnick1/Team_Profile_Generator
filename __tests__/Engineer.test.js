const Engineer = require("../lib/engineer");
const Employee = require('../lib/employee');

describe("Engineer", () => {
    test("getName method collects the engineer's name from the user.", () => {
        const engineer = new Engineer('John', '3', 'john@fakemail.com', 'rjohn5');

        expect(engineer.name).toEqual(expect.any(String))
        expect(engineer.name).toEqual('John')
    })

    test("getID method collects the engineer's ID from the user.", () => {
        const engineer = new Engineer('John', '3', 'john@fakemail.com', 'rjohn5');

        expect(engineer.id).toEqual(expect.any(String))
        expect(engineer.id).toEqual('3')
    })

    test("getEmail method collects the engineer's email from the user.", () => {
        const engineer = new Engineer('John', '3', 'john@fakemail.com', 'rjohn5');

        expect(engineer.email).toEqual(expect.any(String))
        expect(engineer.email).toEqual('john@fakemail.com')
    })
    test("should create an engineer object", () => {
        const engineer = new Engineer('John', '3', 'john@fakemail.com', 'rjohn5');

        expect(engineer.github).toEqual(expect.any(String));
        expect(engineer.github).toEqual('rjohn5')
        expect(engineer.getGitHub()).toEqual('rjohn5')
    })
})