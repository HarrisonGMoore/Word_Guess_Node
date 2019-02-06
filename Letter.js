var inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    name: "input_letter",
    message: "Choose a letter"
  }
])

if (input.length > 2)