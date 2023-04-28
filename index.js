// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const MarkDown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = [
    { //title
        type:'input',
        name:'title',
        message:'What is the title: '
    },
    { //entitled Description
        type:'input',
        name:'description',
        message:'Describe your project: '
    }, 
    {//Installation
        type:'input',
        name:'installation',
        message:'Describe the installation instructions: '
    },
    {//Usage
        type:'input',
        name:'usage',
        message:'Describe the usage: '
    }, 
    {//Contributing
        type: 'input',
        name:'contributing',
        message:'contribution guidelines:'
    },
    {//Tests
        type:'input',
        name:'test',
        message:'Test instructions:'
    }, 
     {//list License
        type:'list',
        name:'license',
        message:'License',
        choices:['MIT', 'ISC', 'GNUPLv3'],
        filter(val){
            return val.toLowerCase();
        }
    },
    {//entitleQuestions with a link to my GitHub profile
        type:'input',
        name: 'github',
        message:'For questions(gitHub)?'
    },
     {//entitleQuestions with a link to my GitHub profile
        type:'input',
        name: 'email',
        message:'For questions(email)?'
    } 

];
function askQuestion(){
    return inquirer.prompt(questions)
        .then((answers)=>{
            const mark = MarkDown.generateReadme(answers)
// TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

            fs.writeFile('README.md', mark, function(err){
                if(err){   
                    console.log('could not save file', err)
                }else {
                console.log('Sucess: new ReadableStreamDefaultController.md file generated inside the current folder') 
            }
            })
        })
        .catch((error)=>  {
            console.log(error)
        })
}
askQuestion();


//  whats this for
// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
 