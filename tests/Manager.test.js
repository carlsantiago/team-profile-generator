const Manager = require("../lib/Manager");

describe ("Manager", () => {
    it ("should extend employee class", () => {
        const employee = new Manager('Carl', 77, '4518gg@gmail.com', 1)

        expect(employee).toEqual(Object(employee));

    })
});

describe ("get manager office number", () => {
    it ("should return the manager's office number", () => {
        const employee = new Manager('Carl', 77, '4518gg@gmail.com', 1)

        expect(employee.officeNumber).toBe(1);

    })
});

describe ("get role", () => {
    it ("should return the employee role", () => {
        const employee = new Manager('Carl', 77, '4518gg@gmail.com', 1)

        expect(employee.getRole()).toBe("manager");

    })
});