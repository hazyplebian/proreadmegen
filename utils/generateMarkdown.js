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
    return `- [License](#license)`;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === 'None') {
    return `## License\n\nThis project is not licensed.`;
  } else {
    return `## License\n\nThis project is licensed under the ${license} license.`;
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
  ${renderLicenseLink(data.license)}
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
 

   If you have any additonal questions, you can contact me at:
  - GitHub: [${data.username}](https://github.com/${data.username})
  - Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
