const inquirer = require('inquirer');
const mysql = require('mysql2');
const cTable = require('console.table');
const connection = require('./server');

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'choices',
            message: 'What would you like to do?',
            choices: [
                'View all employees',
                'View all employees by department',
                'View all employees by manager',
                'Add employee',
                'Remove employee',
                'Update employee role',
                'Update employee manager'
            ]
        }
    ])
    .then((answer) => {
        switch (answer.choices) {
            case 'View all employees':
                viewAllEmployees();
                break;

            case 'View all employees by department':
                viewAllByDepartment();
                break;
                
            case 'View all employees by manager':
                viewAllByManager();
                break;

            case 'Add employee':
                addEmployee();
                break;

            case 'Remove employee':
                removeEmployee();
                break;

            case 'Update employee role':
                updateByRole();
                break;

            case 'Update employee manager':
                updateByManager();
                break;
        }
    });
}

function viewAllEmployees() {
    connection.query(
        'SELECT * FROM employee',
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.table(res)
            promptUser();
        }
    )
};

function viewAllByDepartment() {
    connection.query(
        'SELECT * FROM department', (err, res) => {
            if (err) {
                console.log(err);
            }
            console.table(res)
            promptUser();
        }
    )
};

function viewAllByManager() {
    connection.query(
        'SELECT manager.first_name, "", manager.last_name) AS manager FROM employee LEFT JOIN employee manager ON manager.id = employee.manager_id',
        (err, res) => {
            if (err) {
                console.log(err);
            }
            console.table(res)
            promptUser();
        }
    )
}

function addEmployee() {

}

function removeEmployee() {

}

function updateByRole() {

}

function updateByManager() {

}

promptUser();