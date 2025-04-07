/**
 * To run this file in Gitpod, use the
 * command node destructuring.js in the terminal
 */

// Destructuring arrays
let ages = [30, 26, 27];
// let john = ages[0];
// let mary = ages[1];
// let bob = ages[2];
let [john, mary, bob] = ages; // Destructuring assignment
console.log(john, mary, bob); // 30 26 27

// Destructuring objects
let jobs = {
	mike: "Developer",
	jill: "Designer",
	alicia: "Accountant",
};
// let mikeL = jobs.mikeL;
// let jill = jobs.jill;
// let alicia = jobs.alicia;
let { mike, jill, alicia } = jobs; // Destructuring assignment
console.log(mike, jill, alicia); // Developer Designer Accountant

// Destructurtring subsets
let languages = ["english", "french", "spanish", "german", "japanese"];
let [johnNative, johnSecondary] = languages; // Destructuring assignment
console.log(johnNative, johnSecondary); // english french

let [, , maryNative, marySecondary] = languages; // Destructuring assignment
console.log(maryNative, marySecondary); // spanish german

let languages2 = {
	firstLanguage: "english",
	secondLanguage: "french",
	thirdLanguage: "german",
	fourthLanguage: "japanese",
};
let { firstLanguage, secondLanguage } = languages2; // Destructuring assignment
console.log(firstLanguage, secondLanguage); // english french

// Using rest parameter syntax
let fruits = ["apple", "banana", "orange", "peach", "cherry"];
let [favourite, secondFavourite, ...others] = fruits; // Destructuring assignment with rest operator
console.log(favourite); // apple
console.log(secondFavourite); // banana
console.log(others); // [ 'orange', 'peach', 'cherry' ]

let favouriteFoods = {
	brian: "pizza",
	anna: "pasta",
	sarah: "vegetarian",
	andrea: "steak",
};
let { brian, anna, ...rest } = favouriteFoods; // Destructuring assignment with rest operator
console.log(brian); // pizza
console.log(anna); // pasta
console.log(rest); // { sarah: 'vegetarian', andrea: 'steak' }




// ==============================================================================
// Destructuring objects

// let person = {
// 	name: "John",
// 	age: 30,
// 	job: "Developer",
// };
// let { name, age, job } = person; // Destructuring assignment
// console.log(name, age, job); // John 30 Developer

// // Destructuring nested objects
// let person2 = {
// 	name: "John",
// 	age: 30,
// 	job: "Developer",
// 	address: {
// 		city: "New York",
// 		state: "NY",
// 	},
// };
// let {
// 	name: personName,
// 	address: { city, state },
// } = person2; // Destructuring assignment with renaming
// console.log(personName, city, state); // John New York NY

// // Destructuring arrays with default values
// let numbers = [1, 2];
// let [a = 10, b = 20, c = 30] = numbers; // Destructuring assignment with default values
// console.log(a, b, c); // 1 2 30

// // Destructuring objects with default values
// let person3 = {
// 	name: "John",
// 	age: 30,
// };
// let { name: personName2, age: personAge, job: personJob = "Developer" } = person3; // Destructuring assignment with default values
// console.log(personName2, personAge, personJob); // John 30 Developer

// // Destructuring function parameters
// function printPerson({ name, age }) {
// 	console.log(name, age); // John 30
// }
// printPerson(person3); // John 30

// // Destructuring function return values
// function getPerson() {
// 	return {
// 		name: "John",
// 		age: 30,
// 	};
// }
// let { name: personName3, age: personAge2 } = getPerson(); // Destructuring assignment with renaming
// console.log(personName3, personAge2); // John 30

// // Destructuring function return values with default values
// function getPerson2() {
// 	return {
// 		name: "John",
// 		age: 30,
// 		job: "Developer",
// 	};
// }
// let { name: personName5, age: personAge4, job: personJob2 = "Developer" } = getPerson2(); // Destructuring assignment with default values
// console.log(personName4, personAge3, personJob2); // John 30 Developer

// // Destructuring arrow function parameters
// const printPerson2 = ({ name, age }) => {
// 	console.log(name, age); // John 30
// };
// printPerson2(person3); // John 30

// // Destructuring nested arrays
// let nestedArray = [1, [2, 3], 4];
// let [first, [second, third], fourth] = nestedArray; // Destructuring assignment
// console.log(first, second, third, fourth); // 1 2 3 4

// // Destructuring with rest operator
// let numbers2 = [1, 2, 3, 4, 5];

// let [first2, ...rest] = numbers2; // Destructuring assignment with rest operator
// console.log(first2); // 1
// console.log(rest); // [2, 3, 4, 5]

// // Destructuring with rest operator in objects
// let person4 = {
// 	name: "John",
// 	age: 30,
// 	job: "Developer",
// 	address: {
// 		city: "New York",
// 		state: "NY",
// 	},
// };
// let { name: personName4, age: personAge3, ...restOfPerson } = person4; // Destructuring assignment with rest operator
// console.log(personName4); // John
// console.log(personAge3); // 30
// console.log(restOfPerson); // { job: 'Developer', address: { city: 'New York', state: 'NY' } }

// // Destructuring with rest operator in arrays
// let numbers3 = [1, 2, 3, 4, 5];

// let [first3, ...restOfNumbers] = numbers3; // Destructuring assignment with rest operator
// console.log(first3); // 1
// console.log(restOfNumbers); // [2, 3, 4, 5]

// Destructuring subsets

// Using rest parameter syntax
