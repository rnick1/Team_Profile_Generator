const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');

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

        },
        {
            type: 'list',
            name: 'employeeType',
            message: 'Please select employee type',
            choices: ['Manager', 'Engineer', 'Intern']

        }]).then((response) => {
            if (response.employeeType === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'employeeEmail',
                        message: 'Please enter the employee\'s email address',
                        validate: function (text) {
                            if (text.length == 0) {
                                return 'Please enter the employee\'s email address';
                            }
                            return true;
                        }


                    }]).then((managerResponse) => {
                        // Could generate html, but must create manager obj 
                        const manager = new Manager(response.employeeName);
                    })
            }


        })


// Define functions: Manager, engineer, and intern 
// Ask: Manager - officeNumber
// Ask: Engineer - Github username
// Ask: Intern - School

// function chooseType() {
//     inquirer.prompt(employeeType).then(answers) => {
//         if (answers.employee - type === Manager) {
//             {
//                 type: 'input',
//                     name: 'officeNumber',
//                         message: 'Please enter the manager\'s office number',
//                             validate: function (text) {
//                                 if (text.length == 0) {
//                                     return 'Please enter the employee\'s email address';
//                                 }
//                                 return true;
//                             },

//             },
//         }
//     }
// }

// validate: function (answer) {
//     if (answer.length == 0) {
//         return 'Please make at least one selection.';
//     }
//     return true;
// },
//         },
//     ]),

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
    employeeQuestions()
}

// ((answers) => {
//         try {
//             // const html = generateHTML(answers);
//             // fs.writeFileSync('index.html', html);
//             console.log('Successfully wrote to index.html');
//         } catch (error) {
//             console.log(error);
//         }
//     });
// };

init();