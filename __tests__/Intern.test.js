const Intern = require("../lib/intern");
const Employee = require('../lib/employee');

describe("Intern", () => {
    // Add instanceof test
    test("getName method collects the intern's name from the user.", () => {
        const intern = new Intern('John', '3', 'john@fakemail.com', 'UW');

        expect(intern.name).toEqual(expect.any(String))
        expect(intern.name).toEqual('John')
    })

    test("getID method collects the intern's name from the user.", () => {
        const intern = new Intern('John', '3', 'john@fakemail.com', 'UW');

        expect(intern.id).toEqual(expect.any(String))
        expect(intern.id).toEqual('3')
    })

    test("getEmail method collects the intern's name from the user.", () => {
        const intern = new Intern('John', '3', 'john@fakemail.com', 'UW');

        expect(intern.email).toEqual(expect.any(String))
        expect(intern.email).toEqual('john@fakemail.com')
    })
    test("should create an intern object", () => {
        const intern = new Intern('John', '3', 'john@fakemail.com', 'UW');

        expect(intern.school).toEqual(expect.any(String));
        expect(intern.school).toEqual('UW')
        expect(intern.getSchool()).toEqual('UW')
    })
})