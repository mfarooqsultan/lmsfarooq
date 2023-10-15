#! /usr/bin/env node
import inquirer from "inquirer";
import chalk from "chalk";
import {Student,Profile,CourseInst,registerd_students,student_profile,course_enroll} from "./stData.js"
import { student_login,admin_login } from "./func.js";
import { table } from "console";

console.log(chalk.bgBlueBright.bold("WELCOME TO LEARNING MANAGEMENT SYSTEM"));

let accountlogin = await inquirer.prompt([
{
name:"account",
type:"list",
message:(chalk.bgYellowBright("Do you want to login as Student or Admin?")),
choices:["student","admin"]
}
]);
if (accountlogin.account==="student"){
console.log("Student is");
await student_login()
}
else
{await admin_login()};

