// To run this file use "node *file-name*.js" in the terminal

// Normal function
const addTwoNumbers = (a, b) => {
    // Code block
	return a + b;
}
let sum = addTwoNumbers(10, 3);
console.log(sum); // 13

// Now arrow function
let addThreeNumbers = (a, b, c) => a + b + c; // You can also use const instead of let
let threeSum = addThreeNumbers(2, 3, 4);
console.log(threeSum); // 9

// Implicit returns
const saySomething = message => console.log(message);
saySomething("Hello World!"); // Hello World!

const sayHello = () => console.log("Hello!");
sayHello(); // Hello!

// Multiple lines in arrow function
const returnMultipleLines = () => (
    `<p>
    This is a paragraph.
    </p>`
)
console.log(returnMultipleLines());