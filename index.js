const inquirer = require('inquirer')

inquirer.prompt ([
    {    
        type: 'list',
        name: 'all questions',
        messge: 'What would you like to do?',
        choices: [
            'View all deparments', 'View all roles', 'View all employees', 
            'Add a deparment', 'Add a role', 'Add an employee', 'Update employee role'
        ]    }
])
.then((answers) => {
    if (answers === []) {
        
    }
})