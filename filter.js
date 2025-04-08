/**
 * To run this file in Gitpod, use the
 * command node filter.js in the terminal
 */

// Simple Filtering
const people = [
	{
		name: "Michael",
		age: 23,
	},
	{
		name: "Lianna",
		age: 16,
	},
	{
		name: "Paul",
		age: 18,
	},
];

const adults = people.filter((person) => person.age >= 21);
// filter() method creates a new array with all elements that pass the test implemented by the provided function.
console.log(adults);

const paul = people.filter((p) => p.name === "Paul"); //people.filter(p => p.name === "Paul")[0] to get the object without the array brackets
console.log(paul); // [ { name: 'Paul', age: 18 } ]

// Complex Filtering
const students = [
	{
		id: 1,
		name: "Mark",
		profession: "Developer",
		skills: [
			{ name: "javascript", yrsExperience: 1 },
			{ name: "html", yrsExperience: 5 },
			{ name: "css", yrsExperience: 3 },
		],
	},
	{
		id: 2,
		name: "Ariel",
		profession: "Developer",
		skills: [
			{ name: "javascript", yrsExperience: 0 },
			{ name: "html", yrsExperience: 4 },
			{ name: "css", yrsExperience: 2 },
		],
	},
	{
		id: 3,
		name: "Jason",
		profession: "Designer",
		skills: [
			{ name: "javascript", yrsExperience: 1 },
			{ name: "html", yrsExperience: 1 },
			{ name: "css", yrsExperience: 5 },
		],
	},
];

const has5yrsExp = (skill) => skill.yrsExperience >= 5;
const strongExp = (student) => student.skills.filter(has5yrsExp).length > 0;
const candidates = students.filter(strongExp).map((student) => student.id);
// const candidatesIds = candidates.map((student) => student.id);
console.log(candidates);

