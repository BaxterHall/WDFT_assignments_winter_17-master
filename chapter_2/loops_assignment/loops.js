/*Loops Assignment Review
Good job.  If you wanted to follow the requirements entirely, you might have wanted to try building a string instead of console.logging each value as you find
it.  This would allow you to console.log 8,2,4 etc instead of a new line each time you find an even number.  Also try to remember to include a ; after each 
declaration or function call.  Try to modify your third and fourth exercises to be functions instead of just loops.
*/


// // Exercise 1
const arr1 = [5, 8, 2, 1, 5, 7, 3, 4, 5, 8, 1, 2, 4, 8, 3, 1, 4, 5]; // should log 8,2,4,8,2,4,8,4

// var evens = arr1.filter(function(x){ return x%2 === 0});
// console.log(evens);
function evenNum(array) {
    for (var i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            console.log(array[i])
        }
    }
};

evenNum(arr1)
const arr2 = [15, 26, 74, 12, 3, 6, 9, 1, 2, 5]; // should log 26,74,12,6,2

// var evens = arr2.filter(function(x){ return x%2 === 0});
// console.log(evens);

evenNum(arr2)

// Exercise 2
const arr3 = [15, 26, 74, 12, 30000, 3, 6, 9, 1, 2, 5]
// var largestValue = arr3.reduce(function(x,y){ return x > y ? x : y });
// console.log(largestValue);
var max = 0;

function largeNum(array) {
    for (var i = 1; i < array.length; i++)
        if (array[i] > max) {
            max = array[i]
        }
    console.log(max)
}
largeNum(arr3)

// Exercise 3
// Create a function that takes in an integer
//  and prints all numbers from 1 to the given integer
//  the number of times equal to the current loop index (ie. 1, 2, 2, 3, 3, 3, ...).


    for (var i = 1; i <= 8; i++) {
        for (var j = 1; j <= i; j++) {
        console.log(i)
    }
};
// Excercise 4
// Alter your answer to Exercise 3 to log the numbers in the form of a triangle.
var help = ""
for (var i = 1; i <= 8; i++) {
    for (var j = 1; j <= i; j++) {
        help += i
    }
    console.log(help)
    help = ""
};


