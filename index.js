//Create a function for fs/inquirer
const fs = require("fs");
const inquirer = require("inquirer");
//Questions for different types of employees
function manager() {
  inquirer.prompt([
      {
        type: "input",
        message: "What is your name?",
        name: "name",
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
        answers.ID,
        answers.email,
        answers.office
      );
    });
}

function engineer() {
  inquirer.prompt([
    {
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
  //Creating a new instance
  .then((answers) => {
    const engineer = new Engineer(
      answers.name,
      answers.ID,
      answers.email,
      answers.github
      );
    });
}
function intern() {
    inquirer.prompt([
        {
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
      answers.ID,
      answers.email,
      answers.school
      );
    });
}
function menuAsk() {

}
function buildTeam() {
    
}


 
 
