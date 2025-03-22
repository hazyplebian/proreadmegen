// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === 'None') {
    return '';
  } else {
    return `![License](https://img.shields.io/badge/License-${license.replace(' ', '%20')}-blue.svg)`;
  }
}
// https://img.shields.io/badge/license-apache-blue

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
     return '';
  } else {
    return `[License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `## License`
    
    `This project is not ${license} licensed.`;
  }
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
  - [Screenshot](#screenshot)
  - [Walkthrough Video](#walkthrough-video)
  - [Deployment](#deployment)
  - [Contribution](#contribution)
  - [Tests](#tests)
  - ${renderLicenseLink(data.license)}
  - [Questions](#questions)

  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Screenshot
  (${data.screenshot})

  ## Walkthrough Video
  (${data.video})

  ## Deployment
  (${data.link})

  ## Contribution
  ${data.contribution}

  ## Tests
  ${data.test}

  ${renderLicenseSection(data.license)}
 

  ## Questions
  If you have any questions, please contact me at ${data.email}.

  You can find more of my work at [${data.username}](

`;
}

export default generateMarkdown;
