const inquirer = require('inquirer');
const promptsJs = require('./prompts');

console.log(promptsJs)


function runPrompts() {

    inquirer.prompt([promptsJs.prompts.managerPrompts()])
    .then(promptsJs.prompts.addMemberPrompt) 
    .then(answer => {
        if(answer == 'Intern') {
            promptsJs.prompts.internPrompts
        }
        else if(answer == 'Engineer') {
            promptsJs.prompts.engineerPrompts
        }
        else {
            promptsJs.prompts.finishedPrompt
        }
    })


}

runPrompts()