#! /usr/bin/env node
import inquirer from "inquirer";

console.log(`---------------------------------------------------------`);
console.log(`                   Welcome to My Bank                   `);
console.log(`---------------------------------------------------------`);

const userPin: number = 3771;
let isLogin: boolean = false;
let counter:number = 4;
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
  isLogin= true;
} else {
  console.log("Entered Pin is incorrect!");
  isLogin= false;
  counter--;
}
}