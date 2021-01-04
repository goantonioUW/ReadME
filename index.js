const inquirer = require("inquirer");
const { type } = require("os");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

//, Table of Contents,
// Installation, Usage, License, Contributing, Tests, and Questions
// array of questions for user
const questions = [
  {
    message: "What is the title of the project?",
    name: "title",
    type: "input",
  },
  {
    message: "Add a description of your project.",
    name: "description",
    type: "editor",
  },
  {
    message: "How do you install the application?",
    name: "installation",
    type: "editor",
  },
  {
    message: "How do you use the application?",
    name: "usage",
    type: "input",
  },
  {
    message: "What is your programs License?",
    name: "license",
    type: "list",
    choices: [
      "Apache License 2.0",
      new inquirer.Separator(),
      "GNU General Public License v3.0",
      new inquirer.Separator(),
      "MIT License",
      new inquirer.Separator(),
      "Mozilla Public License 2.0",
      new inquirer.Separator(),
      "The Unlicense",
    ],
  },
  {
    message: "Who is contributing to the project?",
    name: "contributing",
    type: "input",
  },
  {
    message: "An example of the working project.",
    name: "test",
    type: "input",
  },
  {
    message: "What is your E-mail address?",
    name: "questions",
    type: "input",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  const content = generateMarkdown(data);

  fs.writeFile(fileName, content, (err) => {
    if (err) console.log(err);
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((response) => {
    writeToFile("README_GEN.md", response);
    console.log(response);
  });
}

// function call to initialize program
init();
