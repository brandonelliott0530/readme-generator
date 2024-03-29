// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');




// LINK to file where the readme is located
const generateMarkdown = require('./generateMarkdown');



// TODO: Create an array of questions for user input
function userPrompt(){
inquirer 
.prompt([
    {
        // Project Title
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    }, {
        // Project Description
        type: "input",
        message: "Give a discription of your project.",
        name: "description",
    }, {
        // Project installation description
        type: "input",
        message: "How do you install the project?",
        name: "installation",
    }, {
        // Project usage description
        type: "input",
        message: "How do you use your project?",
        name: "usage",
    }, {
        // License information
        type: "list",
        message: "Which license would you like to use?",
        choices: ["MIT", "BSD", "GPL", "None"],
        name: "license",
    }, {
        // Contibutions
        type: "input",
        message: "How can others contribute to your project?",
        name: "contributing",
    }, {
        // Test information
        type: "input",
        message: "Are there any tests included?",
        name: "test",
    }, {
        // Github username
        type: "input",
        message: "What is your GitHub URL?",
        name: "GitHub"
    },{
        // Email Address
        type: "input",
        message: "What is your email?",
        name: "email"
    },{
        // Year input for licensing creation
        type: "input",
        message: "What year is it?",
        name: "year"
    } 
])


.then((response) =>  {
    let content= generateMarkdown(response)

    const fileName = `${response.title.toLowerCase().split(' ').join('')}.md`
  fs.writeFile(fileName, content, (err) =>
  err ? console.log(err) : console.log("File created successfully!")
  )
 })
}
    
userPrompt()













