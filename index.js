const inquirer = require('inquirer');
const fs = require('fs');
const licenseImage = new Map([
    ["Apache", "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"],
    ["MIT", "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"],
    ["Creative Commons", "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0%201.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)"],
    ["GPLv2", "[![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)"]
]);

inquirer
  .prompt([
    {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
    },
    {
        type: "input",
        message: "What is the description of your project?",
        name: "description",
    },
    {
        type: "input",
        message: "What are the installation instructions for your project?",
        name: "installation",
    },
    {
        type: "input",
        message: "Is there any usage information for your project?",
        name: "usage",
    },
    {
        type: "input",
        message: "What are the contribution guidelines for your project?",
        name: "contribution",
    },
    {
        type: "input",
        message: "What are the test instructions for your project?",
        name: "test",
    },
    {
        type: "list",
        message: "Which license did you choose for your application?",
        name: "license",
        choices: ["Apache", "MIT", "Creative Commons", "GPLv2"]
    },
    {
        type: "input",
        message: "What is your full name?",
        name: "name"
    },
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "username"
    },
    {
        type: "input",
        message: "What email address is best to reach you for questions about your repository?",
        name: "email"
    }
  ])
  .then((response) => {
    var title = response.title;
    var description = response.description;
    var installation = response.installation;
    var usage = response.usage;
    var contribution = response.contribution;
    var test = response.test;
    var license = response.license;
    var name = response.name;
    var username = response.username;
    var email = response.email;


    var badging = licenseImage.get(license);

    var fileContents = 
`# ${title} ${badging}
${description}
## Table of Contents
[Installing/Dependencies](#installingdependencies)  

[Walkthrough/Usage Information](#walkthroughusage-information)  

[Contributing to the README.md Generator](#contributing-to-the-readmemd-generator)  

[Test Instructions](#test-instructions)  

[Author](#author)  

[License](#license)
## Installing/Dependencies
\`\`\`${installation}\`\`\`
## Walkthrough/Usage Information
${usage}
## Contributing to the README.md Generator
${contribution}
## Test Instructions
${test}
## Author
[${name}](https://github.com/${username}) -- You can reach me anytime for questions or collaboration at ${email}.
## License
This project is licensed under [${license}](LICENSE) - 2020 Laura Baumann`;

    fs.writeFile('README.md', fileContents, (error) =>
    error ? console.error(error) : console.log('Success!'));
});
