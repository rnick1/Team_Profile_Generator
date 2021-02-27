const inquirer = require('inquirer');

function engineerPrompts() {
    inquirer
        .prompt([
            {
                type: 'input',
                name: 'engineerName',
                message: 'What is Engineers name?',
            },
            {
                type: 'number',
                name: 'engineerId',
                message: 'What is Engineers ID?',
            },
            {
                type: 'input',
                name: 'engineerEmail',
                message: 'What is Engineers email?',
            },
            {
                type: 'input',
                name: 'engineersGithub',
                message: 'What is Engineers GitHub username?',
            },

        ])
        .then(answers => {
            console.log(answers);
        })
        .catch(error => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });

}
// engineerPrompts();
module.exports = engineerPrompts;