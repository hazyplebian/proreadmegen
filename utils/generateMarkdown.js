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
    return `[License](#License)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `## License`
    
    `This project is not licensed.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  - [Installation](#Installation)
  - [Usage](#Usage)
  - [Screenshot](#Screenshot)
  - [Walkthrough Video](#Walkthrough-Video)
  - [Deployment](#Deployment)
  - [Contribution](#Contribution)
  - [Tests](#Tests)
  - ${renderLicenseLink(data.license)}
  - [Questions](#Questions)

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
