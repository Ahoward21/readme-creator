// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        message: 'What installation procedures are needed:(For none type n)'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    // 
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((answers) => {
        console.log(answers)
        const createdReadMe = generateMarkdown(answers);
        console.log(createdReadMe)
    fs.writeFile('README.md', createdReadMe, (err) => {
        if (err) throw (err);
        console.log('README successfully generated')
    })
    })
}

// Function call to initialize app
init();
