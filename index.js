const inquirer = require("inquirer");

inquirer
  .prompt([
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
  ])
  .then((response) => {
    const fileName = ``;
  });
