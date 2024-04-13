#! /usr/bin/env node

import chalk from "chalk";
import inquirer from "inquirer";
let todos = []

console.log(chalk.yellow.bold("\n\t Wellcome to my dream-todos application\n"));

let condition = true;
while(condition)
{
    let todoQuestions = await inquirer.prompt(
        [
        {
        name : "firstQuestion",
        type : "input",
        message : chalk.magenta("What would you like to add in your todos?"),
    },
    {
        name : "secondQuestion",
        type : "confirm",
        message : chalk.magenta("Would you like to add more in your todos?"),
        default : "true"
    }
]
)
todos.push(todoQuestions.firstQuestion);
console.log(todos);
condition = todoQuestions.secondQuestion;
}
