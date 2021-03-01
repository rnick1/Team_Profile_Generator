const inquirer = require('inquirer');
const employee = require('./lib/employee');
// const engineer = require('../lib/engineer');
// const manager = require('../lib/manager');
// const intern = require('../lib/intern');

const employeeQuestions = () =>
    inquirer.prompt([
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