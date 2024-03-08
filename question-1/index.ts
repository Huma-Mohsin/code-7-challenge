// Question 19: Dinner Guests: Use one of your programs from Exercises 14 through 18 to print a message indicating the number of people you are inviting to dinner.


// Explain & TIP: Arrays have a length property that tells you how many items are in the list. Use this to inform your guests how big the party will be.

let people_at_party:string[]=["Alexander","christian","kaira","Mona"]
for(let i=0;i<people_at_party.length;i++){

    console.log(`Dear ${people_at_party[i]}, We hope this message finds you in great spirits! We are thrilled to share  about the upcoming party we are hosting and couldn't be more delighted to have you join us for the celebration.`)
    console.log("\n")
}
console.log(`total guest invited in a party are = ${people_at_party.length}`)//finding total guest in number.