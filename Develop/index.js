// TODO: Include packages needed for this application
const inquirer = require('inquirer');
let badgeURL = ""
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer 
    .prompt([
        {
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        }, {
            type: "input",
            message: "Give a discription of your project.",
            name: "description",
        }, {
            type: "input",
            message: "How do you install the project?",
            name: "installation",
        }, {
            type: "input",
            message: "How do you use your project?",
            name: "usage",
        }, {
            type: "list",
            message: "Which license would you like to use?",
            choices: ["MIT", "BSD", "GPL", "None"],
            name: "license",
        }, {
            type: "input",
            message: "Would you like others to contribute to this project?",
            name: "contributing",
        }, {
            type: "input",
            message: "Are there any test instructions?",
            name: "test",
        }, {
            type: "input",
            message: "What is your GitHub?",
            name: "GitHub"
        },{
            type: "input",
            message: "What is your email?",
            name: "email"
        }, 
    ])

// TODO: Create a function to write README file
.then(response => {
    const ReadMe = 
`# ${response.title}

${badgeURL}
    
## Description
    ${response.description}
    
    
* [Installation](/README.md#installation)

* [Usage](/README.md#usage),

* [Contributing](/README.md#contributing)

* [Tests](/README.md#tests)

* [Questions](/README.md#questions)

* [License](/README.md#license)
   
## Installation
${response.installation}
    
    
   
## Usage
${response.usage}
    
    
## Contributing
${response.contributing}
    
## Tests
${response.tests}    
    
## Questions
    
Do you have any questions about this project? If so, please reach out to me at either my email address or contact me at my GitHub.
    
#### Email Address
[${response.email}](${response.email})
    
#### GitHub URL
[${response.GitHub}](${response.GitHub})

## License
© 2022 ${response.license} 



`
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge() {
    if(response.license === "MIT") {
        badgeURL = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    } else if(response.license === "BSD") {
        badgeURL = "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)"
    } else if (response.license === "GPL") {
        badgeURL = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
    } else if (response.license === "None") {
        badgeURL = ""
    }

    }

    renderLicenseBadge()


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {} 
fs.writeFile("Dynamic-readme.md", ReadMe, (err) => err ? console.log(err) : console.log("success"))

})




