const Employee = require("../lib/Employee");

describe ("Employee", () => {
    it ("should return an employee object", () => {
        const employee = new Employee('Carl', 77, '4518gg@gmail.com')

        expect(employee.name).toEqual(expect.any(String));
        expect(employee.id).toEqual(expect.any(Number));
        expect(employee.email).toEqual(expect.any(String));

    })
});

describe ("get employee name", () => {
    it ("should return the employee name", () => {
        const employee = new Employee('Carl', 77, '4518gg@gmail.com')

        expect(employee.getName()).toBe('Carl');

    })
});
describe ("get employee id", () => {
    it ("should return the employee id", () => {
        const employee = new Employee('Carl', 77, '4518gg@gmail.com')

        expect(employee.getId()).toBe(77);

    })
});

describe ("get employee email", () => {
    it ("should return the employee email", () => {
        const employee = new Employee('Carl', 77, '4518gg@gmail.com')

        expect(employee.getEmail()).toEqual('4518gg@gmail.com');

    })
});

describe ("get role", () => {
    it ("should return the employee role", () => {
        const employee = new Employee('Carl', 77, '4518gg@gmail.com')

        expect(employee.getRole()).toBe("Employee");

    })
});