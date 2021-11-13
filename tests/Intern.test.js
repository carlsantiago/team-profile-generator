const Intern = require("../lib/Intern");

describe ("Intern", () => {
    it ("should extend employee class", () => {
        const employee = new Intern('Carl', 77, '4518gg@gmail.com', 'UniSA')

        expect(employee).toEqual(Object(employee));

    })
});

describe ("get intern school", () => {
    it ("should return the intern's school", () => {
        const employee = new Intern('Carl', 77, '4518gg@gmail.com', 'UniSA')

        expect(employee.school).toBe('UniSA');

    })
});

describe ("get role", () => {
    it ("should return the employee role", () => {
        const employee = new Intern('Carl', 77, '4518gg@gmail.com', 'UniSA')

        expect(employee.getRole()).toBe("intern");

    })
});