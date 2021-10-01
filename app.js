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
                'view all departments',
                'view all roles',
                'view all employees',
                'add a department',
                'add a role',
                'add an employee',
                'update an employee role'
            ]
        }
    ])
    .then((answer) => {
        switch (answer.choices) {
            case 'view all departments':
                viewAllDepartments();
                break;

            case 'view all roles':
                viewAllRoles();
                break;

            case 'view all employees':
                viewAllEmployees();
                break;
                
            case 'add a department':
                addDepartment();
                break;

            case 'add a role':
                addRole();
                break;

            case 'add an employee':
                addEmployee();
                break;

            case 'update an employee role':
                updateByRole();
                break;
        }
    });
}

function viewAllDepartments() {
    
};

function viewAllRoles() {

};

function viewAllEmployees() {

};

function addDepartment() {

};

function addRole() {

};

function addEmployee() {

};

function updateByRole() {

};

promptUser();