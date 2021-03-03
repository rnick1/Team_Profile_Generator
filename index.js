const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const fs = require('fs');

const teamArray = [''];

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
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: 'Please enter the manager\'s office number',
                        validate: function (text) {
                            if (text.length == 0) {
                                return 'Please enter the manager\'s office number';
                            }
                            return true;
                        }

                    }]).then((managerResponse) => {
                        const manager = new Manager(response.employeeName, response.employeeID, response.employeeEmail, response.officeNumber);
                        teamArray.push(manager)
                    })

            } else if (response.employeeType === 'Engineer') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'gitHubUserName',
                        message: 'Please enter the engineer\'s GitHub username.',
                        validate: function (text) {
                            if (text.length == 0) {
                                return 'Please enter the engineer\'s GitHub username.';
                            }
                            return true;
                        }
                    }]).then((engineerResponse) => {
                        const engineer = new Engineer(response.employeeName, response.employeeID, response.employeeEmail, response.github);
                        teamArray.push(engineer)
                    })

            } else if (response.employeeType === 'Intern') {
                return inquirer.prompt([
                    {
                        type: 'input',
                        name: 'school',
                        message: 'Please enter the intern\'s school.',
                        validate: function (text) {
                            if (text.length == 0) {
                                return 'Please enter the intern\'s school.';
                            }
                            return true;
                        }
                    }]).then((internResponse) => {
                        const intern = new Intern(response.employeeName, response.employeeID, response.employeeEmail, response.school);
                        teamArray.push(intern)
                    })
            }
        }).then(() => {
            inquirer.prompt([{
                type: 'list',
                name: 'continue?',
                message: 'Would you like to add any more employees?',
                choices: ['Yes', 'No']
            }]).then((response) => {
                if (response === 'Yes') {
                    employeeCard()
                    employeeQuestions()
                    // generateHTML()
                } else if (response === 'No') {
                    employeeCard()
                    generateHTML()
                }
            })
        })

function employeeCard(employee) {
    return `    
    <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${employee.employeeName}</h5>
                <ul class="card-text">
                    <li>${employee.employeeID}</li>
                    <li>${employee.employeeEmail}</li>
                    <li>${employee.officeNumber || employee.school || employee.gitHubUserName}</li>
                </ul>
            </div>
        </div>
    </div>`
}

const generateHTML = () =>
    `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css"
            integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
        <title>Your Team Profile</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
                <h1 style="text-align: center">Here is Your Team:</h1>
                <div class="row row-cols-1 row-cols-md-3">    



                </div>
            </div>
        </div>
    </body>

</html>`;

const init = () => {
    employeeQuestions().then((employee) => {
        try {
            const html = generateHTML(employee);
            fs.writeFileSync('newHTML.html', html);
            console.log('Successfully wrote to newHTML.html!');
        } catch (error) {
            console.log(error);
        }
    });
};

init();