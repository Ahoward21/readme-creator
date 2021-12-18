// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license === "IBM") {
    return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
  } else if (license === "MIT") {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
  } else if (license === "Mozilla") {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
  }
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === "IBM") {
    return '[IBM license](https://opensource.org/licenses/IPL-1.0)';
  } else if (license === "MIT") {
    return '[MIT license](https://opensource.org/licenses/MIT)';
  } else if (license === "Mozilla") {
    return '[Mozilla license](https://opensource.org/licenses/MPL-2.0)'
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `
  This project was build using ${license}. For more information visit the link provided`
}

function renderTableOfContents(answers) {
  let installation = '';
  if (answers.installation !== 'n') {
    installation = '* [Installation](#installation)'
  }
  let usage = '* [Usage](#usage)'
  let credits = '* [Credits](#credits)'
  let license = '* [License](#license)'
  return `${installation}
${usage}
${credits}
${license}
`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  return `# ${answers.projectTitle}
  ${renderLicenseBadge(answers.license)}

  ## Description

  * ${answers.description}

  ## Table of Contents

${renderTableOfContents(answers)}

## Installation

## Usage

## Credits

## License
${renderLicenseSection(answers.license)}    
${renderLicenseLink(answers.license)}
`;
}

module.exports = generateMarkdown;
