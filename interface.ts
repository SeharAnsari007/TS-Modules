export interface EntryTest {
    isPassed : boolean;
    obtainedMarks : number;
    totalMarks : number
}
export interface Student {
    id : number,
    firstName : string;
    lastName : string;
    rollNumber : number;
    isOnsiteAllowed : boolean;
    entryTest : EntryTest
}