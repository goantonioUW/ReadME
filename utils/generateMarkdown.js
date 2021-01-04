var fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  ## Table Of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Example](#example)
  - [Questions](#questions)

  ## Description 
  ${data.description}
  
  ## Installation
  ${data.installation}

  ## Usage
  ${data.usage}

  ## Licence
  ${data.license}

  ## Contributing
  To contribute please email me and I will add you here. 
  ${data.contributing}

  ## Example
  This is a video of the finished application
  ${data.test}

  ## Questions
  Please reach out to me at:
  ${data.questions}


  `;
}

module.exports = generateMarkdown;
