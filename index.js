const inquirer = require("inquirer");
const { type } = require("os");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    message: "What is the title of the project?",
    name: "title",
    type: "input",
  },
  {
    message: "Summary of what your project is and who it is for.",
    name: "description",
    type: "input",
  },
  {
    message: "Add an image or gif of your project.",
    name: "projectImage",
    type: "input",
  },
  {
    message: "Include live links of the deployed project.",
    name: "liveLinks",
    type: "input",
  },
  {
    message: "contactInformation.",
    name: "contactMe",
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
