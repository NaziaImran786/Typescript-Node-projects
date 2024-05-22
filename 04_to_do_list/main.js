#! /usr/bin/env node
import inquirer from "inquirer";
let todosList = [];
let condition = true;
while (condition === true) {
    let addTask = await inquirer.prompt([
        {
            name: 'userOption',
            type: 'list',
            message: 'select anoption',
            choices: ['add', 'remove']
        }
    ]); ///////   add     /////
    if (addTask.userOption === "add") {
        let ans = await inquirer.prompt([
            {
                type: 'input',
                name: 'answer',
                message: "What you want to add in your Todos ?",
            }
        ]);
        if (ans.answer !== '') {
            todosList.push(ans.answer);
            console.log(todosList);
        }
        else {
            console.log('Please write something to add in the todo list.');
        }
    }
    /////////      remove     ////////////
    else if (addTask.userOption === "remove") {
        let removechoice = await inquirer.prompt([{
                type: 'list',
                name: 'removeItem',
                message: 'select item to remove',
                choices: todosList
            }]);
        let index_to_remove = todosList.indexOf(removechoice.removeItem);
        if (index_to_remove >= 0) {
            todosList.splice(index_to_remove, 1);
            console.log('you remove: ', removechoice.removeItem);
        }
    }
    //////// confirmation  ////////
    let answer = await inquirer.prompt([
        {
            name: 'select',
            type: 'confirm',
            message: "Do you want to continue ?",
            default: "true",
        }
    ]);
    if (answer.select === false) {
        condition = false;
    }
}
console.log(`Thank you for using todos list`);
