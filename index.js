const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const fs = require('fs');

const managerArray = [];
const engineerArray = [];
const internArray = [];

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
                        const manager = new Manager(response.employeeName, response.employeeID, response.employeeEmail, managerResponse.officeNumber);
                        managerArray.push(manager)
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
                        const engineer = new Engineer(response.employeeName, response.employeeID, response.employeeEmail, engineerResponse.gitHubUserName);
                        engineerArray.push(engineer)
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
                        const intern = new Intern(response.employeeName, response.employeeID, response.employeeEmail, internResponse.school);
                        internArray.push(intern)
                    })
            }
        }).then(() => {
            inquirer.prompt([{
                type: 'list',
                name: 'should_continue',
                message: 'Would you like to add any more employees?',
                choices: ['Yes', 'No']
            }]).then((answer) => {
                if (answer.should_continue === 'Yes') {
                    employeeQuestions();
                } else if (answer.should_continue === 'No') {
                    console.log(managerArray);
                    console.log(internArray);
                    console.log(engineerArray);

                    // Important! => remember to use the .map method to allow multiple cards to be created.

                    const getManagerCard = function (managerArray) {
                        return `
                        <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${managerArray[0].name}</h5>
                                <ul class="card-text">
                                    <li>Employee ID: ${managerArray[0].id}</li>
                                    <li>Email: ${managerArray[0].email}</li>
                                    <li>Office number: ${managerArray[0].officeNumber}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
                    }
                    console.log(getManagerCard(managerArray));

                    const engineerHTML = engineerArray.map(getEngineerCard(engineerArray))
                    const internHTML = internArray.map(getInternCard())

                    // .join("")
                    const getEngineerCard = function (engineerArray) {
                        return `
                        <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${engineerArray.getName()}</h5>
                                <ul class="card-text">
                                    <li>Employee ID: ${engineerArray.getID()}</li>
                                    <li>Employee email: ${engineerArray.getEmail()}</li>
                                    <li>Github username: ${engineerArray.getGiHub()}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
                    }
                    console.log(getEngineerCard(engineerArray));

                    const getInternCard = function (internArray) {
                        return `
                        <div class="col mb-4">
                        <div class="card">
                            <div class="card-body">
                                <h5 class="card-title">${internArray[0].name}</h5>
                                <ul class="card-text">
                                    <li>Employee ID:${internArray[0].id}</li>
                                    <li> Employee email: ${internArray[0].email}</li>
                                    <li>School attended: ${internArray[0].school}</li>
                                </ul>
                            </div>
                        </div>
                    </div>`
                    }
                    console.log(getInternCard(internArray));

                    // const getManagerCard = arr.map(employee => employee.getManagerCard()).join("");

                    return `
                    <!DOCTYPE html>
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
                                    ${getManagerCard}
                                    ${engineerHTML}
                                    ${internHTML}
                                </div>
                            </div>
                        </div>
                    </body>

                </html>`
                }
            })
        })

const init = () => {
    employeeQuestions();
};

init();

/* Note:
1. User enters node index.js
2. User enters employee name
3. User enters employee id
4. User enters emplyee email
5. User is asked employee type
6. User is then asked a question specific to the employee type
7. User is asked if they would like to add more employees:
    a. If "yes", then:
        1. The employee information that the user just entered will be added to the relevant array.
        2. The user goes through the set of questions again.
    b. If "no", then:
        1. A card is generated containing all the employee information for each employee entered.
        2. An HTML file is generated containing each employee card.
*/


// const engineerHTMLString = engineerArr.map(Engineer => 
//     `<div class="card  " style="width: 18rem; background-color: blue; color: white; " >
//     <div class="card-header">
//       ${Engineer.getName()} <br>
//       <i class="fas fa-glasses mr-2"></i>  Engineer
//     </div>
//     <ul class="list-group list-group-flush" style="color: black;" >
//       <li class="list-group-item">ID:${Engineer.getId()}</li>
//       <li class="list-group-item">Email: <a href="mailto: ">${Engineer.getEmail()}</a></li>
//       <li class="list-group-item">GitHub:${Engineer.getGithub()}</li>
//     </ul>
// </div>`
