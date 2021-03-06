const inquirer = require('inquirer');
const Employee = require('./lib/employee');
const Engineer = require('./lib/engineer');
const Manager = require('./lib/manager');
const Intern = require('./lib/intern');
const fs = require('fs');

const managerArray = [];
const engineerArray = [];
const internArray = [];

const initialQuestions = [
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
    }
]
// Functions:
const specificEmployeeTypes = (response) => {
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
}
const getManagerCard = function (managerArray) {
    const managerCards = managerArray.map(manager => {
        return `
        <div class="col mb-4">
        <div class="card">
            <div class="card-body">
                <h5 class="card-title">${manager.name}</h5>
                <ul class="card-text">
                    <li>Employee ID: ${manager.id}</li>
                    <li>Email: ${manager.email}</li>
                    <li>Office number: ${manager.officeNumber}</li>
                </ul>
            </div>
        </div>
    </div>`
    })
    console.log(managerCards)
    return (managerCards)

}
const getEngineerCard = function (engineerArray) {
    const engineerCards = engineerArray.map(engineer => {
        return `
    <div class="col mb-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <ul class="card-text">
                <li>Employee ID: ${engineer.id}</li>
                <li>Employee email: ${engineer.email}</li>
                <li>Github username: ${engineer.github}</li>
            </ul>
        </div>
    </div>
</div>`
    })
    console.log(engineerCards)
    return (engineerCards)
}
const getInternCard = function (internArray) {
    const internCards = internArray.map(intern => {
        return `
    <div class="col mb-4">
    <div class="card">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <ul class="card-text">
                <li>Employee ID:${intern.id}</li>
                <li> Employee email: ${intern.email}</li>
                <li>School attended: ${intern.school}</li>
            </ul>
        </div>
    </div>
</div>`
    })
    console.log(internCards)
    return (internCards)

}

const writeToFile = () => {
    const createdHTML = `
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
                        ${getManagerCard(managerArray)}
                        ${getEngineerCard(engineerArray)}
                        ${getInternCard(internArray)}
                    </div>
                </div>
            </div>
        </body>
    </html>`
    fs.writeFile('./dist/index.html', createdHTML, function (err) {
        if (err)
            console.log(err);
        else
            console.log('Write operation complete.');
    });

}

const yesNoQuestion = () => {
    return inquirer.prompt([{
        type: 'list',
        name: 'should_continue',
        message: 'Would you like to add any more employees?',
        choices: ['Yes', 'No']
    }])

}

const employeeQuestions = () => {
    inquirer.prompt(initialQuestions)
        .then(specificEmployeeTypes)
        .then(yesNoQuestion)
        .then((answer) => {
            if (answer.should_continue === 'Yes') {
                return employeeQuestions();
            } else if (answer.should_continue === 'No') {
                return writeToFile();
            }
        })
}

const init = () => {
    employeeQuestions();
};

init();