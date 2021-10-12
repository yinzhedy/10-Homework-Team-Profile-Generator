const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const folderForGeneratedRoster = path.resolve(__dirname, "generatedTeamRoster");
const renderHtml = require('./lib/employeeArray');
const promptsJs = require('./prompts');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const Engineer = require('./lib/engineer');
const { assertGenericTypeAnnotation } = require('@babel/types');

console.log(Manager.name)
console.log(promptsJs)
console.log("Hello! Lets get started on building your team roster.");

let teamRoster = [];

const runPrompts = () => {
    inquirer.prompt(promptsJs.prompts.addFirstMemberPrompt)
    .then((answer) => {
        console.log(answer)
        if(answer.start == 'Manager') {
            teamMemberPrompts(promptsJs.prompts.managerPrompts, 'manager')
        }
        else if(answer.start == 'Intern') {
            teamMemberPrompts(promptsJs.prompts.internPrompts, 'intern')
        }
        else {
            teamMemberPrompts(promptsJs.prompts.engineerPrompts, 'engineer')
        }
    })

}

const teamMemberPrompts = (prompt, role) => {
    inquirer.prompt(prompt)
    .then((answer) => {
        console.log(answer)
        let newTeamMember = {};
        if (role == 'manager') {
            newTeamMember = new Manager (
                answer.name,
                answer.id,
                answer.email,
                answer.officeNumber
            )
            console.log(newTeamMember)
            console.log(Manager.officeNumber)
        }

        else if(role == 'intern') {
            newTeamMember = new Intern(
                answer.internName,
                answer.internID,
                answer.internEmail,
                answer.internSchool,
            )
        }

        else {
            newTeamMember = new Engineer(
                answer.name,
                answer.id,
                answer.email,
                answer.github
            )
        }
        console.log(Manager)
        teamRoster.push(newTeamMember);
        console.log(newTeamMember)
        console.log(teamRoster)
        addPrompt();
    })
}

const addPrompt = () => {
    inquirer.prompt(promptsJs.prompts.addMemberPrompt)
    .then((answer) => {
        console.log(answer)
        if(answer.start == 'Manager') {
            teamMemberPrompts(promptsJs.prompts.managerPrompts, 'manager')
        }
        else if(answer.start == 'Intern') {
            teamMemberPrompts(promptsJs.prompts.internPrompts, 'intern')
        }
        else if(answer.start == 'Engineer') {
            teamMemberPrompts(promptsJs.prompts.engineerPrompts, 'engineer')
        }
        else {
            finishedPromptCheck();
        }
    })

}

const finishedPromptCheck = () => {
    inquirer.prompt(promptsJs.prompts.finishedPrompt)
    .then((answer) => {
        if(answer.finished = false) {
            addPrompt();
        }
        else {
            getTeamName();
        }
    })
}

const getTeamName = () => {
    inquirer.prompt(promptsJs.prompts.teamNamePrompt)
    .then((answer) => {
        if (answer.teamName) {
            generateRosterHtml(answer.teamName)
        }
        else {
            console.log('Entry Invalid, please try again!')
            getTeamName();
        }
    })
}
const generateRosterHtml = (teamName) => {
    const generatedHtml = path.join(folderForGeneratedRoster, teamName + ".html");
  
    if (!fs.existsSync(folderForGeneratedRoster)) {
      fs.mkdirSync(folderForGeneratedRoster);
    }
  
    fs.writeFileSync(generatedHtml, renderHtml(teamRoster), (err) => {
      if (err) {
        console.log(err);
        getFileName();
      }
    });
  };


runPrompts()