var fs = require("fs");

// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.description}
  
  # Screenshot
  ${data.projectImage}

  # Live link
  ${data.liveLinks}

  # Contact me
  ${data.contactMe}
  `;
}

module.exports = generateMarkdown;
