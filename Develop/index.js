const inquirer = require("inquirer")
const axios = require("axios")
const generateMarkdown = require("./utils/generateMarkdown")
const fs = require("fs")

const questions = [{
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"]
    },
    {
        type: "input",
        name: "installation",
        message: "What command should be run to install dependencies?",
        default: "npm i"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests?",
        default: "npm test"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What does the user need to know about contributing to the repo?",
    }


];



function writeToFile(data, response) {
    fs.writeFile("readme.md", generateMarkdown(data, response), function(err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });

}

function init() {
    inquirer
        .prompt(questions).then(function(response) {
            const queryUrl = `https://api.github.com/users/${response.username}?client_id=${
                process.env.CLIENT_ID
                }&client_secret=${process.env.CLIENT_SECRET}`;
            axios
                .get(queryUrl)
                .then(function(data) {
                    console.log(data)

                    writeToFile(data, response);


                });


            console.log(response)

        })

}

init();