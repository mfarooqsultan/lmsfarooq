import { Student, CourseInst, registerd_students, student_profile, course_enroll } from "./stData.js";
import inquirer from "inquirer";
import chalk from "chalk";
import { table } from "console";
//  STUDENT SECTION
async function student_login() {
    let todo = await inquirer.prompt([
        {
            name: "todo",
            type: "list",
            message: chalk.redBright("what do you want to select?"),
            choices: ["enroll courses", "results"]
        }
    ]);
    switch (todo.todo) {
        case "enroll courses":
            let courseenrolled = [];
            console.log("how many courses you have enrolled");
            let condition = true;
            while (condition) {
                let selected = await inquirer.prompt([
                    {
                        name: "selection",
                        type: "list",
                        message: "selected courses are:",
                        choices: course_enroll
                    }
                ]);
                courseenrolled.push(selected.selection);
                let admorecourses = await inquirer.prompt([
                    {
                        name: "adding",
                        type: "confirm",
                        message: "do you want to add more courses?"
                    }
                ]);
                condition = admorecourses.adding;
            }
            console.log("Successfully enrolled");
            //  End of while condition.
            courseenrolled.forEach(e => { console.log(e); });
            student_login();
            break;
        case "results":
            console.log(chalk.bgGreenBright("result not announced"));
            student_login();
            break;
    }
}
;
//  ADMIN SECTION
async function admin_login() {
    let todo1 = await inquirer.prompt([
        {
            name: "admin",
            type: "list",
            message: chalk.green("Select option"),
            choices: ["studentlist", "addingstudents", "profiles"]
        }
    ]);
    switch (todo1.admin) {
        case "studentlist":
            console.log(table(registerd_students));
            admin_login();
            break;
        case "addingstudents":
            let condition1 = true;
            while (condition1) {
                let adding = await inquirer.prompt([
                    {
                        name: "studentname",
                        type: "input",
                        message: "what's name of a student?",
                    },
                    {
                        name: "rollno",
                        type: "input",
                        message: "enter new rollno."
                    },
                    {
                        name: "degreetitle",
                        type: "input",
                        message: "Name of degree"
                    },
                    {
                        name: "courses",
                        type: "list",
                        message: "courses you want to take:",
                        choices: course_enroll
                    }
                ]);
                let studentNew = new Student(adding.studentname, adding.departmentname, adding.rollno, adding.degreetitle);
                let newcourse = new CourseInst(adding.courses, "ghoraya");
                studentNew.course_enrolled(newcourse);
                registerd_students.push(studentNew);
                let adDetail = await inquirer.prompt([
                    {
                        name: "newlist",
                        type: "confirm",
                        message: "do you want to add more Students Admin?"
                    }
                ]);
                condition1 = adDetail.newlist;
            }
            //  end of while loop
            console.log(table(registerd_students));
            admin_login();
            break;
        case "profiles":
            console.log(chalk.bgGrey.bold("enter rollno to search"));
            let condition2 = true;
            while (condition2) {
                let prof = await inquirer.prompt([
                    {
                        name: "profid",
                        type: "input",
                        message: chalk.bgBlue("Enter student rollno")
                    }
                ]);
                console.log(`Studentname:${student_profile[prof.profid]?.name}`);
                console.log(`Departmentname:${student_profile[prof.profid]?.department}`);
                console.log(`Rollno:${student_profile[prof.profid]?.rollno}`);
                console.log(`Degree of:${student_profile[prof.profid]?.degreetitle}`);
                console.log(`Semesteris:${student_profile[prof.profid]?.semester}`);
                console.log(`CGPA is:${student_profile[prof.profid]?.cgpa}`);
                console.log(`Fee Status is:${student_profile[prof.profid]?.feestatus}`);
                let recheck = await inquirer.prompt([
                    {
                        name: "search",
                        type: "confirm",
                        message: chalk.red("do you want to check more profiles?")
                    }
                ]);
                condition2 = recheck.search;
            }
            //  loop ends
            admin_login();
            break;
    }
}
;
export { student_login, admin_login };
