const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('../lib/engineer');
const Manager = require('../lib/manager');
const Intern = require('../lib/intern');

const employeeQuestions = () =>
    inquirer.prompt([
        {
            type: 'list',
            name: 'worker type',
            message: 'Please select worker type',
            choices: [
                {
                    name: 'Employee',
                },
                {
                    name: 'Manager',
                },
                {
                    name: 'Engineer',
                },
                {
                    name: 'Intern',
                },
            ],
            validate: function (answer) {
                if (answer.length == 0) {
                    return 'Please make at least one selection.';
                }
                return true;
            },
            typeSpecified: function (answer) {
                if (answer === 'Employee') {

                }
            }
        },
        {
            type: 'input',
            name: 'employeeName',
            message: 'Please enter the employee\'s name.',
            validate: function (text) {
                if (text.length == 0) {
                    return 'Please enter the employee\'s name.';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'employeeID',
            message: 'Please enter the employee\'s ID',
            validate: function (text) {
                if (text.length == 0) {
                    return 'Please enter the employee\'s ID';
                }
                return true;
            },
        },
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'Please enter the employee\'s email address',
            validate: function (text) {
                if (text.length == 0) {
                    return 'Please enter the employee\'s email address';
                }
                return true;
            },
        }]),

const generateHTML = (answers) =>
    `<!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
        <title>Document</title>
      </head>
      <body>
        <div class="jumbotron jumbotron-fluid">
        <div class="container">
          <h1 class="display-4">${answers.employeeName}</h1>
          <ul class="list-group">
            <li class="list-group-item">${answers.employeeID}</li>
            <li class="list-group-item">${answers.employeeEmail}</li>
            <li class="list-group-item">${answers.github}</li>
            <li class="list-group-item">${answers.school}</li>
            <li class="list-group-item">${answers.officeNumber}</li>
          </ul>
        </div>
      </div>
      </body>
      </html>`;

const init = () => {
    employeeQuestions().then((answers) => {
        try {
            const html = generateHTML(answers);
            fs.writeFileSync('index.html', html);
            console.log('Successfully wrote to index.html');
        } catch (error) {
            console.log(error);
        }
    });
};

init();

// LA Suggestions:
// 1. Ask what type they want to add (in our case, we only care about interns.
// 2. Ask general employee information.
// 3. Ask intern specific question.
// 4. Build an intern object with this information.
// 5. Save the intern object
// 6. display the intern object’s data in the html

// Each of these steps are a function you can write.