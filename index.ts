import { getAllStudents, getOnsiteStudent, isPassedEntryTest, particularStudent } from "./students";

//To get all students' data
const allStudents = getAllStudents()
console.log("-".repeat(40));
console.log("\t All Students\n","-".repeat(40),"\n", allStudents);

//To get only onsite students' data
const onsiteStudent = getOnsiteStudent()
console.log("-".repeat(40));
console.log("\t Onsite Students\n","-".repeat(40),"\n", onsiteStudent);

//To get the data of only passed students
const passedStudents = isPassedEntryTest()
console.log("-".repeat(40));
console.log("\t Passed Students\n","-".repeat(40),"\n", passedStudents)

//To get a particular student's data
const result = particularStudent(1004)
console.log("-".repeat(40));
console.log("\t Particular Student\n","-".repeat(40),"\n", result);
