# README.md Generator [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
This is a terminal/server-side node.js application built as a project for my fullstack coding bootcamp. It is built to generate a professional README.md file for any GitHub project by answering simple command line questions. All of the functionality of this application is powered by Node.js, NPM Inquirer and FileSystem, as well as Javscript. As this is not a web application, it is not currently deployed on GitHub Pages, but a video walkthrough of the application can be found below.

## Table of Contents

[User Story & Acceptance Criteria](#user-story-acceptance-criteria) 

[Installing/Dependencies](#installingdependencies)  

[Usage Information](#usage-information)

[Walkthrough](#walkthrough)  

[Contributing to the README.md Generator](#contributing-to-the-readmemd-generator)  

[Test Instructions](#test-instructions)  

[Questions?](#questions)  

[License](#license)

## User Story & Acceptance Criteria
#### User Story
I was given the following user story to guide my development:

```
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

#### Acceptance Criteria
As a part of this project, I was also provided with the following standards that my project should meet:

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Installing/Dependencies
```npm install inquirer```
## Usage Information
Clone this project, run 'node index.js' in your terminal, and answer the following questions prompted by the terminal based on the project you are building the README.md file for.

## Walkthrough
![Opening Screen](https://github.com/thelbaumann/README.Generator/blob/main/Assets/Screenshots/screen_1.png)

When you open the project in your code editor, you will find a small amount of files. Some node packages, a license, and a few other standard Node.JS folders/files. There is only one page written with active functions and variables, however, and that is index.js. On this page, you will find the requiring of NPM Inquirer as well as the FileSystem, and a global variable object that equates a key to a value using license names and their respective badges.

Below, you will find the start of the Inquirer prompts. These prompts use command line questions + answers to obtain all the information it needs to generate a professional README.md file for your project. Once these prompts finish, it triggers a "then" function which assigns these responses to variables, and then places these variables in a larger variable's template string. Then, this template string uses the FileSystem to generate and write to a new README.md file with the information it has been given.

![Failed Prompt Validation](https://github.com/thelbaumann/README.Generator/blob/main/Assets/Screenshots/validation_failed.png)

If, while a user is answering a question, the user attemps to press enter and skip a question, each prompt (besides the list of licenses prompt) has a validator function that makes sure the user answers each question before moving on.

  In future updates of this application, I hope to improve it so that users can dynamically skip categories they wish not to include, and those sections of the file will either be appended or not to the ultimate template file string, allowing this template to be much more configurable.
  
 ![Answers Passing Validation](https://github.com/thelbaumann/README.Generator/blob/main/Assets/Screenshots/validation_passed.png)
 
 Furthermore, once the user corrects the unanswered question, the validator function within that prompt returns a value of "true" which then allows the application to continue on to the next prompt.
 
 #### Click to watch the video below, which displays a utilization of this application!

[Application Walkthrough Video](https://drive.google.com/file/d/1mFL84E9Tk846vAx-d_Bk882SNhUbixjL/view?usp=sharing)

The sample README.md file generated in this video resides in the assets folder of this repository and can be found [here](https://github.com/thelbaumann/README.Generator/blob/main/Assets/sample-README.md).

## Contributing to the README.md Generator
Pull requests are welcome! Find my contact information below to reach out about collaborating with me.
## Test Instructions
No tests are running for this application currently.
## Questions?
[Laura Baumann](https://github.com/thelbaumann) -- You can reach me anytime for questions or collaboration at l.bmann@yahoo.com.
## License
This project is licensed under [MIT](LICENSE) - 2020 Laura Baumann
