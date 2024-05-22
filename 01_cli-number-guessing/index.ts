#! /usr/bin/env node
//shabang
import inquirer from "inquirer";

//1) computer will generate a random number

//2) user input for guessing number

//3) compair user input with computer generated number and show result

const randomNumber = Math.floor(Math.random() * 10 + 1);

const answer = await inquirer.prompt([
    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-10:",  

    }
]);

if(answer.userGuessedNumber === randomNumber){
    
    console.log("Congratulation you guessed right number.");
}else{
    console.log("You guessed wrong number.");
}


