//Create a function for fs/inquirer
const fs =require("fs");
const inquirer = require("inquirer")
//Questions for different types of employees
inquirer
    .prompt([
        {
            type: 'input',
            message: 'What is your name?',
            name: 'Manager'

        },
        {
            type: 'input',
            message: 'What is the employee ID?',
            name: 'Manager'

        },
        {
            type: 'input',
            message: 'What is the email address?',
            name: 'Manager'

        },
        {
            type: 'input',
            message: 'What is the office number?',
            name: 'Manager'

        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'Engineers'

        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'Engineer'

        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Engineer'

        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'Engineer'

        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'Employee'

        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'Engineer'

        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Engineer'

        },
        {
            type: 'input',
            message: 'What is your GitHub username?',
            name: 'Engineer'

        },
        {
            type: 'input',
            message: 'What is your name?',
            name: 'Intern'

        },
        {
            type: 'input',
            message: 'What is your employee ID?',
            name: 'Intern'

        },
        {
            type: 'input',
            message: 'What is your email?',
            name: 'Intern',

        },
        {
            type: 'input',
            message: 'What school did you attend?',
            name: 'Intern'

        },
      
    ])