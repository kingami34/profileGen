//Create a function for fs/inquirer
const fs = require("fs");
const inquirer = require("inquirer");
const Manager = require("./lib/manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

//Questions for different types of employees
function manager() {
  inquirer.prompt([{
        type: "input",
        name: "name",
        message: "What is your name?",
      },
      {
        type: "input",
        message: "What is the employee ID?",
        name: "ID",
      },
      {
        type: "input",
        message: "What is the email address?",
        name: "email",
      },
      {
        type: "input",
        message: "What is the office number?",
        name: "office",
      },
    ])
    
    //Creating a new instance
    .then((answers) => {
      const manager = new Manager(
        answers.name,
        answers.id,
        answers.email,
        answers.office,
      );
    });
}

manager()
function engineer() {
  inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "ID",
      },
      {
        type: "input",
        message: "What is your email",
        name: "email"
      },
      {
        type: "input",
        message: "What is your GitHub username?",
        name: "githud",
      },
    ])
    engineer()
    //Creating a new instance
    .then((answers) => {
      const engineer = new Engineer(
        answers.name,
        answers.ID,
        answers.email,
        answers.github,
      );
    });
}
engineer()
function intern() {
  inquirer.prompt([{
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      {
        type: "input",
        message: "What is your employee ID?",
        name: "id",
      },
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
      {
        type: "input",
        message: "What school did you attend?",
        name: "school",
      },
    ])
    //Creating a new instance
    .then((answers) => {
      const intern = new Intern(
        answers.name,
        answers.id,
        answers.email,
        answers.school,
      );
    });
}
intern()

// function menuAsk() {
  
// }

// function buildTeam() {

// }


// fs.writeFileSync('./lib/Engineer.js', './lib/Intern.js','./lib/manager.js', (err) =>
// err ? console.error(err) : console.log('Thank you!')
// );