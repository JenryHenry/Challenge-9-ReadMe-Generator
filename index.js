const inquirer = require("inquirer");
const fs = require("fs");
const markdown = require("./utils/generateMarkdown.js");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  {
    type: "input",
    message: "What would you like the description of your project to be?",
    name: "description",
  },
  {
    type: "input",
    message: "Please list installation instructions, if any.",
    name: "installation",
  },
  {
    type: "input",
    message: "Please describe how to use this application.",
    name: "usage",
  },
  {
    type: "input",
    message: "Please describe how to contribute to this application.",
    name: "contributing",
  },
  {
    type: "input",
    message: "Please describe how to test this application.",
    name: "tests",
  },
  {
    type: "checkbox",
    message: "Which license do you want to use?",
    name: "license",
    choices: ["MIT", "Apache", "GPLv3", "Boost"],
  },
  {
    type: "input",
    message: "What is your GitHub Username?",
    name: "username",
  },
  {
    type: "input",
    message: "What email can people contact you with?",
    name: "email",
  },
];

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((response) => {
    const fileName = `./output/README.md`;
    fs.writeFile(fileName, markdown(response), (err) =>
      err ? console.log(err) : console.log("Success!")
    );
    console.log(fileName);
  });
}

// Function call to initialize app
init();

//    type = "input"
// installation instructions
// usage information
// contribution guidelines
// test instructions

//    type = "checkbox"
//
