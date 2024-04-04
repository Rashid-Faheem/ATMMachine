#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`---------------------------------------------------------`);
console.log(`                   Welcome to My Bank                   `);
console.log(`---------------------------------------------------------`);
const userPin = 3771;
let isLogin = false;
let counter = 4;
while (isLogin === false && counter > 0) {
    let pinNumber = await inquirer.prompt([
        {
            message: "Enter Pin Number",
            name: "pinEntered",
            type: "number",
        },
    ]);
    if (pinNumber.pinEntered === userPin) {
        console.log(`---------------------------------------------------------`);
        console.log(`                         Welcome                         `);
        console.log(`---------------------------------------------------------`);
        isLogin = true;
    }
    else {
        console.log("Entered Pin is incorrect!");
        isLogin = false;
        counter--;
    }
}
