    const inquirer = require("inquirer");
    const fs = require("fs");

    const questions = [  //prompt these boiz
        {
            type:"input",
            message:"What's your name?",
            name:"This was created by"
        },
        {
            type:"input",
            message:"Where are you located?",
            name:"This was Developed in"
        },
        {   
            type:"input",
            message:"Give a quick Bio:",
            name:"Bio"
        },
        {
            type:"input",
            message:"Your LinkedIn URL:",
            name:"Follow this Dev's Linkedin at"
        },
        {
            type:"input",
            message:"Your GitHub URL:",
            name:"Link to the Dev's GitHub"
        }

    ];



    function init() { //this initializes the whole ass process of starting the readme generation // question answers are dropped into vars here
    inquirer 
        .prompt(questions)
        .then((response => {
            console.log(response)

            writeToFile("changeName", response);
        }));
        
    }

    function writeToFile(fileName, response) { //file name is RenameMe.md //~~~~~~~~~set this up to write to a file
        // fs.writeFile(fileName, data);

        fs.writeFile("changeName.md", JSON.stringify(response, null, 4), err => { //writes the cat.json file
            if (err){
                throw err;
            }
        })

    }


    init(); //calls the init function

