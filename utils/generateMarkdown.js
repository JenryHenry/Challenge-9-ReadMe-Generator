// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  const badges = [
    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)",
    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
  ];
  if (license == "MIT") {
    return badges[2];
  } else if (license == "GPLv3") {
    return badges[3];
  } else if (license == "Apache") {
    return badges[0];
  } else if (license == "Boost") {
    return badges[1];
  } else {
    return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  const licenseSection = `
## License
${renderLicenseBadge(license)}
This project uses a(n) ${license} license
`;
  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(response) {
  const text = `
# ${response.title}

## Description
${response.description}

## Table of Contents
[Installation](## Installation)
[Usage](## Usage)
[Contributing](## Contributing)
[Tests](## Tests)
[License](## License)

## Installation
${response.installation}

## Usage
${response.usage}

## Contributing
${response.contributing}

## Tests
${response.tests}

${renderLicenseSection(response.license)} 

## Questions
Contact me at either https://github.com/${response.username} or ${
    response.email
  }
`;

  return text;
}

module.exports = generateMarkdown;
