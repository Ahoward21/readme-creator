// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateReadMe = require('./utils/generateReadMe')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please enter a description for your project:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to apply?',
        choices: ['IBM', 'MIT', 'Mozilla']
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What installation procedures are needed:(If none, type "none")'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Describe the usage of your project'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List any collaborators'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'How would you like to allow others to contribute?'
    },
    {
        type: 'input',
        name: 'gitHubName',
        message: 'Enter GitHub username:'
    },
    {
        type: 'input',
        name: 'gitHubLink',
        message: 'Enter GitHub URL:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter email address:'
    } 

];


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then((answers) => {
            console.log(answers)
            const createdReadMe = generateReadMe(answers);
            console.log(createdReadMe)
            // TODO: Create a function to write README file
            fs.writeFile('./output/README.md', createdReadMe, (err) => {
                if (err) throw (err);
                console.log('README successfully generated')
            })
        })
}

// Function call to initialize app
init();
