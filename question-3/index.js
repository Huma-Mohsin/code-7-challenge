//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var my_student = {
    firstName: "Zimmal",
    lastName: "Khan",
    Grade: "10th",
    section: "A",
    courses: ["Artifical Intelligence", "BlockChain", "Web 3.0 & Metaverse"],
    contactNumber: 123456789,
    email: "zimmal@example.com"
};
console.log("STUDENT NAME:- ".concat(my_student.firstName, " ").concat(my_student.lastName)); //object can be called as by its variable.
console.log("GRADE:- ".concat(my_student.Grade));
console.log("SECTION:- ".concat(my_student.section));
console.log("COURSES:- ".concat(my_student.courses));
console.log("CONTACT NUMBER:- ".concat(my_student.contactNumber));
console.log("E-MAIL:- ".concat(my_student.email));
