/**
 * To run this file in Gitpod, use the
 * command node rest-parameter-syntax.js in the terminal
 */

// Regular function call
const sumAll = (a, b, c) => a + b + c;
let sum = sumAll(1, 2, 3); // 6
console.log(`Sum: ${sum}`)

// Extra arguments are ignored
let sum2 = sumAll(1, 2, 3, 4, 5, 6); // still 6
console.log(`Sum2: ${sum2}`)

// Function using ...rest
const sumRest = (a, b, c, ...rest) => {
    let sum = a + b + c; // sum the first three arguments
    // rest is an array of the remaining arguments
    // for (let i = 0; i < rest.length; i++); another way to loop through the array
    for (let i of rest) {
        sum += i;   // add the rest of the arguments to sum
    }
    return sum; // return the sum of all arguments
}

let sum3 = sumRest(1, 2, 3, 4, 5, 6); // 21
console.log(`Sum3: ${sum3}`);
