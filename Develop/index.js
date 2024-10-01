// TODO: Include packages needed for this application

// Import the Inquirer package to prompt the user for input
import inquirer from 'inquirer';
// Import the fs (File System) module to handle file writing
import fs from 'fs';
// Import the generateMarkdown function to format the README content based on user input
import generateMarkdown from './utils/generateMarkdown.js';

// TODO: Create an array of questions for user input

// Array of questions to prompt the user for details about their project
const questions = [
    {
        type: 'input', // Prompt type: Text input
        name: 'title', // Key for storing the user's input
        message: 'What is the title of your project?' // Question to display in the terminal
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a short description of your project:'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the usage information?'
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'What are the contribution guidelines?'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'What are the test instructions?'
    },
    {
        type: 'list', // Prompt type: List selection
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'GPL', 'Apache', 'None'] // List of license options for the user to choose from
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub username:'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address:'
    }
];

// TODO: Create a function to write README file

// Function to write the generated markdown content to a README file
function writeToFile(fileName, data) {
    // Use the fs.writeFile method to create or overwrite the README.md file
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        // Log an error message if there's an issue writing the file
        console.error("Error writing to file", err);
      } else {
        // Log a success message when the file is written successfully
        console.log("README.md generated successfully!");
      }
    });
}

// TODO: Create a function to initialize app

// Function to initialize the application
function init() {
    // Use Inquirer to prompt the user with the questions array
    inquirer.prompt(questions)
      .then((answers) => {
        // Pass the user's input (answers) to generateMarkdown to create the README content
        const markdown = generateMarkdown(answers);
        // Write the generated markdown content to 'README.md' file
        writeToFile('README.md', markdown);
      })
      .catch((error) => {
        // Log an error message if there's an issue during the prompting process
        console.error("An error occurred during the prompt", error);
      });
}

// Function call to initialize app
init();