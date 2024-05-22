#! /usr/bin/env node

import inquirer from "inquirer";

const userAns:{
    sentence : string    
}= await inquirer.prompt(
    [
        {
            name:"sentence", 
            type: "input",
            message: "Enter Your Sentence To Count The Word:"
        }
    ]
)
const words = userAns.sentence.trim().split(" ").length

console.log(words);
