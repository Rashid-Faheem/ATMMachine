#! /usr/bin/env node
import inquirer from "inquirer";

console.log(`---------------------------------------------------------`);
console.log(`                   Welcome to My Bank                   `);
console.log(`---------------------------------------------------------`);

const userPin: number = 3771;
let isLogin: boolean = false;
let isok: boolean = false;
let counter: number = 4;
let accBalance: number = 8500;

while (isLogin === false && counter > 0) {
  let pinNumber = await inquirer.prompt([
    {
      message: "Enter Pin Number",
      name: "pinEntered",
      type: "number",
    },
  ]);
  if (pinNumber.pinEntered === userPin) {
    isLogin = true;
    console.log(`---------------------------------------------------------`);
    console.log(`                         Welcome                         `);
    console.log(`---------------------------------------------------------`);
    let option1 = await inquirer.prompt([
      {
        message: "Select Option!",
        name: "selectedOption1",
        type: "list",
        choices: ["Show Balance", "Cash Withdrawl", "Fast Cash", "Cancel"],
      },
    ]);

    if (option1.selectedOption1 === "Show Balance") {
      console.log(`your Account balance is Rs. ${accBalance}`);
    } else if (option1.selectedOption1 === "Cash Withdrawl") {
      while (isok === false) {
        let cashWD = await inquirer.prompt([
          { message: "Enter Amount:", type: "number", name: "cwdamt" },
        ]);

        let mod = cashWD.cwdamt % 500;

        //console.log(mod);
        if (mod === 0) {
         
          if (accBalance < cashWD.cwdamt) {
            console.log("Insufficient Balance!");
          }
          else{
            accBalance -= cashWD.cwdamt;
            console.log(`Take your Cash! Remaining Balance Rs. ${accBalance}`);
            isok = true;
          }
        }
        else{
          console.log("Amount must be rounded upto 500");
        }
      }
    }
  } else {
    console.log("Entered Pin is incorrect!");
    isLogin = false;
    counter--;
  }
}
