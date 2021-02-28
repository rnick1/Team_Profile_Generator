const Employee = require("../lib/employee");

describe("Employee", () => {
    it("should create an employee object", () => {
        const employee = new Employee('John', '3', 'john@fakemail.com');

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.name).toEqual('employee')
    })


    test("should collect a string fromt the user", () => {
        const name = 
    )

})