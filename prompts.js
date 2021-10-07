const inquirer = require('inquirer');
const fs = require('fs');
const jest = require('jest');
const generateTeamRoster = require('./markdown')
const util = require('util');
const path = require('path');

const finishedPrompt = () => {
    inquirer.prompt([
        {
          type: 'confirm',
          name: 'finished',
          message: "Are you done creating your team roster?"
        },
  ])
}

const addMemberPrompt = () => {
    inquirer.prompt([
          {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another team member?",
            choices: ['Engineer', 'Intern', 'No']
          },
    ])
    .then((answer) => {
        if (answer == 'No') {
            finishedPrompt
        }
    })
}


    
    // prompt for manager input, then option for additional team member
const ManagerPrompts = () => { inquirer.prompt([
        {
            type: 'input',
            name: 'managerName',
            message: "What is your team manager's name?",
          },
          {
            type: 'input',
            name: 'managerID',
            message: "What is your team manager's employee ID?"
          },
          {
            type: 'input',
            name: 'managerEmail',
            message: "What is your team manager's email address?",
          },
          {
            type: 'input',
            name: 'managerOfficeNumber',
            message: "What is your team manager's office number?",
          },
    ])}
    // prompt for engineer information
const EngineerPrompts = () => { inquirer.prompt([
    {
        type: 'input',
        name: 'engineerName',
        message: "What is this engineer's name?",
        },
    {
        type: 'input',
        name: 'engineerID',
        message: "What is this engineer's employee ID?"
        },
    {
        type: 'input',
        name: 'engineerEmail',
        message: "What is this engineer's email address?",
        },
    {
        type: 'input',
        name: 'engineerGithub',
        message: "What is this engineer's Github username?",
        },
])}

const InternPrompts = () => { inquirer.prompt([
    {
        type: 'input',
        name: 'internName',
        message: "What is this intern's name?",
        },
    {
        type: 'input',
        name: 'internID',
        message: "What is this intern's employee ID?"
        },
    {
        type: 'input',
        name: 'internEmail',
        message: "What is this intern's email address?",
        },
    {
        type: 'input',
        name: 'internSchool',
        message: "What is this intern's school?",
        },
])}

    
    