const inquirer = require ('inquirer');
const fs = require ('fs');
const axios = require('axios');
const jest = require('jest');

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')


const addEmployee = (role) => {

    if(role === "I don't want to add any more team members"){
        console.log("done")
        return;
    }

    inquirer
    .prompt([
        {
            type: 'input',
            name: 'name',
            message: `Who is the ${role} of this team? `
        },
        {
            type: 'input',
            name: 'id',
            message: `What is the ${role}'s ID? `
        },
        {
            type: 'input',
            name: 'email',
            message: `What is the ${role}'s email? `
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: `What is the ${role}'s office number? `,
            when: () => role === 'Manager',
        },
        {
            type: 'input',
            name: 'github',
            message: `What is the ${role}'s GitHub username? `,
            when: () => role === 'Engineer',
        },
        {
            type: 'input',
            name: 'school',
            message: `What is the ${role}'s school? `,
            when: () => role === 'Intern',
        },
    ])
    .then(({name, id, email, officeNumber, github, school}) => {
        if(role === "Manager"){
            const manager = new Manager (name, id, email, officeNumber);
            console.log(manager)
        }
        if(role === "Engineer"){
            const engineer = new Engineer (name, id, email, github);
            console.log(engineer)
        }
        if(role === "Intern"){
            const intern = new Intern (name, id, email, school);
            console.log(intern)
        }

        askAgain();
 
    })

}

const askAgain = () => {
    inquirer
    .prompt([
        {
            type: 'list',
            name: 'again',
            message: `Which type of team member would you like to add? `,
            choices: ['Engineer','Intern',`I don't want to add any more team members`]
        },
    ])
    .then(({again}) => {
        addEmployee(again)
    })
}

console.log ("Please build your team")
addEmployee("Manager")
