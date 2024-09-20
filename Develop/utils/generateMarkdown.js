// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Check if a license is provided or if 'None' is selected
  if (!license || license === 'None') {
    return '';// Return an empty string if no license is selected
    
  }
   // If a license is selected, return the corresponding badge from shields.io
  return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license || license === 'None') {
    return '';
  }
  switch (license) {
    case 'MIT':
      return 'https://opensource.org/licenses/MIT';
    case 'GPL':
      return 'https://www.gnu.org/licenses/gpl-3.0';
    case 'Apache':
      return 'https://www.apache.org/licenses/LICENSE-2.0';
    default:
      return '';// If an unknown license is selected, return an empty string
    }
  }



// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license || license === 'None') {
    return '';
  }
// Return a section for the License with the chosen license and link to full license text
  return `## License
This project is licensed under the ${license} license. For more information, see the [License](${renderLicenseLink(license)}) link.`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${data.installation}

## Usage
${data.usage}

## License
This project is licensed under the ${data.license} license.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Questions
If you have any questions, please contact me:
- GitHub: [${data.github}](https://github.com/${data.github})
- Email: ${data.email}
`;
}



export default generateMarkdown;
