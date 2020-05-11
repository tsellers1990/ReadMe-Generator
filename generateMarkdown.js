function generateProjectUrl(github, title) {
    const lwrTitle = title.toLowerCase().split("").join("-");
    return `https://github.com/${github}/${lwrTitle}`;
}

function renderLicenseBadge(license, github, title) {
    if (license !== "None") {
        return `[![GitHub license](https://img.shields.io/badge/licese-${license}-blue.svg)](${generateProjectUrl(github,title)})`
    }
    return ''
}

function renderLicenseSection(license) {
    if(license !== "None") {
        return (
            `## License

This project is licensed under the ${license} license.`
        )
    }
    return ''
}

function generateMarkdown(data) {
    return `
# ${data.title}
${renderLicenseBadge(data.license, data.github, data.title)}

## Description

${data.description}

## Table of contents

* [Installation](#installation)

* [Usage](#usage)

* [License](#license)

* [Contributing](#contributing)

* [Tests](#tests)

* [Questions](#questions)

## Installation

To install necessary dependencies, run the following command:

\`\`\`
${data.installation}
\`\`\`

## Usage

${data.usage}

${renderLicenseSection(data.license)}
  
## Contributing

${data.contributing}

## Tests

To run tests, run the following command:

\`\`\`
${data.test}
\`\`\`

## Questions

If you have any questions about the repo, open an issue or contact [${data.github}](${data.url}) directly at ${data.email}.

`;
}

module.exports = generateMarkdown;
