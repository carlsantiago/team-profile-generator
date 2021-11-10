const inquirer = require("inquirer");

class Employee {
    constructor(role){

    this.role = role;

    }

    getName(role) {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'name',
                message: `What is the ${role} name? `
            }
        ])
    }

    getId(role) {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'id',
                message: `What is the ${role} ID? `
            }
        ])
    }

    getEmail(role) {
        inquirer
        .prompt([
            {
                type: 'input',
                name: 'email',
                message: `What is the ${role} email? `
            }
        ])
    }
}

module.exports = Employee;