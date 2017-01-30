/*Advanced Loops Review
Good job on this assignment.  In your search function you were also supposed to log the position at which the name was found.  This could be done by simply 
adding (i+1) to the end of the string you console.log().  You could also instead of having two variables that you reassign based on whether or not you find 
the name, just console.log() the name when you find it, and have a conditional statement if you don't find it.  Good job on the second function!
*/

//Array of people, there is no need to change this
const PERSONDATA = [{
    name: "Michael",
    rank: 4,
    age: 19,
    score: 66
}, {
    name: "Emily",
    rank: 7,
    age: 22,
    score: 37
}, {
    name: "Sam",
    rank: 2,
    age: 23,
    score: 80
}, {
    name: "William",
    rank: 10,
    age: 26,
    score: 11
}, {
    name: "James",
    rank: 8,
    age: 26,
    score: 28
}, {
    name: "Mia",
    rank: 5,
    age: 28,
    score: 54
}, {
    name: "Isabella",
    rank: 1,
    age: 31,
    score: 100
}, {
    name: "Alex",
    rank: 3,
    age: 34,
    score: 75
}, {
    name: "Olivia",
    rank: 6,
    age: 36,
    score: 42
}, {
    name: "Geoff",
    rank: 9,
    age: 41,
    score: 19
}]

search("James", PERSONDATA)  // Should log that James was found at position #5
search("Eric", PERSONDATA)   // Should log that Eric was not found.

console.log(filter(PERSONDATA, 50)) // Should display an array of everyone with a score greater than 50
/* Ex: 
[ { name: 'Alex', rank: 3, age: 34, score: 75 },
  { name: 'Isabella', rank: 1, age: 31, score: 100 },
  { name: 'Mia', rank: 5, age: 28, score: 54 },
  { name: 'Michael', rank: 4, age: 19, score: 66 },
  { name: 'Sam', rank: 2, age: 23, score: 80 } ]
*/

/*
    Write your functions below.
*/
// search PERSONDATA for names
function search(name, PERSONDATA) {
    let foundName = ""
    let notFound = ""
    for (let i = 0; i < PERSONDATA.length; i++) {
        if (name === PERSONDATA[i].name) {
            foundName = (name + " was found")

        }
        else (
            notFound = (name + " was not found")
        )


    }
    if (foundName === "")
        console.log(notFound);

    else
        console.log(foundName)
};




// filter scores about a set number
function filter(dataArrayName, score) {
    let scores = []

    for (let i = 0; i < dataArrayName.length; i++) {

        if (score <= dataArrayName[i].score) {
            scores.push(dataArrayName[i])


        }
    }
    return scores;
}





//Write a third function, one that takes in the array of people
// and returns a new array with the same list of people but sorted by rank
// As with the previous functions, try writing the sorting algorithm using loops.
//modify your function so that it can take in the name of a property as a parameter
// and sort the array by the value of that property.

// console.log(sort(PERSONDATA))
function rankitup(array) {
array.sort(function(a, b){return a-b});
}

console.log(rankitup(PERSONDATA))

// function sort(array) {
//     let ranks = []
 

//     for (let i = 0; i < array.length; i++) {
//         for (let j = 0; j < array.rank;i++)
//            if (rank > ) {
//             ranks.push(array)

//         }
       

//     }
//       return ranks;
// };
