`use strict`;
// console.log(`Hello World!`);

// Variables in JS
const name = 'Arpit';
let age = 25;
let numberOfEggs = 4;
// console.log(numberOfEggs += 6);
// console.log(numberOfEggs);
let assignedEggsToPerson = numberOfEggs;
// console.log(assignedEggsToPerson);

let myIntro = `Hello, My name is ${name} and I am ${age} years old!`;
// console.log(myIntro);

const friends = [`Arpit`,`Rajesh`,`Manthan`,`Priyanshu`,`Avinash`,`Ankur`];
// console.log(friends);
const personObject = 
{
    name:'Arpit',
    age:25,
    backgroundDegree:'Engineering',
    hobbies:['Coding','Programming','Reading!']
}
// console.log(personObject);
const isArpitCool = true;
let isIamLookingForANewJob = true;

if(age >= 18)
{
    console.log(`Person is Eligble to vote and for having a driving licence!`);
}

else
{
    console.log(`Person is not eligble, try after ${18 - age} years later.`);
}

// for(let i=0;i<friends.length;i++)
// {
//     if(friends[i] === `Arpit`)
//     {
//         continue;
//     }
//     console.log(`Hello ${friends[i]}`);
// }


function greetingMyFriends(friends)
{
    // console.log(friends);
    friends.forEach(friend => {
        if(friend === `Arpit`)
        {
            return;
        }
        console.log(`Hello ${friend}`);
    })
}
// console.log(friends);
greetingMyFriends(friends);