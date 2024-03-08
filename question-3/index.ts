//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.

//define an interface of an object.
interface student{
    firstName:string,
    lastName:string,
    Grade:   string,
    section: string,
    courses:string[],
    contactNumber:number,
    email?:string;//optional
}

const my_student: student={
    firstName:"Zimmal",
    lastName:"Khan",
    Grade:   "10th",
    section: "A",
    courses:["Artifical Intelligence","BlockChain","Web 3.0 & Metaverse"],
    contactNumber:123456789,
    email:"zimmal@example.com"

}
console.log(`STUDENT NAME:- ${my_student.firstName} ${my_student.lastName}`);//object can be called as by its variable.
console.log(`GRADE:- ${my_student.Grade}`);
console.log(`SECTION:- ${my_student.section}`);
console.log(`COURSES:- ${my_student.courses}`);
console.log(`CONTACT NUMBER:- ${my_student.contactNumber}`)
console.log(`E-MAIL:- ${my_student.email}`)
