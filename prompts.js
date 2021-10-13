let prompts = {};

prompts.addFirstMemberPrompt = {
    type: 'list',
    name: 'start',
    message: 'What type of team member would you like to add first?',
    choices: ['Manager', 'Engineer', 'Intern']

}

prompts.finishedPrompt = 
        {
          type: 'list',
          name: 'finished',
          message: "Are you done creating your team roster?",
          choices: ["Yes", "No"]
        },

prompts.addMemberPrompt = {
            type: 'list',
            name: 'addMember',
            message: "Would you like to add another team member?",
            choices: ['Manager', 'Engineer', 'Intern', 'No']
},

prompts.managerPrompts = [
        {
            type: 'input',
            name: 'name',
            message: "What is your team manager's name?",
          },
          {
            type: 'input',
            name: 'id',
            message: "What is your team manager's employee ID?"
          },
          {
            type: 'input',
            name: 'email',
            message: "What is your team manager's email address?",
          },
          {
            type: 'input',
            name: 'officeNumber',
            message: "What is your team manager's office number?",
          },
        ]

prompts.engineerPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is this engineer's name?",
        },
    {
        type: 'input',
        name: 'id',
        message: "What is this engineer's employee ID?"
        },
    {
        type: 'input',
        name: 'email',
        message: "What is this engineer's email address?",
        },
    {
        type: 'input',
        name: 'github',
        message: "What is this engineer's Github username?",
        },
]

prompts.internPrompts = [
    {
        type: 'input',
        name: 'name',
        message: "What is this intern's name?",
        },
    {
        type: 'input',
        name: 'id',
        message: "What is this intern's employee ID?"
        },
    {
        type: 'input',
        name: 'email',
        message: "What is this intern's email address?",
        },
    {
        type: 'input',
        name: 'school',
        message: "What is this intern's school?",
        },
]

prompts.teamNamePrompt = {
    type: 'input',
    message: 'Please enter a team name, this will be the name of your generated html file. ',
    name: 'teamName'
}

    
exports.prompts = prompts;