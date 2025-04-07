/**
 * To run this file in Gitpod, use the
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [1, 2, 3, 4, 5];
let result = [];
for (num of nums) {
	result.push(num * 2);
}

console.log(result); // [2, 4, 6, 8, 10]

// Using map()

let timesTwo = function (num) {
	return num * 2;
};
let simplified = nums.map((num) => num * 2);
console.log(simplified); // [2, 4, 6, 8, 10]

// Simplified w/ map()
let result2 = nums.map((num) => num * 2);
console.log(result2); // [2, 4, 6, 8, 10]

// Simplfied w/ map() + arrow function

// With objects:
const students = [
	{
		id: 1,
		name: "Mark",
		profession: "Developer",
		skill: "JavaScript",
	},
	{
		id: 2,
		name: "Ariel",
		profession: "Developer",
		skill: "HTML",
	},
	{
		id: 3,
		name: "Jason",
		profession: "Designer",
		skill: "CSS",
	},
];

let nameIds = students.map((student) => `${student.name}: ${student.id}`); // Notice how its not "students.name" but "student.name"
// This is because we are using the map() method on the array "students" and passing in a function that takes each student as an argument.
// The argument name can be anything, but it is common to use a singular form of the array name (in this case, "student").
console.log(nameIds); // [ 'Mark: 1', 'Ariel: 2', 'Jason: 3' ]

// Create arrays of names and skills
let arrayOfSkills = students.map((student) => [student.name, student.skill]);
console.log(arrayOfSkills); // [ [ 'Mark', 'JavaScript' ], [ 'Ariel', 'HTML' ], [ 'Jason', 'CSS' ] ]

// Create objects of names and skills
let objectsOfSkills = students.map((student) => {
	return { id: student.id, skill: student.skill }; // Notice how we are returning an object with the properties "name" and "skill"
});
console.log(objectsOfSkills); // [ { name: 'Mark', skill: 'JavaScript' }, { name: 'Ariel', skill: 'HTML' }, { name: 'Jason', skill: 'CSS' } ]

// Add age property using Object Lookup method
const ageMap = {
	Mark: 30,
	Ariel: 28,
	Jason: 29,
};
let updateStudents = students.map((student) => ({
	...student,
	age: ageMap[student.name], // Spread operator to add all properties of the student object and add the age property
}));
console.log(updateStudents); // [ { id: 1, name: 'Mark', profession: 'Developer', skill: 'JavaScript', age: 30 }, 
                             // { id: 2, name: 'Ariel', profession: 'Developer', skill: 'HTML', age: 28 }, 
                             // { id: 3, name: 'Jason', profession: 'Designer', skill: 'CSS', age: 29 } ]
