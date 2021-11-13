const Engineer = require("../lib/Engineer");

describe ("Engineer", () => {
    it ("should extend employee class", () => {
        const employee = new Engineer('Carl', 77, '4518gg@gmail.com', 'carlsantiago')

        expect(employee).toEqual(Object(employee));

    })
});

describe ("get engineer github", () => {
    it ("should return the engineer's github", () => {
        const employee = new Engineer('Carl', 77, '4518gg@gmail.com', 'carlsantiago')

        expect(employee.github).toBe('carlsantiago');

    })
});

describe ("get role", () => {
    it ("should return the employee role", () => {
        const employee = new Engineer('Carl', 77, '4518gg@gmail.com', 'carlsantiago')

        expect(employee.getRole()).toBe("engineer");

    })
});