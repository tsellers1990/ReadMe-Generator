    const inquirer = require("inquirer");
    const fs = require("fs");

    const questions = [  //prompt these boiz
        {
            type:"input",
            message:"What's your name?",
            name:"q1"
        },
        {
            type:"input",
            message:"Where are you located?",
            name:"q2"
        },
        {   
            type:"input",
            message:"Give a quick Bio:",
            name:"q3"
        },
        {
            type:"input",
            message:"Your LinkedIn URL:",
            name:"q4"
        },
        {
            type:"input",
            message:"Your GitHub URL:",
            name:"q5"
        }

    ];

    function init() { //this initializes the whole ass process of starting the readme generation // question answers are dropped into vars here
    inquirer 
        .prompt(questions)
        .then(function(response){
            console.log(response)

            writeToFile("changeName",userResponse);
        });
        
    }

    function writeToFile(fileName, data) { //file name is RenameMe.md //~~~~~~~~~set this up to write to a file
        // fs.writeFile(fileName, data);

        fs.writeFile("changeName.md", JSON.stringify(response, null, 4), err => { //writes the cat.json file
            if (err){
                throw err;
            }
        })

    }


    init(); //calls the init function

