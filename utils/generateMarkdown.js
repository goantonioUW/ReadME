var fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  # ${data.title}

  # Table Of Contents
  ${data.contents}

  # Description 
  ${data.description}
  
  # Installation
  ${data.installation}

  # Usage
  ${data.usage}

  # Licence
  ${data.license}

  # Contributing
  ${data.contributing}

  # Example
  ${data.test}
  `;
}

module.exports = generateMarkdown;
