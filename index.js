"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const students_1 = require("./students");
//To get all students' data
const allStudents = (0, students_1.getAllStudents)();
console.log("-".repeat(40));
console.log("\t All Students\n", "-".repeat(40), "\n", allStudents);
//To get only onsite students' data
const onsiteStudent = (0, students_1.getOnsiteStudent)();
console.log("-".repeat(40));
console.log("\t Onsite Students\n", "-".repeat(40), "\n", onsiteStudent);
//To get the data of only passed students
const passedStudents = (0, students_1.isPassedEntryTest)();
console.log("-".repeat(40));
console.log("\t Passed Students\n", "-".repeat(40), "\n", passedStudents);
//To get a particular student's data
const result = (0, students_1.particularStudent)(1004);
console.log("-".repeat(40));
console.log("\t Particular Student\n", "-".repeat(40), "\n", result);
