var fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ##Description
  ${data.description}
  
  ${data.projectImage}
  `;
}

module.exports = generateMarkdown;
