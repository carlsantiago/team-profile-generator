const inquirer = require ('inquirer');
const fs = require ('fs');
const axios = require('axios');
const jest = require('jest');

const Employee = require('./lib/Employee');
const { xit } = require('@jest/globals');

const x = `team manager`;
const manager = new Employee(x);

getName(manager)

// inquirer
//     .prompt([
//         {
//             type: 'list',
//             name: 'role',
//             message: `Which type of team memeber would you  like to add?`,
//             choices: ['Engineer','Intern',`I don't want to add any more team members`]
//         }
//     ])

