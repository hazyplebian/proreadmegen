// TODO: Include packages needed for this application

import inquirer from "inquirer";
import fs from "fs";
import generateMarkdown from "./utils/generateMarkdown.js";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "list",
    name: "license",
    message: "Select a license",
    choices: ["BSD", "Apache", "None"],
  },
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Enter a description of your project",
  },
  {
    type: "input",
    name: "installation",
    message: "Enter installation instructions",
  },
  {
    type: "input",
    name: "usage",
    message: "Enter usage information",
  },
  {
    type: "input",
    name: "screenshot",
    message: "Provide the screenshot filepath",
  },
  {
    type: "input",
    name: "video",
    message: "Provide url to walkthrough video",
  },
  {
    type: "input",
    name: "link",
    message: "Provide the link to the deployed application",
  },
  {
    type: "input",
    name: "contribution",
    message: "Enter contribution guidelines",
  },
  {
    type: "input",
    name: "test",
    message: "Enter test instructions",
  },
  {
    type: "input",
    name: "username",
    message: "Enter your GitHub username",
  },
  {
    type: "input",
    name: "email",
    message: "Enter your email address",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>
    err ? console.log(err) : console.log("Successfully created readme!")
  );
}

// TODO: Create a function to initialize app
function init() {
  // Inquirer prompt
  inquirer.prompt(questions).then((answers) => {
    const markdown = generateMarkdown(answers);
    writeToFile("README.md", markdown)
  });
  // writeToFile();
}

// Function call to initialize app
init();
