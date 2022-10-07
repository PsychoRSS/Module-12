import inquirer from 'inquirer'

// const inquirer = require('inquirer');

// const {prompt} = require("inquirer");
function all() {
    console.log('welcome')
}

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
    switch (answers['all questions'] ) {
        case 'View all deparments' :
            all()
            break;
        case 'View all roles' :
            allrole()
            break;
        
    }
    // if (answers == choices[0]) {
    //     console.log(answers)
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