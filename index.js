//Create a function for fs/inquirer
const fs =require("fs");
const inquirer = require("inquirer")
//Questions for different types of employees
function manager(){
 inquirer.prompt([
    {
        type: 'input',
        message: 'What is your name?',
        name: 'name'

    },
    {
        type: 'input',
        message: 'What is the employee ID?',
        name: 'ID'

    },
    {
        type: 'input',
        message: 'What is the email address?',
        name: 'email'

    },
    {
        type: 'input',
        message: 'What is the office number?',
        name: 'office'

    },
    //Creating a new instance
 ]) .then(answers =>{
     const manager = new Manager(answers.name , answers.ID , answers.email , answers.office)
 })
}

function engineer(){

}
function intern(){

}
function menuAsk(){

}
function buildTeam(){

}


inquirer
    .prompt([
       
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