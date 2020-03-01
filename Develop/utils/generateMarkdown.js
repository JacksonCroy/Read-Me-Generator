function generateMarkdown(data, response) {
    return `
  # ${response.title}

  
  ## Description
   \`\`\`
 * ${response.description}
  \`\`\`
 
   ### Installing

  \`\`\`
  * ${response.installation}
  \`\`\`
  
  
  ## Running the tests
  
  * ${response.test}

  
  ## Usage
  
  \`\`\`
  * ${response.usage}
  \`\`\`
  
  
  ## Contributing
  
  * ${response.contributing}
  
  ## badges
  
  ![badmath](https://img.shields.io/github/languages/top/nielsenjared/badmath) 
  
  ## Authors
  \`\`\`
  * ${response.username}
  * ${data.data.email}
  * ${data.data.bio}
  \`\`\`
  
  ## License
  
  * ${response.license}
  
`;

}

module.exports = generateMarkdown;