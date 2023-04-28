// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) { 
  return `![licence](https://img.shields.io/badge/license-${license}-green)`
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) { }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) { }

// TODO: Create a function to generate markdown for README
class MarkDown {
  static generateReadme(answers) {
    return `# ${answers.title} ${renderLicenseBadge(answers.license)}

## Table of Content
-[project description](#Description)
-[usage](#Usage)
-[contributing](#Contributing)
-[installation](#Installation)
-[Questions](#Questions)
-[License](#License)

## Description

${answers.description}

## Usage

${answers.usage}
## Installation

${answers.installation}
## Contributing
${answers.contributing}`
  }
}

// module.exports = generateMarkdown;
module.exports = MarkDown;
