const inquirer = require ('inquirer');
const fs = require ('fs');
const axios = require('axios');
const jest = require('jest');
const generateHtml = require('./lib/generateHtml')

const Manager = require('./lib/Manager')
const Engineer = require('./lib/Engineer')
const Intern = require('./lib/Intern')

var employeeArr = [];

const addEmployee = (role) => {

    if(role === "I don't want to add any more team members"){

        fs.writeFile("./dist/index.html", generateHtml(employeeArr), function(err){
            if (err){
                throw err;
            };
        });
        return;
    };


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
            employeeArr.push(manager)
        }
        if(role === "Engineer"){
            const engineer = new Engineer (name, id, email, github);
            employeeArr.push(engineer)
        }
        if(role === "Intern"){
            const intern = new Intern (name, id, email, school);
            employeeArr.push(intern)
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

console.log ("🔨 Please build your team")
addEmployee("Manager")
