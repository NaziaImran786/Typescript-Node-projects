import inquirer from "inquirer";
let userId = "";
let pinNumber = 1234;
let myCurrent_balance = 10000;
//-------------------------------- asking userId -----------------------------------
let userName_ans = await inquirer.prompt([
    {
        name: "user_name",
        type: "input",
        message: " What is your Good Name !",
    }
]);
if (userName_ans.user_name !== undefined &&
    userName_ans.user_name !== null &&
    userName_ans.user_name !== "") {
    userId = userName_ans.user_name;
}
;
//---------------------------------------- main function ------------------------------
let pin_ans = await inquirer.prompt([
    {
        type: "number",
        name: "pin",
        message: "Enter your 4 digit pin code.",
    }
]);
if (pin_ans.pin === pinNumber) {
    console.log(`Hello ${userId}, Welcom to ATM.`);
}
;
console.log(`Your current Balance is: ${myCurrent_balance}`);
let anotherTransaction = true;
while (anotherTransaction) {
    let choice = await inquirer.prompt([
        {
            type: 'list',
            name: 'options',
            message: "Please select an option:",
            choices: [
                "Deposit Amount",
                "Cash Withdraw",
                "Balance Check",
                "Fast Cash",
            ],
        }
    ]);
}
;
// ------------------------ Deposit Amount ------------------------
if (`choice.options === "Deposit Amount"`) {
    const Deposit_ans = await inquirer.prompt([
        {
            name: "deposit_amount",
            type: "number",
            message: "Enter your Amount to Deposit: ",
        }
    ]);
    if (Deposit_ans.deposit_amount > 0) {
        myCurrent_balance = myCurrent_balance + Deposit_ans.deposit_amount;
        console.log(` Your Current Balance is: $${myCurrent_balance}`);
    }
    else {
        console.log(`You Entered Invalid Amount.`);
    }
}
// // ------------------------ Cash-Withdraw ------------------------
// else if (`choice.options === "Cash Withdraw"`) {
//     const Withdraw_ans = await inquirer.prompt(
//         [
//             {
//                 type: "number",
//                 name: "amount",
//                 message: "Enter the amount to withdraw:",
//             },
//         ]
//     );
// if (Withdraw_ans.amount < myCurrent_balance && Withdraw_ans.amount > 0) {
//         console.log(`Withdraw $${Withdraw_ans.amount} from your account.`);
//         myCurrent_balance = myCurrent_balance - Withdraw_ans.amount;
//         console.log (`Your Current Balance is: $${myCurrent_balance}`);
//  }else {
//         console.log(`Insufficient balance or Invalid Amount.`);
//        }
// }
// // ------------------------ Balance check ------------------------
// else if (`choice.options === "Balance Check"`) {
//     console.log(`Your Current Balance is: $${myCurrent_balance}`);
// }
// // ------------------------ Fast cash ------------------------
// else if (`choice.options === "Fast Cash"`) {
//     const fast_cash = await inquirer.prompt([
//         {
//             type: "list",
//             name: "options",
//             message: "Please select an option:",
//             choices:[
//                         "- Withdraw: $100",
//                         "- Withdraw: $500",
//                         "- Withdraw: $1000",
//                     ],
//         },
//     ]
// );
//     if (myCurrent_balance >= 100) {
//         if (fast_cash.options === "- Withdraw: $100") {
//             console.log(`nWithdrawn $100 from your account.`);
//             myCurrent_balance = myCurrent_balance - 100;
//             console.log(` Your Current Balance is: $${myCurrent_balance}`);
//         }
//         else if (fast_cash.options === "- Withdraw: $500") {
//             console.log(`Withdrawn $500 from your account.`);
//             myCurrent_balance = myCurrent_balance - 500;
//             console.log(`Your Current Balance is: $${myCurrent_balance}\n`);
//         }
//         else if (fast_cash.options === "- Withdraw: $1000") {
//             console.log(`\nWithdrawn $1000 from your account.`);
//             myCurrent_balance = myCurrent_balance - 1000;
//             console.log(`Your Current Balance is: $${myCurrent_balance}`);
//         }
//     }
//     else {
//         console.log(`Insufficient balance or Invalid Amount.`);
//     }
// }
// const confirmation_ans = await inquirer.prompt(
//     [
//         {
//             type: "confirm",
//             name: "user_confirmation",
//             message: ("Do you want to do another transaction.? "),
//         }
//     ]
// );
// if (confirmation_ans.user_confirmation === false) {
//     anotherTransaction = false;
// };
// console.log(`Thank you for using the ATM. Have a great day! `);
// process.exit(); 
