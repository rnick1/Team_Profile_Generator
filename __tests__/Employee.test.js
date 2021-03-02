const Employee = require("../lib/employee");

describe("Employee", () => {
    test("should create an employee object", () => {
        const employee = new Employee('John', '3', 'john@fakemail.com');

        expect(employee instanceof Employee).toEqual(true);
    })

    test("getName method collects the employee's name from the user.", () => {
        const employee = new Employee('John', '3', 'john@fakemail.com');

        expect(employee.name).toEqual(expect.any(String))
        expect(employee.name).toEqual('John')
    })

    test("getID method collects the employee's name from the user.", () => {
        const employee = new Employee('John', '3', 'john@fakemail.com');

        expect(employee.id).toEqual(expect.any(String))
        expect(employee.id).toEqual('3')
    })

    test("getEmail method collects the employee's name from the user.", () => {
        const employee = new Employee('John', '3', 'john@fakemail.com');

        expect(employee.email).toEqual(expect.any(String))
        expect(employee.email).toEqual('john@fakemail.com')
    })
})