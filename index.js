const inquirer = require('inquirer');
const promptsJs = require('./prompts');

console.log(promptsJs)


function runPrompts() {

    inquirer.prompt([promptsJs.prompts.managerPrompts()])
    .then


}

runPrompts()