import inquirer from 'inquirer'

// const inquirer = require('inquirer');

// const {prompt} = require("inquirer");

function questions() {
    inquirer.prompt ([
    {    
        type: 'list',
        name: 'all questions',
        messge: 'What would you like to do?',
        choices: [
            'View all deparments', 'View all roles', 'View all employees', 
            'Add a deparment', 'Add a role', 'Add an employee', 'Update employee role'
        ]    
    }
])
.then((answers) => {
    console.log(answers)
    // if (answers === []) {
        
    // }
})
}

questions()



// inquirer
//   .prompt([
//     /* Pass your questions in here */
//   ])
//   .then((answers) => {
//     // Use user feedback for... whatever!!
//   })
//   .catch((error) => {
//     if (error.isTtyError) {
//       // Prompt couldn't be rendered in the current environment
//     } else {
//       // Something else went wrong
//     }
//   });