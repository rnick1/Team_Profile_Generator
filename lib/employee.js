// // Packages needed for this application
// const inquirer = require('inquirer');
// const fs = require('fs');

// // Created  array of questions for user input
// const questions = () =>
//     inquirer.prompt([
//         {
//             type: 'input',
//             name: 'name',
//             message: 'What is your name?',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please enter your name.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'input',
//             name: 'username',
//             message: 'What is your GitHub username?',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please enter your GitHub username.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'What is your email address?',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please enter your email address, otherwise type n/a.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'input',
//             name: 'title',
//             message: 'What is the title of your project?',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please enter your project\'s title.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'input',
//             name: 'description',
//             message: 'Please describe your project',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please describe your project.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'input',
//             name: 'installation',
//             message: 'Please enter the installation instructions here',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please enter the installation instructions.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'input',
//             name: 'usage',
//             message: 'Please enter usage instructions here',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please enter the usage instructions.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'input',
//             name: 'contributors',
//             message: 'Please enter the GitHub usernames of this project\'s contributors',
//             validate: function (text) {
//                 if (text.length == 0) {
//                     return 'Please list your project\'s contributors separated by a commas, otherwise type n/a.';
//                 }
//                 return true;
//             },
//         },
//         {
//             type: 'list',
//             name: 'licenses',
//             message: 'Please select the relevant licenses for this project',
//             choices: [
//                 {
//                     name: 'MIT',
//                 },
//                 {
//                     name: 'Apache',
//                 },
//                 {
//                     name: 'GPL',
//                 },
//                 {
//                     name: 'None',
//                 },
//             ],
//             validate: function (answer) {
//                 if (answer.length == 0) {
//                     return 'Please make at least one selection.';
//                 }
//                 return true;
//             },
//         },
//     ]);

// const generateMarkdown = (answers) => {
//     return `# ${answers.title}

// #### by: ${answers.username}

// [![Licenses](https://img.shields.io/badge/License-${answers.licenses}-blue.svg)](https://opensource.org/licenses/${answers.licenses})

// ### **Table of Contents:**
// - [Project Description](#project-description)
// - [Installation](#installation)
// - [Usage](#usage)
// - [License](#license)
// - [Contributors](#contributors)

// ### **Project Description:**  
// ${answers.description}

// ### **Installation:**  
// ${answers.installation}

// ### **Usage:**
// ${answers.usage}

// ### **License:**
// ${answers.licenses}

// ### **Contributors:**  
// ${answers.contributors}

// ### If you have any questions, please contact ${answers.name} at: ${answers.email}`
// }

// const init = () => {
//     questions().then((answers) => {
//         try {
//             const md = generateMarkdown(answers);
//             fs.writeFileSync('newReadme.md', md);
//             console.log('Successfully wrote to readme.md');
//         } catch (error) {
//             console.log(error);
//         }
//     });
// };

// init();